import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import classes from './Experience.module.css';
import SectionIntroduction from '../../components/SectionIntroduction/SectionIntroduction';

const { experienceSpotlight } = classes;

const experience = (props) => {
    return (
        <>
        <SectionIntroduction>Experience</SectionIntroduction>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="April 2019 - October 2019"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Kohl's Corporate - Front End Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Menomenee Falls, WI</h4>
                    <p>
                        <ul>
                            <li>Worked and designed the homepage and coupon page, as well as a 2019 redesign</li>
                            <li>Delivered on time of any changes and scope creep of our sprints.</li>
                            <li>Improved existing systems of the team to increase productivity and workflow</li>
                        </ul>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="July 2018 - April 2019"
                    contentStyle={{ background: 'rgb(255,140,0)' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className={experienceSpotlight}>Byte Studios - Junior Front End Developer</h3>
                    <h4 className={experienceSpotlight}>Milwaukee, WI.</h4>
                    <p>
                        <ul>
                            <li>Maintained and designed a variety of sites using HTML, CSS and JavaScript.</li>
                            <li>Worked alongside a small team, adapted to other roles such as a UX designer.</li>
                        </ul>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="April 2018 - May 2018"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title">Main Street Justice (Contract)</h3>
                    <h4 className="vertical-timeline-element-subtitle">Madison, WI</h4>
                    <p>
                        <ul>
                            <li>Designed and built a site for a Madison Law Office from start to finish.</li>
                            <li>Utilized many of the skills learned from bootcamp including writing legal contract in this freelance opportunity.</li>
                        </ul>
                    </p>
                </VerticalTimelineElement>


                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    className="vertical-timeline-element--work"
                    date="Fall of 2017 converted to tech after bootcamp and self taught path"
                />

            </VerticalTimeline>
        </>
    );
};


export default experience;