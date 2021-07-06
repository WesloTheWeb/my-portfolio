import React from 'react';
import { BrowserRouter, Route, Link, } from 'react-router-dom';
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
import Textbox from './components/Textbox/Textbox';

// Pieces
import KohlsCase from './containers/Archives/Showcase/ProjectWebsitesFull/CaseKohls';
import MSJCase from './containers/Archives/Showcase/ProjectWebsitesFull/CaseMSJ';
import MCWCase from './containers/Archives/Showcase/ProjectWebsitesFull/CaseMCW';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={Navigation} exact />
        <Route path="/projects" component={ProjectNavigation} />
        <Route path="/" component={Intro} exact />
        <section id="projects" className="contentSection">
          <SectionIntroduction>Projects</SectionIntroduction>
          <Route path="/projects" component={Archives} exact />
          <Route path="/projects/kohls"
            component={KohlsCase}
            exact
          />
          <Route path="/projects/msj"
            component={MSJCase}
            exact
          />
          <Route path="/projects/mcw"
            component={MCWCase}
            exact
          />
          <Route path="/" exact>
            <Textbox>Recent projects.<br /><b>Note: 7/5/2021 - Wow! Been forever since I edited anything here. I want to redo
              my portfolio site as I have grown <b>significantly</b> in the skillset that I offer. Unfortunately most of my
              day to day work are under a NDA. But I am back to building, studying again on my own time and would love to chat.
              I am aiming on re-doing this site in the near future, but feel free to look at my github. <Link
                style={{ color: "yellow" }}
                to="projects">here</Link></b></Textbox>
          </Route>

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