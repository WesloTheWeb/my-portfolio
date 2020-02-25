import React from 'react';
import classes from './MobileSideBar.module.css';
import resume from '../../../../assets/files/WesleyWebster_Resume.pdf';

const { sideBarLayout, sideBarNav } = classes;

const MobileSideBar = (props) => {
    return (
        <div className={sideBarLayout}>
            <a href="/" className={sideBarNav}>Home</a>
            <a href="#Projects" className={sideBarNav}>Projects</a>
            <a href={resume}  target="_blank" rel="noopener noreferrer" className={sideBarNav}>Resume</a>
            <a href="#experience" className={sideBarNav}>Experience</a>
            <a href="#contact" className={sideBarNav}>Contact</a>
            <div>Close Menu</div>
        </div>
    );
};


export default MobileSideBar;