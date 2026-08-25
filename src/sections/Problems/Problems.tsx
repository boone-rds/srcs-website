import './Problems.css';

const problems = [
  {
    number: '01',
    title: 'Soil & Fertility',
    description:
      'Build a clearer picture of nutrient availability, soil balance, and what the ground actually needs.',
  },
  {
    number: '02',
    title: 'Plant Performance',
    description:
      'Connect soil conditions, plant response, weather, and agronomic management to better understand crop performance.',
  },
  {
    number: '03',
    title: 'Farm Efficiency',
    description:
      'Use labor, capital, equipment, inputs, and time more intentionally across the operation.',
  },
  {
    number: '04',
    title: 'Data & Decisions',
    description:
      'Turn the information your operation already generates into insight you can actually use.',
  },
  {
    number: '05',
    title: 'Stewardship',
    description:
      'Manage land, resources, and opportunity with a long-term view toward productivity, health, and responsibility.',
  },
];

function Problems() {
  return (
    <section className="problems" id="what-we-do">
      <div className="container">
        <div className="problems__header">
          <div>
            <p className="problems__eyebrow">What we help solve</p>
            <h2>Better questions lead to better decisions.</h2>
          </div>

          <p className="problems__intro">
            SRCS helps clients move beyond isolated tests and disconnected data
            points toward a clearer understanding of what is happening across
            the operation.
          </p>
        </div>

        <div className="problems__grid">
          {problems.map((problem) => (
            <article className="problem-card" key={problem.number}>
              <span className="problem-card__number">{problem.number}</span>

              <h3>{problem.title}</h3>

              <p>{problem.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Problems;
