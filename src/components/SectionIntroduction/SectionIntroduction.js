import React from 'react';
import classes from './SectionIntroduction.module.css';


const sectionIntro = (props) => {
    return (
        <h1 className={classes.sectionIntro}>{props.children}</h1>
    );
};


export default sectionIntro;