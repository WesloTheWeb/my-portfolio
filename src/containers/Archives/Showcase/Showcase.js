import React from 'react';
import classes from './Showcase.module.scss';
import { Link } from 'react-router-dom';

const { showCaseTitle, coverImage, returnBtn } = classes;

const showcase = (props) => {
    return (
        <>
            <Link to="/projects"><button id={returnBtn}>Go back</button></Link>
            <h1 className={showCaseTitle}>{props.title}</h1>
            <div className={coverImage}>
                <img src={props.image} alt="featured product"/>
            </div>
            <div>{props.children}</div>
        </>
    );
};


export default showcase;