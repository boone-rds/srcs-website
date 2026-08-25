import './About.css';

const values = [
  {
    label: 'Independent',
    text: 'Our recommendations are guided by what the field and the data support, not by a product quota.',
  },
  {
    label: 'Experienced',
    text: 'More than four decades in the field give us perspective, pattern recognition, and context that cannot be downloaded.',
  },
  {
    label: 'Family-Owned',
    text: 'Relationships matter here. We want to know the people, the operation, and the decisions behind the numbers.',
  },
  {
    label: 'Faith-First',
    text: 'We believe land, resources, opportunities, and relationships are entrusted to us and should be stewarded faithfully.',
  },
];

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__header">
          <div>
            <p className="about__eyebrow">Why Soil-Right</p>

            <h2>Deep roots. Forward-looking decisions.</h2>
          </div>

          <div className="about__intro">
            <p>
              Soil-Right has spent more than 40 years helping people understand
              their ground. What has changed is the amount of information we can
              now bring into the decision.
            </p>

            <p>
              What has not changed is the responsibility to listen carefully,
              ask better questions, and recommend what we believe is right for
              the client.
            </p>
          </div>
        </div>

        <div className="about__statement">
          <p>Keep the wisdom. Improve the evidence.</p>
        </div>

        <div className="about__values">
          {values.map((value) => (
            <article className="about-value" key={value.label}>
              <span>{value.label}</span>
              <p>{value.text}</p>
            </article>
          ))}
        </div>

        <div className="about__story">
          <div className="about__story-number">
            <span>40+</span>
            <p>years of Soil-Right experience</p>
          </div>

          <div className="about__story-copy">
            <h3>Experience is most valuable when it keeps learning.</h3>

            <p>
              The goal is not to preserve the way things have always been done.
              The goal is to preserve what experience has taught us while using
              better measurements, better tools, and better information to make
              the next decision with greater confidence.
            </p>

            <a href="#contact">Learn more about SRCS →</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
