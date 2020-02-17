import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import SectionIntroduction from './components/SectionIntroduction/SectionIntroduction';
import Bio from './components/Bio/Bio';
import Social from './components/Social/Social';
// import ProjectViewControls from './containers/ProjectViewControls/ProjectViewControls';
import ProjectView from './containers/ProjectViewControls/ProjectView/ProjectView';
import Experience from './containers/Experience/Experience';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <div id="bioArrangement">
          <Bio />
          <Social />
        </div>
        <section id="projects" className="contentSection">
          <SectionIntroduction>Projects</SectionIntroduction>
          {/* <ProjectViewControls /> */}
          <ProjectView />
        </section>
        <section id="experience" className="contentSection">
          <SectionIntroduction>Experience</SectionIntroduction>
          <Experience />
        </section>
        <section id="contact" className="contentSection">
          <SectionIntroduction>Contact</SectionIntroduction>
          <Contact />
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
