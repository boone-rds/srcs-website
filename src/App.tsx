import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop/BackToTop';
import ScrollToHash from './components/ScrollToHash/ScrollToHash';
import Home from './pages/Home/Home';
import MeetTheTeam from './pages/MeetTheTeam/MeetTheTeam';
import WhatWeDo from './pages/WhatWeDo/WhatWeDo';

function App() {
  return (
    <>
      <ScrollToHash />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meet-the-team" element={<MeetTheTeam />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
      </Routes>

      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
