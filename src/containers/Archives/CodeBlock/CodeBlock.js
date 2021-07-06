import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

const codeBlock = (props) => {
 
    return (
        <SyntaxHighlighter  style={dracula}>
            {props.children}
        </SyntaxHighlighter>
    );
};

export default codeBlock;