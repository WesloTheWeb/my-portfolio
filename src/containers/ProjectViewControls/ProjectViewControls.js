import React from 'react';
import classes from './ProjectViewControls.module.scss';
// viewWebApps, viewDesigns
const { viewControls, viewAll, viewWebsites, } = classes;

const projectViewControls = (props) => {
    return (
        <section id={viewControls}>
            <button id={viewAll}>All</button>
            <button id={viewWebsites}>Websites</button>
            {/* <button id={viewWebApps}>Web Apps</button> */}
            {/* <button id={viewDesigns}>Design</button> */}
        </section>
    );
};


export default projectViewControls;