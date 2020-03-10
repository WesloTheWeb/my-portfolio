import React from 'react';
import Textbox from '../Textbox/Textbox';
import classes from './Contact.module.scss';
import SectionIntroduction from '../SectionIntroduction/SectionIntroduction';

const contact = (props) => {
    return (
        <>
            <SectionIntroduction>Contact</SectionIntroduction>
            <Textbox>Hello viewer!<br /> I am always looking for the next big things and growing. Whether you're interested in
                collaborating with me, or wants to just chat or say hello, click the button below!
                <button className={classes.contactBtn}><a className={classes.contactLink}href="mailto:wesleyadwebster@gmail.com">Contact me</a></button>
            </Textbox>
        </>
    );
};


export default contact;