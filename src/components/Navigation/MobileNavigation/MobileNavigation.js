import React from 'react';
import classes from './MobileNavigation.module.scss';
import { Link } from 'react-router-dom';
import MobileToggle from './MobileToggle/MobileToggle';
import resume from '../../../assets/files/WesleyWebster_Resume.pdf';

const mobileNavigation = (props) => {

    return (
        <div className={classes.MobileNavigation}>
            <MobileToggle>
                <Link to="/">Home</Link>
            </MobileToggle>
            <MobileToggle>
                <Link to="/projects">Projects</Link>
            </MobileToggle>
            <MobileToggle>
                <a href={resume}
                    target="_blank"
                    rel="noopener noreferrer">Resume</a>
            </MobileToggle>

            {/* <MobileSideBar /> */}
        </div>
    );
};

export default mobileNavigation;