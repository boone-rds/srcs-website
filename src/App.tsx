import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop/BackToTop';
import ScrollToHash from './components/ScrollToHash/ScrollToHash';
import Home from './pages/Home/Home';
import MeetTheTeam from './pages/MeetTheTeam/MeetTheTeam';

function App() {
  return (
    <>
      <ScrollToHash />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meet-the-team" element={<MeetTheTeam />} />
      </Routes>

      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
