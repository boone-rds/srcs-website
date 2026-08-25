import Hero from '../../sections/Hero/Hero';
import ExperienceData from '../../sections/ExperienceData/ExperienceData';
import Problems from '../../sections/Problems/Problems';
import Audiences from '../../sections/Audiences/Audiences';
import DigDeeper from '../../sections/DigDeeper/DigDeeper';
import About from '../../sections/About/About';
import ContactCTA from '../../sections/ContactCTA/ContactCTA';

function Home() {
  return (
    <main>
      <Hero />
      <ExperienceData />
      <Problems />
      <Audiences />
      <DigDeeper />
      <About />
      <ContactCTA />
    </main>
  );
}

export default Home;
