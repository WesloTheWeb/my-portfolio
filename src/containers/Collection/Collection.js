import React from 'react';
import classes from './Collection.module.scss';
import Textbox from '../../components/Textbox/Textbox';
import ProjectViewControls from '../ProjectViewControls/ProjectViewControls';
import ProjectView from '../ProjectViewControls/ProjectView/ProjectView';

const { label, websites, githubLink } = classes;

const collection = (props) => {
    return (
        <>
        <Textbox>
            Below is a list of portfolio pieces I deemed worthy to showcase. Each case comes with a case study as I
            document from the beginning to end. I try to incorporate different techniques and design practice for each one,
            and showcase a project from my work experience if applicable. For a full listing of minor side projects or work in progress 
            my github please click <a className={githubLink} href="https://www.github.com/weslotheweb" target="_blank" rel="noopener noreferrer" >here</a>
        </Textbox>
        <ProjectViewControls /> 
        <section className={label} id={websites}>Websites</section>
        <ProjectView />
        {/* <section className={label} id={webapps}>Web Apps</section> */}
        {/* <section className={label} id={designs}>Design</section> */}

        </>
    );
};


export default collection;