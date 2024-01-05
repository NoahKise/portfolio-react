import '../App.css';
import 'animate.css';
import { Contact } from './Contact';
import { AboutMe } from './AboutMe';
import { Projects } from './Projects.js';
import { Header } from './Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Music } from './Music';

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/music" element={<Music />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
