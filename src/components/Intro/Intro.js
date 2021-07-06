import React from 'react';
import Bio from './Bio/Bio';
import Social from './Social/Social';

const foo = (props) => {
    return (
        <div id="bioArrangement">
            <Bio/>
            <Social/>
        </div>
    );
};

export default foo;