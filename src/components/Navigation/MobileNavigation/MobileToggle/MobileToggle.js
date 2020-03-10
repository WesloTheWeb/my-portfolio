import React from 'react';
import classes from './MobileToggle.module.css';

const mobileToggle = (props) => {
    return (
        <section className={classes.mobilePageNavContainer}>
            {props.children}
        </section>
    );
};


export default mobileToggle;