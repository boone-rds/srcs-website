import './MeetTheTeam.css';

const team = [
  {
    name: 'Randy Darr',
    role: 'Founder',
    summary:
      'Randy brings more than four decades of experience helping growers understand soil, fertility, and field performance. His perspective is rooted in observation, relationships, and a lifetime of asking what the ground is really telling us.',
  },
  {
    name: 'Daniel “Boone” Raney',
    role: 'CEO',
    summary:
      'Boone focuses on connecting agronomic experience with modern data, systems, and decision-making. His work centers on helping clients turn information into practical choices that improve stewardship, efficiency, and performance.',
  },
  {
    name: 'Seth Darr',
    role: 'Operations',
    summary:
      'Seth helps turn plans into field execution, coordinating logistics, sampling, operational details, and the practical work required to deliver dependable results.',
  },
];

function MeetTheTeam() {
  return (
    <main className="team-page">
      <section className="team-page__hero">
        <div className="container">
          <p className="team-page__eyebrow">Meet the Team</p>

          <h1>The people behind the questions.</h1>

          <p>
            Soil-Right combines decades of field experience with a continuing
            curiosity about how better information can lead to better decisions.
          </p>
        </div>
      </section>

      <section className="team-page__intro">
        <div className="container team-page__intro-grid">
          <h2>Experience matters. So does continuing to learn.</h2>

          <p>
            Our team brings different strengths to the table, from agronomy and
            field experience to logistics, technology, systems, and data
            interpretation. The common thread is a desire to understand the
            problem well before recommending the answer.
          </p>
        </div>
      </section>

      <section className="team-page__team">
        <div className="container">
          {team.map((member, index) => (
            <article className="team-member" key={member.name}>
              <div className="team-member__number">
                {String(index + 1).padStart(2, '0')}
              </div>

              <div className="team-member__identity">
                <div className="team-member__photo">
                  <span>Photo</span>
                </div>

                <div>
                  <h2>{member.name}</h2>
                  <span className="team-member__role">{member.role}</span>
                </div>
              </div>

              <p className="team-member__summary">{member.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="team-page__close">
        <div className="container">
          <p className="team-page__eyebrow">How we work</p>

          <h2>
            Listen carefully. Ask better questions. Recommend what is right.
          </h2>

          <a href="/#contact">Start a Conversation</a>
        </div>
      </section>
    </main>
  );
}

export default MeetTheTeam;
