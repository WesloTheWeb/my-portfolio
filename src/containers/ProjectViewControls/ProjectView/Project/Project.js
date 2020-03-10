import React from 'react';
import classes from './Project.module.scss';

const project = (props) => {
    return (
        <div className={classes.project}>
            {props.children}
        </div>
    );
};


export default project;