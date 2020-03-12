import React from 'react';
import classes from './Showcase.module.scss';


const { showCaseTitle, coverImage } = classes;

const showcase = (props) => {
    return (
        <>
            <h1 className={showCaseTitle}>{props.title}</h1>
            <div className={coverImage}>
                <img src={props.image} alt="featured product"/>
            </div>
            <div>{props.children}</div>
        </>
    );
};


export default showcase;