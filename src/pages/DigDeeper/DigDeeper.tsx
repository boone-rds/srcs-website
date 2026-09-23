import { Link } from 'react-router-dom';
import { useContactModal } from '../../components/ContactModal/ContactModalContext';
import './DigDeeper.css';

const insights = [
  {
    category: 'Soil & Fertility',
    title: 'How to Read a Soil Test Without Chasing Numbers',
  },
  {
    category: 'Data & Decisions',
    title: 'The Difference Between Data Collection and Decision Support',
  },
  {
    category: 'Field Performance',
    title: 'Why Management Zones Matter',
  },
];

const freeTools = [
  {
    title: 'Nutrient Conversion Tools',
    description:
      'Simple calculators and references for common nutrient, fertilizer, and agronomic conversions.',
  },
  {
    title: 'Field Planning Resources',
    description:
      'Worksheets, checklists, and references designed to help organize the questions behind a decision.',
  },
  {
    title: 'Decision Guides',
    description:
      'Educational tools that help identify what information may be useful before making a larger agronomic or operational decision.',
  },
];

const premiumTools = [
  {
    title: 'Soil-Test Interpretation',
    description:
      'A guided interpretation tool designed to help identify relationships, questions, and areas that may deserve deeper investigation.',
  },
  {
    title: 'Nitrogen Decision Support',
    description:
      'Structured analysis combining management inputs and field context to support nitrogen decision-making.',
  },
  {
    title: 'Field Profitability Analysis',
    description:
      'Evaluate production assumptions, costs, returns, and management scenarios at the field or management-zone level.',
  },
  {
    title: 'Compaction Decision Tool',
    description:
      'Organize field observations and measurements to help evaluate whether compaction may be limiting performance and what should be investigated next.',
  },
];

function DigDeeper() {
  const { openContactModal } = useContactModal();

  return (
    <main className="deeper-page">
      <section className="deeper-page__hero">
        <div className="container">
          <div className="page-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Dig Deeper</span>
          </div>
          <p className="deeper-page__eyebrow">Dig Deeper</p>

          <h1>Better stewardship starts with better understanding.</h1>

          <p className="deeper-page__hero-copy">
            Dig Deeper is where Soil-Right shares the thinking, tools, and
            education behind better decisions.
          </p>
        </div>
      </section>

      <section className="deeper-page__principle">
        <div className="container deeper-page__principle-grid">
          <div>
            <p className="deeper-page__eyebrow">The Idea</p>

            <h2>Learn enough to ask better questions.</h2>
          </div>

          <div className="deeper-page__principle-copy">
            <p>
              More information is not automatically more useful. Dig Deeper is
              designed to help people understand relationships, recognize the
              questions that matter, and use information more intentionally.
            </p>

            <p>
              It is education and decision support, not a substitute for the
              context and judgment of an advisory relationship.
            </p>
          </div>
        </div>
      </section>

      <section className="deeper-page__ladder">
        <div className="container">
          <div className="deeper-page__ladder-grid">
            <div>
              <span>01</span>
              <strong>Learn</strong>
              <p>Understand principles and ask better questions.</p>
            </div>

            <div>
              <span>02</span>
              <strong>Explore</strong>
              <p>Use resources and simple tools to understand the situation.</p>
            </div>

            <div>
              <span>03</span>
              <strong>Analyze</strong>
              <p>Use premium tools for deeper, customized decision support.</p>
            </div>

            <div>
              <span>04</span>
              <strong>Apply</strong>
              <p>
                Work with SRCS when the decision needs context and judgment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="deeper-page__insights" id="insights">
        <div className="container">
          <div className="deeper-page__section-header">
            <div>
              <p className="deeper-page__eyebrow">Insights</p>
              <h2>The thinking behind the recommendation.</h2>
            </div>

            <p>
              Articles and educational content around soil, fertility, field
              performance, data, operations, and stewardship.
            </p>
          </div>

          <div className="deeper-page__insight-grid">
            {insights.map((insight) => (
              <article className="insight-card" key={insight.title}>
                <span>{insight.category}</span>
                <h3>{insight.title}</h3>
                <p>Future Insight</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="deeper-page__tools" id="tools">
        <div className="container">
          <div className="deeper-page__section-header">
            <div>
              <p className="deeper-page__eyebrow">Free Tools & Resources</p>

              <h2>Useful enough to help. Not designed to replace advice.</h2>
            </div>

            <p>
              Free resources will focus on education, organization, reference,
              and basic calculations rather than field-specific prescriptions.
            </p>
          </div>

          <div className="deeper-page__tool-grid">
            {freeTools.map((tool) => (
              <article className="tool-card" key={tool.title}>
                <span className="tool-card__access">Free</span>
                <h3>{tool.title}</h3>
                <p>{tool.description}</p>
                <span className="tool-card__status">Planned</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="deeper-page__premium">
        <div className="container">
          <div className="deeper-page__section-header">
            <div>
              <p className="deeper-page__eyebrow">Dig Deeper Premium</p>

              <h2>When the tool starts working with your information.</h2>
            </div>

            <p>
              Premium tools will move beyond general education into customized
              analysis and structured decision support.
            </p>
          </div>

          <div className="deeper-page__premium-grid">
            {premiumTools.map((tool) => (
              <article className="premium-card" key={tool.title}>
                <div>
                  <span className="premium-card__access">Premium</span>
                  <h3>{tool.title}</h3>
                  <p>{tool.description}</p>
                </div>

                <span className="premium-card__status">Future Tool</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="deeper-page__boundary">
        <div className="container deeper-page__boundary-grid">
          <div>
            <p className="deeper-page__eyebrow">Where Tools Stop</p>

            <h2>Some decisions deserve more than a calculator.</h2>
          </div>

          <div>
            <p>
              Fields have history. Operations have constraints. Data has
              context. A tool can organize information and expose relationships,
              but it cannot fully understand the operation behind the numbers.
            </p>

            <p>That is where Soil-Right advisory begins.</p>

            <Link
              to="/#contact"
              onClick={(event) => {
                event.preventDefault();
                openContactModal();
              }}
            >
              Work With Soil-Right
            </Link>
          </div>
        </div>
      </section>

      <section className="deeper-page__future">
        <div className="container">
          <p className="deeper-page__eyebrow">Future Access</p>

          <h2>One platform. Different levels of relationship.</h2>

          <div className="deeper-page__future-grid">
            <article>
              <span>Public</span>
              <h3>Dig Deeper</h3>
              <p>Insights, free resources, events, and educational tools.</p>
            </article>

            <article>
              <span>Premium</span>
              <h3>Advanced Tools</h3>
              <p>
                Customized calculators, analysis, reports, and deeper
                educational resources.
              </p>
            </article>

            <article>
              <span>Clients</span>
              <h3>Client Access</h3>
              <p>
                Future access to field data, reports, raw files, resources,
                invoices, and client-specific information.
              </p>
            </article>

            <article>
              <span>Advisors</span>
              <h3>Advisor Network</h3>
              <p>
                Training, methods, resources, utilities, and support for
                Soil-Right Advisors.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default DigDeeper;
