import React from 'react';
import classes from '../Navigation.module.css';
import Auxillary from '../../../hoc/Auxillary/Auxillary';
import resume from '../../../assets/files/WesleyWebster_Resume.pdf';
import MobileNavigation from '../MobileNavigation/MobileNavigation';
// import Collection from './containers/Collection/Collection';
import { Link } from 'react-router-dom';


const { nav, navContainer } = classes;

 
const navigation = (props) => {

 
    return (
        <Auxillary>
        <div className={navContainer}>
            <Link to="/" className={nav}>Home</Link>
            <Link to="/projects" className={nav}>Projects</Link>
            <Link to="/" className={nav}>Experience</Link>
            <a href={resume} target="_blank" rel="noopener noreferrer" className={nav}>Resume</a>
            <Link to="/" className={nav}>Contact</Link>
        </div>
        <MobileNavigation />
        </Auxillary>
     );
};


export default navigation;