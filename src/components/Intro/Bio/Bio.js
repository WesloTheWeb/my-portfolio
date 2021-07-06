import React from 'react';
import Textbox from '../../Textbox/Textbox';
import SectionIntroduction from '../../SectionIntroduction/SectionIntroduction';

const bio = (props) => {
    return (
        <div>
            <SectionIntroduction>To a Hero From a Side Kick...</SectionIntroduction>
            <Textbox>
                <p>
                My name is Wesley Webster. I am a Filipino front end developer based in Milwaukee, WI. I build things. I design things.
                I am an avid fan of the Hero's Journey and pushing one's self to the limits. I aim to be a great software engineer 
                one day. There's nothing I love more than learning. Every day, I think of code in one way or the other, or ways to 
                try and experiment with new things.
                </p>
                <p>
                I come from a non traditional background. You may be wondering why the tagline features a superhero motif, but I
                am a fan of comics, mangas and videogames. I use a superheo analogy as I was in a dark place 2016 to 2017. I did 
                a tech boot camp at Madison's YWeb Career Academy in the fall of 2017. Since then, through hard work and determination,
                I have willed myself in this tech space -- something that never would have crossed my mind. I have been self-taught
                since then, utilizing various resources around me and constantly putting myself out there and overall <b>redefine</b> myself. 
                This is a work in progress, and soon will lead to a blog. Here is some of my work and what I can do. 
                </p>
            </Textbox>
            <Textbox>
            <h2>Current Skills:</h2>
                <div id="currentAbilities">
                    <ul>
                        <li>HTML5</li>
                        <li>(S)CSS</li>
                        <li>JavaScript (ES6+)</li>
                        <li>jQuery</li>
                        <li>Adobe (Photoshop XD Illustrator)</li>
                        <li>Sketch</li>
                    </ul>
                    <ul>
                        <li>ReactJS</li>
                        <li>VueJS</li>
                        <li>NodeJS</li>
                        <li>Github / Git</li>
                        <li>API's</li>
                        <li>Agile</li>
                        <li>WordPress</li>
                        <li>HubSpot</li>
                    </ul>
                </div>
            </Textbox>
        </div>
    );
};

export default bio;