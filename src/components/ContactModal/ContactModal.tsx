import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from 'react';
import './ContactModal.css';

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

type TurnstileOptions = {
  sitekey: string;
  theme?: 'light' | 'dark' | 'auto';
  callback?: (token: string) => void;
  'expired-callback'?: () => void;
  'error-callback'?: () => void;
};

type TurnstileApi = {
  render: (container: HTMLElement, options: TurnstileOptions) => string;
  reset: (widgetId?: string) => void;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

type TurnstileWidgetProps = {
  onToken: (token: string) => void;
  resetKey: number;
};

type GatewayResponse = {
  success?: boolean;
  error?: string;
};

const TURNSTILE_SCRIPT_ID = 'cloudflare-turnstile-script';
const TURNSTILE_SCRIPT_URL =
  'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

const TURNSTILE_SITE_KEY = '0x4AAAAAAE_GKeTnTidZiotP';

const CONTACT_GATEWAY_URL =
  'https://rds-contact-gateway.raneydaysolutions.workers.dev/contact';

const EMAIL_PATTERN = '[^\\s@]+@[^\\s@]+\\.[^\\s@]+';
const PHONE_PATTERN = '\\(\\d{3}\\) \\d{3}-\\d{4}';

function formatPhoneNumber(value: string) {
  const digits = value.replace(/\D/g, '');
  const nationalNumber =
    digits.length > 10 && digits.startsWith('1')
      ? digits.slice(1, 11)
      : digits.slice(0, 10);

  if (nationalNumber.length === 0) {
    return '';
  }

  if (nationalNumber.length <= 3) {
    return `(${nationalNumber}`;
  }

  if (nationalNumber.length <= 6) {
    return `(${nationalNumber.slice(0, 3)}) ${nationalNumber.slice(3)}`;
  }

  return `(${nationalNumber.slice(0, 3)}) ${nationalNumber.slice(
    3,
    6,
  )}-${nationalNumber.slice(6)}`;
}

function TurnstileWidget({ onToken, resetKey }: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const renderWidget = () => {
      if (
        cancelled ||
        !containerRef.current ||
        !window.turnstile ||
        widgetIdRef.current
      ) {
        return;
      }

      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        theme: 'light',
        callback: (token) => {
          onToken(token);
        },
        'expired-callback': () => {
          onToken('');
        },
        'error-callback': () => {
          onToken('');
        },
      });
    };

    if (window.turnstile) {
      renderWidget();
    } else {
      let script = document.getElementById(
        TURNSTILE_SCRIPT_ID,
      ) as HTMLScriptElement | null;

      if (!script) {
        script = document.createElement('script');
        script.id = TURNSTILE_SCRIPT_ID;
        script.src = TURNSTILE_SCRIPT_URL;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      }

      script.addEventListener('load', renderWidget);

      return () => {
        cancelled = true;
        script?.removeEventListener('load', renderWidget);

        if (widgetIdRef.current && window.turnstile) {
          window.turnstile.remove(widgetIdRef.current);
        }

        widgetIdRef.current = null;
      };
    }

    return () => {
      cancelled = true;

      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
      }

      widgetIdRef.current = null;
    };
  }, [onToken]);

  useEffect(() => {
    if (!resetKey || !widgetIdRef.current || !window.turnstile) {
      return;
    }

    window.turnstile.reset(widgetIdRef.current);
  }, [resetKey]);

  return <div className="contact-modal__turnstile" ref={containerRef} />;
}

