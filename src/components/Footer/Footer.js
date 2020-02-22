import React from 'react';
import classes from './Footer.module.css';

const footer = (props) => {
    return (
        <div className={classes.credits}>
            <p>Designed and built by<br/> Wesley Webster</p>
        </div>
    );
};


export default footer;