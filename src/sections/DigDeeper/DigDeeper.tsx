import './DigDeeper.css';

const resources = [
  {
    label: 'Insights',
    title: 'Learn the why behind the recommendation.',
    description:
      'Articles, explanations, field observations, and practical thinking around soil, fertility, data, and farm decision-making.',
    status: 'Growing library',
  },
  {
    label: 'Tools',
    title: 'Put useful information to work.',
    description:
      'Calculators, field utilities, weather and agronomic resources, and future decision-support tools designed to answer real questions.',
    status: 'Coming soon',
  },
  {
    label: 'Events',
    title: 'Dig deeper together.',
    description:
      'Seminars, workshops, webinars, and educational events focused on helping people understand their land and make better decisions.',
    status: 'Dig Deeper Seminar',
  },
];

function DigDeeper() {
  return (
    <section className="dig-deeper" id="dig-deeper">
      <div className="container">
        <div className="dig-deeper__header">
          <div>
            <p className="dig-deeper__eyebrow">Dig Deeper</p>

            <h2>Better stewardship starts with better understanding.</h2>
          </div>

          <div className="dig-deeper__intro">
            <p>
              Consulting solves today&apos;s question. Education helps people
              make better decisions tomorrow.
            </p>

            <p>
              Dig Deeper is where SRCS shares the tools, ideas, and resources
              behind the work.
            </p>
          </div>
        </div>

        <div className="dig-deeper__grid">
          {resources.map((resource) => (
            <article className="resource-card" key={resource.label}>
              <div>
                <span className="resource-card__label">{resource.label}</span>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
              </div>

              <div className="resource-card__footer">
                <span>{resource.status}</span>
                <span aria-hidden="true">↗</span>
              </div>
            </article>
          ))}
        </div>

        <div className="dig-deeper__future">
          <span className="dig-deeper__future-label">Where this is headed</span>

          <p>
            Over time, Dig Deeper will grow into a broader library of free and
            premium educational content, data resources, agronomic tools, and
            client and SR Advisor resources.
          </p>
        </div>
      </div>
    </section>
  );
}

export default DigDeeper;
