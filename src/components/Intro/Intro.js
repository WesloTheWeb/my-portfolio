import React from 'react';
import Bio from '../Bio/Bio';
import Social from '../Social/Social';

const intro = (props) => {
    return (
        <div id="bioArrangement">
            <Bio/>
            <Social/>
        </div>
    );
};


export default intro;