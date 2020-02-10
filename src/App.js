import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import SectionIntroduction from './components/SectionIntroduction/SectionIntroduction';
import Bio from './components/Bio/Bio';
import Social from './components/Social/Social';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div id="bioArrangement">
        <Bio />
        <Social />
      </div>
      <SectionIntroduction>Projects</SectionIntroduction>

    </div>
  );
}

export default App;
