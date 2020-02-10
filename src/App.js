import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import SectionIntroduction from './components/SectionIntroduction/SectionIntroduction';
import Bio from './components/Bio/Bio';
import Social from './components/Social/Social';
import ProjectViewControls from './components/containers/ProjectViewControls/ProjectViewControls';
import ProjectView from  './components/containers/ProjectViewControls/ProjectView/ProjectView';

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

    </div>
  );
}

export default App;
