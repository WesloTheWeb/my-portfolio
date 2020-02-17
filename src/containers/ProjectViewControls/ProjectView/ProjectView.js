import React from 'react';
import classes from './ProjectView.module.css';
import Project from './Project/Project';

// IMAGES
import Kohls from '../../../assets/images/Kohls_Sample.png';
import kohlsSample from '../../../assets/files/WorkSample_Kohls.pdf';
import medicalCollegeWisconsin from '../../../assets/images/MCW_Sample.png';
import MCW_Sample from '../../../assets/files/CaseStudy-MCW.pdf';
import mainStreetJusticeSample from '../../../assets/images/MSJ_Sample.png';
import MSJ_Sample from '../../../assets/files/CaseStudy-MSJ.pdf';


// CSS
const { projectViewGrid, locked } = classes;


const ProjectView = (props) => {

    // const [projectViews, setProjectViews] = useState(2);

    return (
        <section className={projectViewGrid}>
            <Project>
                <a href={kohlsSample} target="_blank" rel="noopener noreferrer">
                    <img src={Kohls} alt="Kohl's spotlight preview" />
                </a>
            </Project>
            <Project>
                <a href={MCW_Sample} target="_blank" rel="noopener noreferrer">
                    <img src={medicalCollegeWisconsin} alt="Medical College of Wisconsin spotlight preview" />
                </a>
            </Project>
            <Project>
                <a href={MSJ_Sample} target="_blank" rel="noopener noreferrer">
                    <img src={mainStreetJusticeSample} alt="Main Street Justice's spotlight preview" />
                </a>
            </Project>
            <Project>
                <a href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={locked}>
                    Coming Soon!
                </a>
            </Project>
            <Project>
                <a href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={locked}>
                    Coming Soon!
                </a>
            </Project>
            <Project>
                <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={locked}>
                    Coming Soon!
                </a>
            </Project>
        </section>
    );
};


export default ProjectView;