import React from 'react';
import classes from './Project.module.css';
import Collection from '../../../Collection/Collection';

const project = (props) => {
    return (
        <div className={classes.project}>
            {props.children}
        </div>
    );
};


export default project;