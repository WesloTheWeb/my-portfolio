import React from 'react';
import classes from './ProjectView.module.css';
import Project from './Project/Project';

// IMAGES
import Kohls from '../../../assets/images/Kohls_Sample.png';
import kohlsSample from '../../../assets/files/WorkSample_Kohls.pdf';

// CSS
const { projectViewGrid, } = classes;


const ProjectView = (props) => {

    // const [projectViews, setProjectViews] = useState(2);

    return (
        <section className={projectViewGrid}>
            <Project>
                <a href={kohlsSample} target="_blank" rel="noopener noreferrer">
                    <img src={Kohls} alt="Kohl's spotlight preview" />
                </a>
            </Project>
            <Project />
            <Project />
            <Project />
            <Project />
            <Project />
        </section>
    );
};


export default ProjectView;