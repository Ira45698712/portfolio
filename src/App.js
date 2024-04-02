import "./styles/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/nav/Navbar";
import Footer from "./components/footer/footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import SeperateProj from "./pages/SeperateProj";
import ScrollToTop from "./utils/scrollToTop";
import Resume from "./resume/resume";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/project/:id" element={<SeperateProj />}/>
          <Route path="/contacts" element={<Contacts />}/>
          <Route path="/resume" element={<Resume />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
