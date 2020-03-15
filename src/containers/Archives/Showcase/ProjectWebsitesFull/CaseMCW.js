import React from 'react';
import ShowCase from '../Showcase';
import classes from '../Showcase.module.scss';
// import CodeBlock from '../../CodeBlock/CodeBlock';
import Textbox from '../../../../components/Textbox/Textbox';

//Images
import coverImage from '../../../../assets/images/MSJ_Sample.png';
import initialSite from '../../../../assets/images/Cases/MSJ/MSJ_Initial.png';
import lofiA from '../../../../assets/images/Cases/MSJ/loFi-A.png';
import lofiB from '../../../../assets/images/Cases/MSJ/loFi-B.png';
import lofiC from '../../../../assets/images/Cases/MSJ/loFi-C.png';
import lofiD from '../../../../assets/images/Cases/MSJ/loFi-D.png';
import lofiE from '../../../../assets/images/Cases/MSJ/lofi-E.jpg';
import officeForm from '../../../../assets/images/Cases/MSJ/leasing_page.png';
import mobileView from '../../../../assets/images/Cases/MSJ/mobile_view.png';
import staffPage from '../../../../assets/images/Cases/MSJ/staff_page.png';


const { info, photoArray, launchBtn, phaseTitle, topBtn } = classes;


