import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './WhatWeDo.css';

const pillars = [
  {
    number: '01',
    title: 'Soil & Fertility',
    intro:
      'Understand what is happening below the surface and build fertility decisions around the soil you actually have.',
    outcomes: [
      'Define meaningful field variability',
      'Build management zones',
      'Evaluate nutrient balance',
      'Develop fertility strategies',
      'Improve long-term soil productivity',
    ],
    services: [
      {
        name: 'Good Dirt Program',
        description:
          'Our foundational soil fertility program, combining soil analysis, management zones, and field-specific recommendations to improve nutrient balance and long-term productivity.',
      },
      {
        name: 'Soil Health Management',
        description:
          'A broader approach to soil vitality that considers nutrient balance, biological function, and management practices over time.',
      },
      {
        name: 'AquaTerra Insights',
        description:
          'A deeper look at nutrient availability and the soil environment to better understand what is accessible to the plant.',
      },
      {
        name: 'Nitrogen Management',
        description:
          'In-season sampling and model-supported decision tools that help improve nitrogen timing, availability, and efficiency.',
      },
      {
        name: 'EC Mapping',
        description:
          'Electrical conductivity mapping used to better understand in-field variability and strengthen management-zone development.',
      },
      {
        name: 'EarthOptics Soil Mapping',
        description:
          'High-resolution soil characterization using EarthOptics sensor technology and targeted ground-truth sampling to better understand variability in soil properties, compaction, texture, and other below-ground conditions.',
      },
    ],
  },
  {
    number: '02',
    title: 'Plant Performance',
    intro:
      'Connect what is happening below ground with what is happening across the field.',
    outcomes: [
      'Understand crop response',
      'Investigate problem areas',
      'Evaluate rootzone conditions',
      'Connect field variability to performance',
      'Identify causes instead of treating symptoms',
    ],
    services: [
      {
        name: 'Rootzone Intelligence',
        description:
          'In-field monitoring that helps reveal soil-moisture behavior, rootzone development, and changing conditions through the season.',
      },
      {
        name: 'RootCause Analysis',
        description:
          'Focused investigation of problem areas using field observations, testing, data, and research methods to uncover likely underlying causes.',
      },
      {
        name: 'AquaINT Water Profile',
        description:
          'Analysis of irrigation, runoff, or other water sources to understand water quality and its influence on soil and crop performance.',
      },
      {
        name: 'FieldFit Solutions',
        description:
          'Independent evaluation of products and practices to help identify solutions that fit the specific needs of a field or operation.',
      },
    ],
  },
  {
    number: '03',
    title: 'Farm Efficiency',
    intro:
      'Look beyond individual agronomic decisions and improve how the operation uses time, labor, equipment, inputs, and capital.',
    outcomes: [
      'Reduce operational friction',
      'Improve field logistics',
      'Use labor and equipment more intentionally',
      'Streamline recurring processes',
      'Connect agronomic and operational decisions',
    ],
    services: [
      {
        name: 'AgDynamics',
        description:
          'A broader operational advisory service that connects technology, field practices, and information to improve efficiency and resource management.',
      },
      {
        name: 'ScoutAlert',
        description:
          'Field-specific alerts and prioritization designed to make scouting more targeted and operationally useful.',
      },
      {
        name: 'Electronic Acreage Reporting',
        description:
          'Digital acreage reporting workflows that reduce paperwork, save time, and help improve reporting accuracy.',
      },
      {
        name: 'EarthOptics Compaction Mapping',
        description:
          'Depth-aware soil compaction mapping that helps identify where tillage may be needed, where it may not be needed, and how deep a treatment should be considered.',
      },
    ],
  },
  {
    number: '04',
    title: 'Data & Decisions',
    intro:
      'Turn the information your operation already generates into something useful.',
    outcomes: [
      'Organize disconnected information',
      'Build data-informed management zones',
      'Interpret spatial relationships',
      'Connect multiple data sources',
      'Use existing data to improve the next decision',
    ],
    services: [
      {
        name: 'Precision Ag Data Management',
        description:
          'Organize, store, interpret, and actively use the precision-ag data your operation has already invested in collecting.',
      },
      {
        name: 'Management Zone Development',
        description:
          'Combine field history, soil information, spatial data, and performance patterns to define meaningful management areas.',
      },
      {
        name: 'EC Mapping',
        description:
          'Use soil electrical conductivity as another layer of spatial context when understanding field variability.',
      },
      {
        name: 'EarthOptics Data Integration',
        description:
          'Bring high-resolution EarthOptics soil information into the broader field-data picture to strengthen variability analysis, zone development, and management decisions.',
      },
      {
        name: 'AgDynamics',
        description:
          'Bring multiple sources of operational and agronomic information together to support better management decisions.',
      },
    ],
  },
  {
    number: '05',
    title: 'Education & Stewardship',
    intro:
      'Help people understand not only what to do, but why the recommendation makes sense.',
    outcomes: [
      'Build confidence in decisions',
      'Develop stronger agronomic understanding',
      'Improve data literacy',
      'Support long-term stewardship',
      'Equip growers, teams, and advisors',
    ],
    services: [
      {
        name: 'Dig Deeper',
        description:
          'Educational content, seminars, tools, and future resources designed to help people understand the why behind better decisions.',
      },
      {
        name: 'AgStrategy Connections',
        description:
          'Help connect clients with external programs, initiatives, and opportunities that may support their operation and stewardship goals.',
      },
      {
        name: 'Grower & Team Education',
        description:
          'Practical education around soil, fertility, data, technology, and decision-making for growers and their teams.',
      },
      {
        name: 'Soil-Right Advisor Network',
        description:
          'A developing network for independent advisors who want access to Soil-Right methods, education, tools, and support.',
      },
    ],
  },
];

