import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import SectionIntroduction from './components/SectionIntroduction/SectionIntroduction';
import Textbox from './components/Textbox/Textbox';
import Social from './components/Social/Social';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div id="bioArrangement">
        <div>
          <SectionIntroduction>To a Hero From a Side Kick...</SectionIntroduction>
          <Textbox>
            My name is Wesley Webster. I am a front end developer based in Milwaukee, WI. I build things. I design things.
            And I also aim to be a great software engineer one day. There's nothing I love more than learning. Every day,
            I always think of ways to improve existing apps or building something that can help people.
          <br /> <br />
            I come from a non traditional background. I did a tech boot camp at Madison's YWeb Career Academy in fall of 2017.
            Since then, I moved back to Milwaukee and continue learning through courses on a self taught path, attending numerous
            tech meet ups, staying hungry and getting out of my comfort zone.
        </Textbox>
          <Textbox>
            <div id="currentAbilities">
              <ul>
                <li>HTML5</li>
                <li>(S)CSS</li>
                <li>JavaScript (ES6+)</li>
                <li>jQuery</li>
                <li>Adobe Photoshop, XD, Illustrator</li>
                <li>Sketch</li>
              </ul>
              <ul>
                <li>React.JS</li>
                <li>Node.JS</li>
                <li>Github / Git</li>
                <li>API's</li>
                <li>Agile</li>
                <li>WordPress</li>

              </ul>
            </div>

          </Textbox>
        </div>
        <Social />
      </div>
      <SectionIntroduction>Projects</SectionIntroduction>

    </div>
  );
}

export default App;
