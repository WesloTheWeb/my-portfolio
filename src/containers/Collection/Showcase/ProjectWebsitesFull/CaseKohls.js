import React from 'react';
import ShowCase from '../Showcase';
import classes from '../Showcase.module.scss';
import Textbox from '../../../../components/Textbox/Textbox';

// images
import coverImage from '../../../../assets/images/Kohls_Sample.png';

const { info, photoArray } = classes;


const CaseKohls = (props) => {
    return (
        <div>
            <ShowCase
                title="Kohl's Corporate"
                image={coverImage}>
                <Textbox>
                    <p>
                        In my role at Kohl’s, I was in charge of the Homepage and Coupon page of
                        http://www.kohls.com. As expected, the homepage and coupon pages are constantly changing on
                a daily, if not weekly, basis. We call these <strong>sale events</strong>, and they can range from subtle
                differences such as a removal or addition of content to an entirely different sale event layout.
                </p>
                    <p>The general structure of the page stayed the same, however the content and images that relates to
                    deals and coupons, along with link changes, are dynamic. Here is a sample from September 23rd
                to September 25th</p>
                </Textbox>
                <div className="splitDivide">
                    <section className={info}>
                        <div>
                            <h3>Tools used</h3>
                            <ul>
                                <li>HTML</li>
                                <li>css</li>
                                <li>JavaScript (ES5)</li>
                            </ul>

                        </div>
                    </section>
                    <section className={info}>
                        <div>
                            <h3>Solution</h3>
                            <ul>
                                <li>Available for view?: No</li>
                            </ul>
                            <p>Due to the nature of this project, it was limited to just that week.
                            However below is are a few excerpts I managed to save.
                            </p>
                        </div>
                    </section>
                </div>
                <Textbox>
                    <p>The layout of content was done through Kohl’s proprietary grid system, as much of the
                    homepage at the time of writing this. It was similar to Bootstraps. However, each item is layered
                    over an image and has the links, text absolute positioned. For rows of links, we were free to use
                    flexbox. Some of the limitations were accounting for Internet Explorer 11. So modern approach and
                    techniques in CSS such as CSS Grid were unavailable to us.
                    </p>
                </Textbox>
                <section className={photoArray}>
                    uwu
                </section>
            </ShowCase>
        </div>
    );
};


export default CaseKohls;