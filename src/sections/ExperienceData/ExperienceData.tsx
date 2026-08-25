import './ExperienceData.css';

function ExperienceData() {
  return (
    <section className="experience-data" id="about">
      <div className="container experience-data__inner">
        <div className="experience-data__intro">
          <p className="experience-data__eyebrow">
            Built on experience. Improved by evidence.
          </p>

          <h2>40 years of experience. Better ways to use it.</h2>

          <p>
            We do not believe better decisions require abandoning what
            experience has taught us. They require better ways to test
            assumptions, understand variability, and connect what we see in the
            field with what the data is telling us.
          </p>
        </div>

        <div className="experience-data__bridge">
          <div className="experience-data__column">
            <span className="experience-data__label">Experience</span>

            <h3>Know where to look.</h3>

            <p>
              Decades in the field build pattern recognition. They teach us what
              to question, what matters, and when something does not quite add
              up.
            </p>

            <ul>
              <li>Field observation</li>
              <li>Agronomic judgment</li>
              <li>Local knowledge</li>
              <li>Pattern recognition</li>
            </ul>
          </div>

          <div className="experience-data__center">
            <span>+</span>
          </div>

          <div className="experience-data__column">
            <span className="experience-data__label">Data</span>

            <h3>Know what to do next.</h3>

            <p>
              Soil tests, maps, imagery, weather, operational records, and other
              measurements help us move from assumption to evidence.
            </p>

            <ul>
              <li>Measurement</li>
              <li>Spatial context</li>
              <li>Operational data</li>
              <li>Decision support</li>
            </ul>
          </div>
        </div>

        <div className="experience-data__statement">
          <p>
            Experience tells us where to look. Data helps us decide what to do
            next.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ExperienceData;
