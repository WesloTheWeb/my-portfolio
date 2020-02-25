import React from 'react';
import classes from './MobileSideBar.module.css';

const { sideBarLayout, sideBarNav } = classes;

const MobileSideBar = (props) => {
    return (
        <div className={sideBarLayout}>
            <a href="/" className={sideBarNav}>Home</a>
            <a href="#Projects" className={sideBarNav}>Projects</a>
            <a href="#experience" className={sideBarNav}>Resume</a>
            <a href="#experience" className={sideBarNav}>Experience</a>
            <a href="#contact" className={sideBarNav}>Contact</a>
            <div>Close Menu</div>
        </div>
    );
};


export default MobileSideBar;