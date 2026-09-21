import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContactModal } from '../ContactModal/ContactModalContext';
import './Footer.css';

type FooterSection = 'explore' | 'connect' | 'access';

function Footer() {
  const [openSection, setOpenSection] = useState<FooterSection | null>(null);
  const { openContactModal } = useContactModal();

  const toggleSection = (section: FooterSection) => {
    setOpenSection((current) => (current === section ? null : section));
  };

  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <img
            src="/images/brand/srcs-logo.png"
            alt="Soil-Right Consulting Services"
          />

          <p>
            Independent consulting and education for better stewardship,
            stronger understanding, and more informed decisions.
          </p>
        </div>

        <div className="footer__links">
          <div className="footer__group">
            <button
              className="footer__group-trigger"
              type="button"
              aria-expanded={openSection === 'explore'}
              onClick={() => toggleSection('explore')}
            >
              <span>Explore</span>
              <span className="footer__group-icon" aria-hidden="true">
                {openSection === 'explore' ? '−' : '+'}
              </span>
            </button>

            <div
              className={`footer__group-content ${
                openSection === 'explore' ? 'footer__group-content--open' : ''
              }`}
            >
              <Link to="/what-we-do">What We Do</Link>
              <Link to="/#who-we-help">Who We Help</Link>
              <Link to="/dig-deeper">Dig Deeper</Link>
              <Link to="/#about">About</Link>
              <Link to="/meet-the-team">Meet the Team</Link>
            </div>
          </div>

          <div className="footer__group">
            <button
              className="footer__group-trigger"
              type="button"
              aria-expanded={openSection === 'connect'}
              onClick={() => toggleSection('connect')}
            >
              <span>Connect</span>
              <span className="footer__group-icon" aria-hidden="true">
                {openSection === 'connect' ? '−' : '+'}
              </span>
            </button>

            <div
              className={`footer__group-content ${
                openSection === 'connect' ? 'footer__group-content--open' : ''
              }`}
            >
              <Link
                to="/#contact"
                onClick={(event) => {
                  event.preventDefault();
                  openContactModal();
                }}
              >
                Contact
              </Link>
              <a href="mailto:info@soilright.com">Email SRCS</a>
            </div>
          </div>

          <div className="footer__group">
            <button
              className="footer__group-trigger"
              type="button"
              aria-expanded={openSection === 'access'}
              onClick={() => toggleSection('access')}
            >
              <span>Access</span>
              <span className="footer__group-icon" aria-hidden="true">
                {openSection === 'access' ? '−' : '+'}
              </span>
            </button>

            <div
              className={`footer__group-content ${
                openSection === 'access' ? 'footer__group-content--open' : ''
              }`}
            >
              <span className="footer__coming">Client Login</span>
              <span className="footer__coming">SR Advisor Login</span>

              <a
                href="https://utilities.raneydaysolutions.com/"
                target="_blank"
                rel="noreferrer"
              >
                RDS Utilities ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container footer__bottom">
        <span>
          © {new Date().getFullYear()} Soil-Right Consulting Services, Inc.
        </span>

        <span>Experience → Evidence → Decision</span>
      </div>
    </footer>
  );
}

export default Footer;
