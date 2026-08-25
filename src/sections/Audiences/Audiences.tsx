import './Audiences.css';

const audiences = [
  {
    title: 'Production Agriculture',
    description:
      'Growers, farm managers, and produce operations looking for clearer answers around fertility, soil health, field variability, efficiency, and long-term performance.',
  },
  {
    title: 'Turf & Specialty Land',
    description:
      'Golf courses, sod farms, lawncare professionals, and land managers working to improve soil balance, plant health, and resource use.',
  },
  {
    title: 'Agricultural Partners',
    description:
      'Technology providers, agronomy groups, consultants, and service companies looking for an independent partner to add soil and decision-support expertise.',
  },
  {
    title: 'Enterprise Agriculture',
    description:
      'Larger agricultural organizations looking for experienced field support, scalable consulting, training, data interpretation, and specialized project work.',
  },
  {
    title: 'Soil-Right Advisor Network',
    description:
      'Independent consultants who want access to proven methods, tools, education, and support.',
  },
];

function Audiences() {
  return (
    <section className="audiences" id="who-we-help">
      <div className="container">
        <div className="audiences__header">
          <p className="audiences__eyebrow">Who we help</p>

          <h2>Different ground. Same need for better decisions.</h2>

          <p>
            Good stewardship is not limited to one crop, one geography, or one
            kind of operation. We work with people responsible for managing
            land, inputs, information, and resources well.
          </p>
        </div>

        <div className="audiences__grid">
          {audiences.map((audience) => (
            <article className="audience-card" key={audience.title}>
              <span className="audience-card__line" />
              <h3>{audience.title}</h3>
              <p>{audience.description}</p>
              <a href="#contact">Start a conversation →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Audiences;
