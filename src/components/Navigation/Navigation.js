import React from 'react';
import classes from './Navigation.module.css';
import Auxillary from '../../hoc/Auxillary/Auxillary';

const { nav, navContainer } = classes

const navigation = (props) => {
    return (
        <Auxillary>
        <div className={navContainer}>
            <a href="/" className={nav}>Home</a>
            <a href="/" className={nav}>Projects</a>
            <a href="/" className={nav}>Experience</a>
            <a href="/" className={nav}>Resume</a>
            <a href="/" className={nav}>Contact</a>

        </div>
        </Auxillary>
     );
};


export default navigation;