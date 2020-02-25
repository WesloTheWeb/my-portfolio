import React from 'react';
import { Link } from 'react-router-dom';
import classes from './MobileToggle.module.css';

const mobileToggle = (props) => {
    return (
        <section className={classes.mobilePageNavContainer}>
            {/* <div onClick={props.clicked}>MENU</div> */}
            <Link to="/">
                <div onClick={props.clicked}>Home</div>
            </Link>
            <Link to="/projects" exact>
                <div onClick={props.clicked}>Projects</div>

            </Link>
        </section>
    );
};


export default mobileToggle;