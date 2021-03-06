import React from 'react';
import classes from './Navigation.module.scss';
import Auxillary from '../../hoc/Auxillary/Auxillary';
import resume from '../../assets/files/WesleyWebster_Resume.pdf';
import MobileNavigation from './MobileNavigation/MobileNavigation';
// import Collection from './containers/Collection/Collection';
import { Link } from 'react-router-dom';

const { nav, navContainer } = classes;
 
const Navigation = (props) => {

    // const [isMenuOpen, setIsMenuOpen] = useState(false);

    // const openHandler = () => {
    //     if (!isMenuOpen) {
    //         setIsMenuOpen(true)
    //     } else {
    //         setIsMenuOpen(false)
    //     }
    // }
 
    return (
        <Auxillary>
        <div className={navContainer}>
            <a href="/" className={nav}>Home</a>
            <Link to="/projects" className={nav}>Projects</Link>
            <a href="#experience" className={nav}>Experience</a>
            <a href={resume} target="_blank" rel="noopener noreferrer" className={nav}>Resume</a>
            <a href="#contact" className={nav}>Contact</a>
        </div>
        <MobileNavigation />
        </Auxillary>
     );
};

export default Navigation;