import React from 'react';
import classes from './Social.module.css';
import standardAVI from '../../assets/images/standard_avi.jpg';
import Auxillary from '../../hoc/Auxillary/Auxillary';

const { image } = classes;

const social = (props) => {
    return (
        <Auxillary>
            <div id={image}>
                <img src={standardAVI} />
            </div>

        </Auxillary>
    );
};


export default social;