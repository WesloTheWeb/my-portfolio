import React from 'react';
import classes from './Textbox.module.scss';

const { text } = classes

const foo = (props) => {
    return (
        <div className={text}>{props.children}</div>
    );
};


export default foo;