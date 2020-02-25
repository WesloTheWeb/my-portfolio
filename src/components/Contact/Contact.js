import React from 'react';
import Textbox from '../Textbox/Textbox';
import SectionIntroduction from '../SectionIntroduction/SectionIntroduction';

const contact = (props) => {
    return (
        <>
            <SectionIntroduction>Contact</SectionIntroduction>
            <Textbox>Hello viewer! I am always looking for the next big things and growing. Whether you're interested in collaborating with me, or wants to just chat or say hello, fill out the form below!</Textbox>
        </>
    );
};


export default contact;