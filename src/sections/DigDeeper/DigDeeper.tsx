import { Link } from 'react-router-dom';
import './DigDeeper.css';

const resources = [
  {
    label: 'Insights',
    title: 'Learn the why behind the recommendation.',
    description:
      'Articles, explanations, field observations, and practical thinking around soil, fertility, data, and farm decision-making.',
    status: 'Growing library',
    to: '/dig-deeper#insights',
  },
  {
    label: 'Tools',
    title: 'Put useful information to work.',
    description:
      'Calculators, field utilities, planning resources, and decision-support tools designed to answer real questions.',
    status: 'Growing over time',
    to: '/dig-deeper#tools',
  },
  {
    label: 'Events',
    title: 'Dig deeper together.',
    description:
      'Seminars, workshops, webinars, and educational events focused on helping people understand their land and make better decisions.',
    status: 'Dig Deeper Seminar',
    to: '/dig-deeper',
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

            <Link className="dig-deeper__main-link" to="/dig-deeper">
              Explore Dig Deeper →
            </Link>
          </div>
        </div>

        <div className="dig-deeper__grid">
          {resources.map((resource) => (
            <Link
              className="resource-card"
              key={resource.label}
              to={resource.to}
            >
              <div>
                <span className="resource-card__label">{resource.label}</span>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
              </div>

              <div className="resource-card__footer">
                <span>{resource.status}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="dig-deeper__future">
          <span className="dig-deeper__future-label">Where this is headed</span>

          <p>
            Dig Deeper will grow into a broader library of free and premium
            educational content, decision-support tools, and resources for
            clients and Soil-Right Advisors.
          </p>
        </div>
      </div>
    </section>
  );
}

export default DigDeeper;
