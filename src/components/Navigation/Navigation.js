import React, { useState } from 'react';
import classes from './Navigation.module.css';
import Auxillary from '../../hoc/Auxillary/Auxillary';
import resume from '../../assets/files/WesleyWebster_Resume.pdf';
import MobileNavigation from './MobileNavigation/MobileNavigation';
// import Collection from './containers/Collection/Collection';
import { Link } from 'react-router-dom';


const { nav, navContainer } = classes;

function Scroll () {
    const [prevScrollPos, newScrollPos] = useState(0);

}

const navigation = (props) => {

 
    return (
        <Auxillary>
        <div className={navContainer}>
            <a href="/" className={nav}>Home</a>
            <Link to="/projects">Projects</Link>
            <a href="#projects" className={nav}>Projects</a>
            <a href="#experience" className={nav}>Experience</a>
            <a href={resume} target="_blank" rel="noopener noreferrer" className={nav}>Resume</a>
            <a href="#contact" className={nav}>Contact</a>
        </div>
        <MobileNavigation />
        </Auxillary>
     );
};


export default navigation;