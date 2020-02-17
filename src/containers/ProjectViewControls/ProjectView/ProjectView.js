import React from 'react';
import classes from './ProjectView.module.css';
import Project from './Project/Project';

// CSS
const { projectViewGrid} = classes;


const ProjectView = (props) => {

    // const [projectViews, setProjectViews] = useState(2);

    return (
        <section className={projectViewGrid}>
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
        </section>
    );
};


export default ProjectView;