import { Link } from 'react-router-dom';
import { useContactModal } from '../../components/ContactModal/ContactModalContext';
import './MeetTheTeam.css';

const team = [
  {
    name: 'Randy Darr',
    role: 'Founder & Senior Agronomic Advisor',
    image: '/images/team/randy-darr.jpg',
    summary:
      'Randy founded Soil-Right and brings more than four decades of experience in soil fertility, crop production, and agronomic consulting. His work is grounded in field observation, long-term relationships, and a deep understanding of how soil chemistry and management decisions interact over time.',
  },
  {
    name: 'Daniel “Boone” Raney',
    role: 'CEO',
    image: '/images/team/boone-raney.jpg',
    summary:
      'Boone brings agronomic experience together with systems thinking, technology, and data-informed decision making. His focus is helping growers and partners turn field, operational, and agronomic information into practical decisions that improve stewardship, efficiency, and long-term performance.',
  },
  {
    name: 'Seth Darr',
    role: 'Operations & Field Services',
    image: '/images/team/seth-darr.jpg',
    summary:
      'Seth leads much of the coordination and field execution behind Soil-Right’s work. From sampling and logistics to field operations and client support, he helps ensure that the information used in a recommendation begins with dependable work on the ground.',
  },
];

function MeetTheTeam() {
  const { openContactModal } = useContactModal();

  return (
    <main className="team-page">
      <section className="team-page__hero">
        <div className="container">
          <div className="page-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Meet the Team</span>
          </div>
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
                  <img src={member.image} alt={member.name} />
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

          <Link
            to="/#contact"
            onClick={(event) => {
              event.preventDefault();
              openContactModal();
            }}
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}

export default MeetTheTeam;
