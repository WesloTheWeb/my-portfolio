import React from 'react';
import classes from './Social.module.scss';
// import standardAVI from '../../../assets/images/standard_avi.jpg';
import recentAVI from '../../../assets/images/recentPhoto.jpg';

import Auxillary from '../../../hoc/Auxillary/Auxillary';

const { image, socialmedia, subsocialmedia } = classes;

const social = (props) => {
    return (
        <Auxillary>
            <section>
            <div id={image}>
                <img src={recentAVI} alt="wesley" />
            </div>
            <section className={socialmedia}>
                <div className={subsocialmedia}>
                   <p>Social Media</p>
                    <a href="https://github.com/WesloTheWeb?tab=repositories" target="_blank" rel="noreferrer noopener">
                        <svg xmlns="http://www.w3.org/2000/svg" width="49.859" height="50.823" viewBox="0 0 49.859 50.823">
                            <g transform="translate(0.5 0.5)"><g transform="translate(7.2 8.323)" stroke="#707070" stroke-width="1"><ellipse cx="17" cy="21" rx="17" ry="21" stroke="none" /><ellipse cx="17" cy="21" rx="16.5" ry="20.5" fill="none" />/</g>
                                <path d="M843.43,1340c-13.436,0-24.43,10.508-24.43,23.351a23.5,23.5,0,0,0,16.643,22.184c1.221.146,1.679-.438,1.679-1.168v-4.378c-6.718,1.459-8.245-2.773-8.245-2.773a6.09,6.09,0,0,0-2.748-3.357c-2.29-1.46.153-1.46.153-1.46a5.32,5.32,0,0,1,3.817,2.335c2.138,3.5,5.649,2.481,7.176,1.9a4.957,4.957,0,0,1,1.527-3.065c-5.5-.584-11.146-2.627-11.146-11.53a9.005,9.005,0,0,1,2.443-6.276,7.587,7.587,0,0,1,.305-6.13s1.985-.584,6.718,2.335a21.212,21.212,0,0,1,6.107-.73,27.925,27.925,0,0,1,6.107.73c4.733-3.065,6.718-2.335,6.718-2.335a8.349,8.349,0,0,1,.306,6.13,8.75,8.75,0,0,1,2.443,6.276c0,8.9-5.649,10.946-11.146,11.53a5.447,5.447,0,0,1,1.679,4.379v6.422c0,.584.458,1.313,1.68,1.168a23.308,23.308,0,0,0,16.643-22.184c0-12.843-10.993-23.351-24.43-23.351Z" transform="translate(-819 -1340)" fill="#f5f4f4" stroke="#000" stroke-width="1" />
                            </g>
                        </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/wesley-webster-7a42304a/" target="_blank" rel="noreferrer noopener">
                        <svg xmlns="http://www.w3.org/2000/svg" width="53.017" height="53.017" viewBox="0 0 53.017 53.017">
                            <g transform="translate(-151 -656.892)"><g transform="translate(151 658)" fill="#fff" stroke="#707070" stroke-width="1"><rect width="53" height="50" rx="12" stroke="none" /><rect x="0.5" y="0.5" width="52" height="49" rx="11.5" fill="none" /></g>
                                <path d="M44.112,0H8.905A8.932,8.932,0,0,0,0,8.905V44.112a8.932,8.932,0,0,0,8.905,8.905H44.112a8.932,8.932,0,0,0,8.905-8.905V8.905A8.932,8.932,0,0,0,44.112,0ZM19.881,43.076H13.254V19.881h6.627ZM16.568,16.568a3.314,3.314,0,1,1,3.314-3.314A3.313,3.313,0,0,1,16.568,16.568ZM43.076,43.076H36.449V29.822a3.314,3.314,0,0,0-6.627,0V43.076H23.195V19.881h6.627V24c1.367-1.877,3.456-4.114,5.8-4.114,4.117,0,7.455,3.71,7.455,8.284Z" transform="translate(151 656.892)" fill="#1a7096" />
                            </g>
                        </svg>
                    </a>
                    <a href="https://twitter.com/WesWebster_" target="_blank" rel="noreferrer noopener">
                        <svg xmlns="http://www.w3.org/2000/svg" width="46.53" height="51.434" viewBox="0 0 46.53 51.434"><g transform="translate(-239.066 -669.677)"><ellipse cx="20.5" cy="22.5" rx="20.5" ry="22.5" transform="translate(242 670)" fill="#fff" />
                            <path d="M23.265,0C10.415,0,0,11.513,0,25.717S10.415,51.434,23.265,51.434,46.53,39.92,46.53,25.717,36.115,0,23.265,0ZM34.828,19.161q.017.424.017.853c0,8.715-6,18.765-16.976,18.765a15.736,15.736,0,0,1-9.146-2.964,10.97,10.97,0,0,0,1.424.093,11.266,11.266,0,0,0,7.41-2.824,6.08,6.08,0,0,1-5.573-4.579,5.413,5.413,0,0,0,2.694-.113,6.468,6.468,0,0,1-4.785-6.466v-.084a5.517,5.517,0,0,0,2.7.825A6.8,6.8,0,0,1,9.94,17.179a7.088,7.088,0,0,1,.808-3.316,16.466,16.466,0,0,0,12.3,6.89,7.285,7.285,0,0,1-.154-1.5c0-3.642,2.671-6.595,5.966-6.595a5.707,5.707,0,0,1,4.355,2.083A11.258,11.258,0,0,0,37,13.138a6.541,6.541,0,0,1-2.623,3.649,11.067,11.067,0,0,0,3.427-1.038,12.906,12.906,0,0,1-2.976,3.414Z" transform="translate(239.066 669.677)" fill="#1d8fe7" />
                        </g>
                        </svg>
                    </a>
                </div>
            </section>
            </section>
 
             

        </Auxillary>
    );
};


export default social;