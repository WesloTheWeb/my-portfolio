import React from 'react';
import ShowCase from '../Showcase';
import classes from '../Showcase.module.scss';
import CodeBlock from '../../CodeBlock/CodeBlock';
import Textbox from '../../../../components/Textbox/Textbox';

// images
import coverImage from '../../../../assets/images/Kohls_Sample.png';
import samplePhoto1 from '../../../../assets/images/Cases/Kohls/Webview-1.png';
import samplePhoto2 from '../../../../assets/images/Cases/Kohls/Webview-2.png';
import samplePhoto3 from '../../../../assets/images/Cases/Kohls/Webview-3.png';
import couponsA from '../../../../assets/images/Cases/Kohls/couponsA.png';
import couponsB from '../../../../assets/images/Cases/Kohls/couponsB.png';

const { info, photoArray } = classes;

const CaseKohls = (props) => {

    const codeStringA = `
    <div id="tce-hp-test-equities">
        <div id="tce-hp-womens">
    <!-- START WOMEN PZ CONTENT -->
            <div class="creative-slot grid-wrapper grid-wrapper-1024">
                <div class="grid-content">
    <!-- Main Image -->
                    <div class="grid-box d8x8">
         `;

    const codeStringB = `
    <a class="box-content box-bg-image" href="/catalog/lc-laurenconrad.jsp?CN=Brand:LC%20Lauren%20Conrad&BST=3867679:3853614&icid=hpmfshopallLC">
        <img src="https://media.kohlsimg.com/is/image/kohls/hpe2-20190923-updated-LC-pz-WMN_01" alt="">
            <div class="copy-callout" style="top: 7%; left:6%;">
                <section id="women--offer-copy">
                    <p class="gotham-bold gotham50">The most<br ariahidden="true" / >stylish<br aria-hidden="true" />of seasons
                    <br ariahidden="true" />is here.</p>
                </section>
            </div>
            <div class="copy-callout copy-calloutcenter" style="top: 92%;">
                <p class="gotham-medium grid-font-uppercase gridfont-white gotham14">LC Lauren Conrad</p>
            </div>
    </a>
</div>
<!-- Slot (Top - Left) -->
    <div class="grid-box d4x4">
        <a class="box-content" href="/catalog/ninewest.jsp?CN=Brand:Nine%20West&BST=3801026:3801009:
        3805625:3815467:3754972&icid=hpmf-shopallninewest">
        <img src="https://media.kohlsimg.com/is/image/kohls/hpdt-e2-20190923-pz-WMN_02" class="box-bg-image" alt="">
            <div class="box-bottomtext" style="top:76%;">Nine West</div>
        </a>
    </div>
<!-- Slot (Top - Right) -->
    <div class="grid-box d4x4">
        <a class="box-content" href="/catalog/womens-evriclothing.jsp?CN=Gender:Womens+Brand:
        EVRI+Department:Clothing&BST=3585143:3755079:3769787&icid=hpmf-shopallevri">
            <img src="https://media.kohlsimg.com/is/image/kohls/hpdt-e2-20190923-pz-WMN_03" class="box-bg-image" alt="">
        <div class="box-bottom-text" style="top:76%;">Evri</div>
        </a>
    </div>
    `

    const coupons = `
    
    <!--WMN -->
    <div id="tce-hp-womens" class="basic-equity-mdot">
        <div class="equity-content-100">
            <a
                href="/catalog/lc-lauren-conrad.jsp?CN=Brand:LC%20Lauren%20Conrad&BST=3867679:3853614&icid=hpmf-shopallLC">
                <img src="https://media.kohlsimg.com/is/image/kohls/hp-mn-20190923-pz-WMN" style="width:100%;" alt="">
                <div class="copy-callout" style="top: 12%; left:6%; width: 60%; line-height: -1em;">
                    <p class="gotham-bold gotham28" style="line-height: 1em; margin-bottom: -2%; color: #3e7e9b;">
                        The most<br aria-hidden="true" />stylish<br aria-hidden="true" />of seasons<br
                            aria-hidden="true" />is
                        here.
                    </p>
                </div>
                <div class="copy-callout copy-callout-center" style="top: 89%;">
                    <p class="gotham-medium grid-font-white grid-font-uppercase gotham10">Shop All LC Lauren Conrad
                        Clothing</p>
                </div>
            </a>
        </div>
    </div>
    <!--END WMN-->
    
    `

    return (
        <div>
            <ShowCase
                title="Kohl’s Corporate"
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
                                <li>CSS</li>
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
                            However below is are a few excerpts I managed to save and document my thought process.
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
                    <img src={samplePhoto1} alt="composite look at the Kohl's sale page" />
                    <img src={samplePhoto2} alt="Sale event elements" />
                    <img src={samplePhoto3} alt="Kohl's webpage view" />
                </section>
                <Textbox>
                    <CodeBlock lang="markup" >
                        {codeStringA}
                    </CodeBlock>
                    <p>
                        This was the general markup of our homepage, very specific CSS IDs and classes. Most of the content I would write
                        needed to be encapsulated within <code>div class="grid-content"</code> and <code>div class="grid-box d8x8"</code>
                    </p>
                    <p>
                        Most of the images came from the design team, since the homepage is set up like a newspaper / ad. It was important
                        for our images and assets to be laid out perfectly on all devices before we add in any texts or links atop of
                        the images. My team worked directly down the center of the page.
                    </p>
                    <h3>
                        <strong>Challenges</strong><br />
                    </h3>
                    <p>The daily challenges my team and I faced was <strong>scope creep</strong>. Generally... things did not go as planned
                    and we would have to adjust our code, including many different boosted links as our DevOps team and vendors make
                    last minute changes. These changes would happen a lot during our QA (Quality Assurance) days. The code is looked
                    over by various teams in the department and allowed others to give last minute edits on review days. When all teams
                    have given their input, my team will make the neccessary revisions and business critical updates and then load the
                    code onto the CMS and time it to display with the date and time.
                    </p>
                    <CodeBlock lang="markup" >
                        {codeStringB}
                    </CodeBlock>
                    <p>
                        These were just excerpts that code out the image above for this sales event, but most of the code were very
                        modular. One thing I learned from this job of doing this was making mixins of code reusable, notice patterns
                        and create templates in attempt to automate or speed up the process and help my team develop homepages.
                        Much of the code, and what we developers can control was the body of the page. Our backend
                        team was separated from us physically and some worked remote in San Francisco, that had
                        control over other parts of the global pages.
                        A lot of the code I wrote I needed to keep in line with the preset classes and IDs set in the global
                        CSS.
                        For coupons here was the layout and sample I did back in August:
                    </p>
                    <section className={photoArray}>
                        <img src={couponsA} alt="composite look at the Kohl's sale page" />
                        <img src={couponsB} alt="Sale event elements" />
                    </section>
                    <p>The coupons page was a bit more uniform and standard. Since it always looks like the above image.
                        Coupon offers rarely changed in format and there were only a set number of ways to configure. 
                        Similar to homepage, we follow a simple patterns whilst changing the content.
                    </p>
                    <CodeBlock>
                        {coupons}
                    </CodeBlock>
                </Textbox>

            </ShowCase>
        </div>
    );
};


export default CaseKohls;