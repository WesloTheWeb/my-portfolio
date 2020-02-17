import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import SectionIntroduction from './components/SectionIntroduction/SectionIntroduction';
import Bio from './components/Bio/Bio';
import Social from './components/Social/Social';
import ProjectViewControls from './containers/ProjectViewControls/ProjectViewControls';
import ProjectView from './containers/ProjectViewControls/ProjectView/ProjectView';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div id="bioArrangement">
        <Bio />
        <Social />
      </div>
      <section className="contentSection">
        <SectionIntroduction>Projects</SectionIntroduction>
        <ProjectViewControls />
        <ProjectView />
      </section>
      <section className="contentSection">
        <SectionIntroduction>Experience</SectionIntroduction>

      </section>
      <section className="contentSection">
        <SectionIntroduction>Contact</SectionIntroduction>
        <Contact/>  
      </section>
    </div>
  );
}

export default App;
