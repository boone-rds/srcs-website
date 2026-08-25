import './ContactCTA.css';

function ContactCTA() {
  return (
    <section className="contact-cta" id="contact">
      <div className="container contact-cta__inner">
        <div>
          <p className="contact-cta__eyebrow">Ready to Dig Deeper?</p>

          <h2>Start with the question that is keeping you up at night.</h2>

          <p className="contact-cta__lead">
            Whether the issue is fertility, field variability, operational
            efficiency, or simply making better use of the data you already
            have, we would rather start with the problem than sell you a
            package.
          </p>
        </div>

        <div className="contact-cta__actions">
          <a className="contact-cta__primary" href="mailto:info@soilright.com">
            Start a Conversation
          </a>

          <a className="contact-cta__secondary" href="#dig-deeper">
            Explore Dig Deeper
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactCTA;
