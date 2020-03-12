import React from 'react';
import { BrowserRouter, Route, } from 'react-router-dom';
import './App.scss';
import Navigation from './components/Navigation/Navigation';
import ProjectNavigation from './components/Navigation/ProjectNavigation/ProjectNavigation';
import SectionIntroduction from './components/SectionIntroduction/SectionIntroduction';
import Intro from './components/Intro/Intro';
import ProjectView from './containers/ProjectViewControls/ProjectView/ProjectView';
import Experience from './containers/Experience/Experience';
import Contact from './components/Contact/Contact';
import Archives from './containers/Archives/Archives';
import Footer from './components/Footer/Footer';

// Pieces
import KohlsCase from './containers/Archives/Showcase/ProjectWebsitesFull/CaseKohls';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={Navigation} exact />
        <Route path="/projects" component={ProjectNavigation}  />
        <Route path="/" component={Intro} exact />
        <section id="projects" className="contentSection">
          <SectionIntroduction>Projects</SectionIntroduction>
          <Route path="/projects" component={Archives} exact />
          <Route path="/projects/kohls" 
            component={KohlsCase} 
            exact 
            />
        <Route path="/" component={ProjectView} exact />
        </section>
        <section id="experience" className="contentSection">
          <Route path="/" component={Experience} exact />
        </section>
        <section id="contact" className="contentSection">
          <Route path="/" component={Contact} exact />
        </section>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