function WhatWeDo() {
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia('(max-width: 900px)').matches,
  );

  const [openPillar, setOpenPillar] = useState<string | null>(() =>
    window.matchMedia('(max-width: 900px)').matches ? null : 'all',
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 900px)');

    const handleChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
      setOpenPillar(event.matches ? null : 'all');
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const togglePillar = (pillarNumber: string) => {
    if (!isMobile) {
      return;
    }

    setOpenPillar((current) =>
      current === pillarNumber ? null : pillarNumber,
    );
  };

  return (
    <main className="what-page">
      <section className="what-page__hero">
        <div className="container">
          <div className="page-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>What We Do</span>
          </div>
          <p className="what-page__eyebrow">What We Do</p>

          <h1>We help turn information into decisions.</h1>

          <p>
            Soil-Right works across agronomy, operations, data, and education to
            help clients understand what is happening, why it matters, and what
            to do next.
          </p>
        </div>
      </section>

      <section className="what-page__philosophy">
        <div className="container what-page__philosophy-grid">
          <div>
            <p className="what-page__eyebrow">Our Approach</p>
            <h2>Start with the decision, not the service.</h2>
          </div>

          <div className="what-page__philosophy-copy">
            <p>
              A soil sample, map, model, sensor, or dataset is only useful if it
              improves a decision.
            </p>

            <p>
              We begin by understanding the question, defining the variability
              that matters, gathering the information needed, and interpreting
              it in the context of the operation.
            </p>
          </div>
        </div>
      </section>

      <section className="what-page__process">
        <div className="container">
          <div className="what-page__process-grid">
            <span>Define Variability</span>
            <span>Build Zones</span>
            <span>Measure</span>
            <span>Interpret</span>
            <span>Decide</span>
          </div>
        </div>
      </section>

      <section className="what-page__pillars">
        <div className="container">
          {pillars.map((pillar) => {
            const servicesOpen =
              !isMobile || openPillar === 'all' || openPillar === pillar.number;

            return (
              <article className="what-pillar" key={pillar.number}>
                <div className="what-pillar__top">
                  <div className="what-pillar__number">{pillar.number}</div>

                  <div className="what-pillar__heading">
                    <h2>{pillar.title}</h2>
                    <p>{pillar.intro}</p>
                  </div>

                  <div className="what-pillar__outcomes">
                    <span className="what-pillar__label">We help you</span>

                    <ul>
                      {pillar.outcomes.map((outcome) => (
                        <li key={outcome}>{outcome}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  className={`what-pillar__toggle ${
                    servicesOpen ? 'what-pillar__toggle--open' : ''
                  }`}
                  type="button"
                  aria-expanded={servicesOpen}
                  aria-controls={`services-${pillar.number}`}
                  onClick={() => togglePillar(pillar.number)}
                >
                  <span>
                    {servicesOpen
                      ? 'Hide Services & Programs'
                      : 'View Services & Programs'}
                  </span>

                  <span className="what-pillar__toggle-icon" aria-hidden="true">
                    {servicesOpen ? '−' : '+'}
                  </span>
                </button>

                <div
                  className={`what-pillar__services ${
                    servicesOpen ? 'what-pillar__services--open' : ''
                  }`}
                  id={`services-${pillar.number}`}
                >
                  <div className="what-pillar__services-inner">
                    <div className="what-pillar__services-header">
                      <span className="what-pillar__label">Ways we help</span>

                      <p>
                        Specific services and programs are selected based on the
                        question, the operation, and the information needed to
                        make a better decision.
                      </p>
                    </div>

                    <div className="what-pillar__service-grid">
                      {pillar.services.map((service) => (
                        <div className="service-item" key={service.name}>
                          <h3>{service.name}</h3>
                          <p>{service.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="what-page__decision">
        <div className="container what-page__decision-inner">
          <p className="what-page__eyebrow">The Goal</p>

          <h2>
            Not a sample. Not a map. Not a model.
            <br />
            Confidence in the next decision.
          </h2>

          <p>
            The tools may change from one field or operation to the next. The
            objective does not: understand the situation well enough to make the
            next decision with confidence.
          </p>

          <Link to="/#contact">Start a Conversation</Link>
        </div>
      </section>
    </main>
  );
}

export default WhatWeDo;
