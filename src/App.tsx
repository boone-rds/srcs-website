import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop/BackToTop';
import ScrollToHash from './components/ScrollToHash/ScrollToHash';
import ScrollToTopOnRoute from './components/ScrollToTopOnRoute/ScrollToTopOnRoute';
import ContactModalProvider from './components/ContactModal/ContactModalProvider';
import Home from './pages/Home/Home';
import MeetTheTeam from './pages/MeetTheTeam/MeetTheTeam';
import WhatWeDo from './pages/WhatWeDo/WhatWeDo';
import DigDeeperPage from './pages/DigDeeper/DigDeeper';

function App() {
  return (
    <ContactModalProvider>
      <ScrollToHash />
      <ScrollToTopOnRoute />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meet-the-team" element={<MeetTheTeam />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/dig-deeper" element={<DigDeeperPage />} />
      </Routes>

      <Footer />
      <BackToTop />
    </ContactModalProvider>
  );
}

export default App;
