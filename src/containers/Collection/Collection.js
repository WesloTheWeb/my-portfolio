import React from 'react';
import Textbox from '../../components/Textbox/Textbox';
import ProjectViewControls from '../ProjectViewControls/ProjectViewControls';

const collection = (props) => {
    return (
        <>
        <Textbox>
            Below is a list of portfolio pieces I deemed worthy to showcase. Each case comes with a case study as I
            document from the beginning to end. I try to incorporate different techniques and design practice for each one,
            and showcase a project from my work experience if applicable.
        </Textbox>
        <ProjectViewControls /> 
        </>
    );
};


export default collection;