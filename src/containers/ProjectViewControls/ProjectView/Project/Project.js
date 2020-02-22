import React from 'react';
import classes from './Project.module.css';

const project = (props) => {
    return (
        <div className={classes.project}>
            {props.children}
        </div>
    );
};


export default project;