import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__overlay" />

      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">Experience. Insight. Stewardship.</p>

          <h1>Better decisions start below the surface.</h1>

          <p className="hero__lead">
            SRCS combines decades of agronomic experience with modern field data
            to help growers understand what is happening, why it is happening,
            and what to do next.
          </p>

          <div className="hero__actions">
            <a
              className="hero__button hero__button--primary"
              href="#dig-deeper"
            >
              Dig Deeper
            </a>

            <a className="hero__button hero__button--secondary" href="#contact">
              Start a Conversation
            </a>
          </div>
        </div>

        <div className="hero__credibility">
          <span className="hero__credibility-number">40+</span>

          <span className="hero__credibility-copy">
            years in the field.
            <br />
            Still asking better questions.
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