const CaseMCW = (props) => {
    return (
        <div>
            <ShowCase
                title="Main Street Justice"
                image={coverImage}>
                <Textbox>
                    <p>
                        This project was actually one of my first developer projects after my bootcamp and my first freelance
                        client role. So it holds a special place in my career, and sets up as a ground zero, if you will, in my
                        tech journey. I not only applied what I just learned from my boot camp but also learned about negogiating,
                        writing contract and seeing a project through. This job came from a person in my cohort who needed to outsource
                        the project. The deal was that he handle the backend and I build the front end. The client was <strong>Main
                        Street Justice</strong>, a local Madison law office hosting a variety of attorneys.
                    </p>
                    <p>
                        With this being my first project that I not only have to design and write a contract, I needed to be really
                        thorough in my decision. Overall it was a fun project. I would have loved to build this out from scratch,
                        but given the circumstances and my experience at the time, it was a good test of the real world and business.
                    </p>
                </Textbox>
                <div id="uwu" className="splitDivide">
                    <section className={info}>
                        <div>
                            <h3>Tools used:</h3>
                            <ul>
                                <li>WordPress</li>
                                <li>CSS</li>
                                <li>Adobe XD</li>
                            </ul>
                            <h3>Role: Front End Developer</h3>
                        </div>
                    </section>
                    <section className={info}>
                        <div>
                            <h3>Solution</h3>
                            <ul>
                                <li>Completed: May 9th, 2018 </li>
                                <li>Available for view?: Yes</li>
                            </ul>
                            <a href="https://www.mainstreetjustice.com" target="_blank" ><button className={launchBtn}>Launch Project</button></a>
                            <p>We successfully completed the project within a month and half time. Client was satisfied.
                            </p>
                        </div>
                    </section>
                </div>
                <Textbox>
                    <h2 style={{ textAlign: "center", color: "#BDE0FE" }}>The User Experience (UX) and User Interface (UI) Overview:</h2>
                    <p>
                        This project is a little different from the others in the sense that it is a WordPress redesign for the
                        original site. This was at the request of the client, so much of the early process was finding an appropriate
                        theme, while still having the limitations. So while it would have been easier to just build out a site, I
                        would need to find a theme that fits the end user needs. This boiled down to:
                        <ol>
                            <li>Easy to edit pages.</li>
                            <li>Self reliant systems, no need to call a developer for maintenance or a small edit.</li>
                        </ol>
                    </p>
                    <h3>Initial Site</h3>
                    <p>The initial site was a static HTML page. Very vanilla and no flair. As seen below:</p>
                    <div className={photoArray}>
                        <img src={initialSite} alt="initial site of MSJ" />
                    </div>
                </Textbox>
                <Textbox>
                    <h2 className={phaseTitle}>Phase 1: Research</h2>
                    <p>One of the challenges I faced was deciding how the client wanted to layout information. This is a
                    case I figure that is common for most freelance projects when the client does not know what they want,
                    and only cares about the end product. To solve this I started drafting out basic functionality of
                    potential wireframes. The idea was mainly to get the user to navigate towards information that the
                    law office providees. I narrowed it down to two personas.
                        <ol>
                            <li><strong>Persona 1: User seeking legal advice</strong>
                                <p>Needs to navigate towards a service that they need. The user needs to see everything MSJ
                                has to offer. There must be clear explicit instructions and short amount of clicks to get
                                to what the end user needs. We categorize each discipline to the appropriate practice that
                                the in house attorney has.
                                </p>
                            </li>
                            <li><strong>Person 2: Attorney seeking an office</strong>
                                <p>Needs to navigate towards a service that they need. The user needs to see everything MSJ
                                has to offer. There must be clear explicit instructions and short amount of clicks to get
                                to what the end user needs. We categorize each discipline to the appropriate practice that
                                the in house attorney has.
                                </p>
                            </li>
                        </ol>
                    </p>
                </Textbox>
                <Textbox>
                    <h2 className={phaseTitle}>Phase 2: Prototypes</h2>
                    <p>
                        I started with purely functionality for these low fidelity wireframes. The main landing page, followed by
                        the current roster of lawyers.
                    </p>
                    <div className={photoArray}>
                        <img src={lofiA} alt="first functionality concept" />
                        <img src={lofiB} alt="first functionality concept" />
                    </div>
                    <p>
                        The next two tabs would be disciplines followed by a list of their practices. The last tab was meant
                        to showcase the leasing page and gallery of the office space.
                    </p>
                    <div className={photoArray}>
                        <img src={lofiC} alt="first functionality concept" />
                        <img src={lofiD} alt="first functionality concept" />
                        <img src={lofiE} alt="medium fidelity concept" />
                    </div>
                </Textbox>
                <Textbox>
                    <h2 className={phaseTitle}>Phase 3: Development</h2>
                    <p>
                        Upon check in meetings with the clients from the first draft, we made modifications. We agreed to nix
                        certain features or combine them into one. It didn't make sense to have a separate list of disciplines
                        and practices and the available lawyer, as this would cover so much. Instead, we opted in for more
                        roster, that displays relevant information about each attorney and a link to their external sites.
                    </p>
                    <p>
                        For the leasing space, instead of just a gallery, we opted in for a form with a slider of curated
                        images of the office space. Although I also set it up as a feature should they choose to use it, or
                        if they wished to just list out what offices are available.
                    </p>
                    <div className={photoArray}>
                        <img src={officeForm} alt="office space form" />
                    </div>
                    <p>
                        Thanks to WordPress, the responsiveness was already done and translated well. The theme we choose
                        were appropriate for small businesses.
                    </p>
                    <div className={photoArray}>
                        <img src={mobileView} alt="mobile view of the sites" />
                        <img src={staffPage} alt="mobile view of the sites" />
                    </div>
                </Textbox>
                <Textbox>
                    <h2 className={phaseTitle}>Phase 4: Reflection</h2>
                    <p>
                        This project was a triumph victory for me, to not only earn an honest pay but pass affirmations to my
                        budding skills as a developer. I found the business portion challenging, but thankfully my client
                        was able to understand. it did help that they were also attorneys and offered legal advice as well in
                        terms of writing a contract.
                    </p>
                    <p>
                        My cohort partner took care of the backend and hosting on a server. I was still new at the time,
                        but this may have been a job I could have done solo. Regardless it was great experience, and
                        acts as a snapshot to see where I started from. I felt limited on actual coding, since WordPress
                        takes care of that, but I also understand that it is ultimately the end client's product. I would
                        have wireframed differently and in more detail is the only thing I would change. But now I know what
                        to look for, and have gained more skills and confidence in development, I am looking forward to the
                        next project.
                    </p>
                </Textbox>
            </ShowCase>
            <a href="#" className={topBtn}>To Top</a>
        </div>
     );
};


export default CaseMCW;