function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const [turnstileToken, setTurnstileToken] = useState('');
  const [submissionStatus, setSubmissionStatus] =
    useState<SubmissionStatus>('idle');
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [turnstileResetKey, setTurnstileResetKey] = useState(0);

  const handleTurnstileToken = useCallback((token: string) => {
    setTurnstileToken(token);
  }, []);

  const resetModalState = useCallback(() => {
    setTurnstileToken('');
    setSubmissionStatus('idle');
    setSubmissionMessage('');
    setTurnstileResetKey(0);
  }, []);

  const handleClose = useCallback(() => {
    if (submissionStatus === 'submitting') {
      return;
    }

    resetModalState();
    onClose();
  }, [onClose, resetModalState, submissionStatus]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    const firstInput =
      dialogRef.current?.querySelector<HTMLInputElement>('input');

    firstInput?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleClose, isOpen]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!turnstileToken || submissionStatus === 'submitting') {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmissionStatus('submitting');
    setSubmissionMessage('');

    try {
      const response = await fetch(CONTACT_GATEWAY_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          source: 'srcs',
          name: String(formData.get('name') ?? ''),
          email: String(formData.get('email') ?? ''),
          phone: String(formData.get('phone') ?? ''),
          organization: String(formData.get('organization') ?? ''),
          topic: String(formData.get('topic') ?? ''),
          message: String(formData.get('message') ?? ''),
          website: String(formData.get('website') ?? ''),
          turnstileToken,
        }),
      });

      const result = (await response
        .json()
        .catch(() => null)) as GatewayResponse | null;

      if (!response.ok || !result?.success) {
        throw new Error(
          result?.error ??
            'We could not submit your message. Please try again.',
        );
      }

      setSubmissionStatus('success');
      setSubmissionMessage('');
    } catch (error) {
      setTurnstileToken('');
      setTurnstileResetKey((current) => current + 1);
      setSubmissionStatus('error');
      setSubmissionMessage(
        error instanceof Error
          ? error.message
          : 'We could not submit your message. Please try again.',
      );
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="contact-modal"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          handleClose();
        }
      }}
    >
      <div
        ref={dialogRef}
        className="contact-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >
        <button
          className="contact-modal__close"
          type="button"
          aria-label="Close contact form"
          onClick={handleClose}
          disabled={submissionStatus === 'submitting'}
        >
          <span aria-hidden="true">×</span>
        </button>

        {submissionStatus === 'success' ? (
          <div className="contact-modal__success" role="status">
            <p className="contact-modal__eyebrow">Message Sent</p>

            <h2 id="contact-modal-title">Thanks for reaching out.</h2>

            <p>
              Your message has been sent to Soil-Right. We&apos;ll review it and
              follow up soon.
            </p>

            <button
              className="contact-modal__submit"
              type="button"
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="contact-modal__header">
              <p className="contact-modal__eyebrow">Start a Conversation</p>

              <h2 id="contact-modal-title">
                Tell us what you&apos;re trying to solve.
              </h2>

              <p>
                Start with the question, challenge, or decision in front of you.
                We&apos;ll take it from there.
              </p>
            </div>

            <form
              className="contact-modal__form"
              onSubmit={handleSubmit}
              aria-busy={submissionStatus === 'submitting'}
            >
              <div className="contact-modal__field-grid">
                <label className="contact-modal__field">
                  <span>Name *</span>
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    maxLength={120}
                    required
                  />
                </label>

                <label className="contact-modal__field">
                  <span>Email *</span>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    inputMode="email"
                    maxLength={254}
                    pattern={EMAIL_PATTERN}
                    title="Enter a valid email address, such as name@example.com."
                    onBlur={(event) => {
                      event.currentTarget.value = event.currentTarget.value
                        .trim()
                        .toLowerCase();
                    }}
                    required
                  />
                </label>

                <label className="contact-modal__field">
                  <span>Phone</span>
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    inputMode="tel"
                    maxLength={14}
                    pattern={PHONE_PATTERN}
                    placeholder="(555) 555-5555"
                    title="Enter a 10-digit phone number."
                    onInput={(event) => {
                      event.currentTarget.value = formatPhoneNumber(
                        event.currentTarget.value,
                      );
                    }}
                  />
                </label>

                <label className="contact-modal__field">
                  <span>Farm / Business / Organization</span>
                  <input
                    type="text"
                    name="organization"
                    autoComplete="organization"
                    maxLength={180}
                  />
                </label>
              </div>

              <label className="contact-modal__field">
                <span>What would you like to talk about? *</span>

                <select name="topic" defaultValue="" required>
                  <option value="" disabled>
                    Select a topic
                  </option>
                  <option value="Soil & Fertility">Soil & Fertility</option>
                  <option value="Plant Performance">Plant Performance</option>
                  <option value="Farm Efficiency">Farm Efficiency</option>
                  <option value="Data & Decisions">Data & Decisions</option>
                  <option value="Education & Stewardship">
                    Education & Stewardship
                  </option>
                  <option value="Soil-Right Advisor Network">
                    Soil-Right Advisor Network
                  </option>
                  <option value="Something Else">Something Else</option>
                </select>
              </label>

              <label className="contact-modal__field">
                <span>Tell us a little more *</span>
                <textarea
                  name="message"
                  rows={5}
                  maxLength={5000}
                  required
                  placeholder="What question, challenge, or decision are you working through?"
                />
              </label>

              <div className="contact-modal__honeypot" aria-hidden="true">
                <label>
                  Website
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </label>
              </div>

              <div className="contact-modal__verification">
                <TurnstileWidget
                  onToken={handleTurnstileToken}
                  resetKey={turnstileResetKey}
                />
              </div>

              {submissionStatus === 'error' && (
                <p
                  className="contact-modal__status contact-modal__status--error"
                  role="alert"
                >
                  {submissionMessage}
                </p>
              )}

              <div className="contact-modal__actions">
                <button
                  className="contact-modal__cancel"
                  type="button"
                  onClick={handleClose}
                  disabled={submissionStatus === 'submitting'}
                >
                  Cancel
                </button>

                <button
                  className="contact-modal__submit"
                  type="submit"
                  disabled={
                    !turnstileToken || submissionStatus === 'submitting'
                  }
                >
                  {submissionStatus === 'submitting'
                    ? 'Sending...'
                    : 'Send Message'}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default ContactModal;
