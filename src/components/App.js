import '../App.css';
import 'animate.css';
import { Contact } from './Contact';
import { AboutMe } from './AboutMe';
import { CodingProjects } from './CodingProjects';
import { Header } from './Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Music } from './Music';
import P5Sketch from './P5Sketch';

function App() {

  return (
    <>
      <Router>
        <div id='background'></div>
        <div style={{ position: 'fixed', top: '0', left: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', zIndex: '-2', backgroundColor: 'transparent'}}>
          <P5Sketch />
        </div>
        <Header />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/music" element={<Music />} />
          <Route path="/projects" element={<CodingProjects />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
