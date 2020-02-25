import React from 'react';
import classes from './MobileNavigation.module.css';
import MobileToggle from './MobileToggle/MobileToggle';
import MobileSideBar from './MobileSideBar/MobileSideBar';

const mobileNavigation = (props) => {

    return (
        <div className={classes.MobileNavigation}>
            <MobileToggle clicked={props.mobileToggleClicked} />
            {/* <MobileSideBar /> */}
        </div>
     );
};


export default mobileNavigation;