import React from 'react';
import classes from './Footer.module.scss';

const footer = (props) => {
    return (
        <div className={classes.credits}>
            <p>Designed and built by<br/> Wesley Webster &copy;2020 - 2021</p>
        </div>
    );
};


export default footer;