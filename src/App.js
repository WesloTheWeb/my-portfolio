import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import SectionIntroduction from './components/SectionIntroduction/SectionIntroduction';
import Intro from './components/Intro/Intro';
// import ProjectViewControls from './containers/ProjectViewControls/ProjectViewControls';
import ProjectView from './containers/ProjectViewControls/ProjectView/ProjectView';
import Experience from './containers/Experience/Experience';
import Contact from './components/Contact/Contact';
import Collection from './containers/Collection/Collection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
          <Route path="/" component={Intro} exact />
        <section id="projects" className="contentSection">
          <SectionIntroduction>Projects</SectionIntroduction>
          {/* <ProjectViewControls /> */}
          <ProjectView />
          <Route path="/projects" component={Collection} exact />
        </section>
        <section id="experience" className="contentSection">
          <Route path="/" component={Experience} exact />
        </section>
        <section id="contact" className="contentSection">
          <SectionIntroduction>Contact</SectionIntroduction>
          <Contact />
        </section>
          <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
