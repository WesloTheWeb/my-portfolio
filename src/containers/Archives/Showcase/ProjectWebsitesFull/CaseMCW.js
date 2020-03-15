import React from 'react';
import ShowCase from '../Showcase';
import classes from '../Showcase.module.scss';

// import CodeBlock from '../../CodeBlock/CodeBlock';
import Textbox from '../../../../components/Textbox/Textbox';

//Images
import coverImage from '../../../../assets/images/MCW_Sample.png';
import initialSite from '../../../../assets/images/Cases/MCW/MCW_InitialSite.png';
import lofiA from '../../../../assets/images/Cases/MSJ/loFi-A.png';
import lofiB from '../../../../assets/images/Cases/MSJ/loFi-B.png';
import lofiC from '../../../../assets/images/Cases/MSJ/loFi-C.png';
import lofiD from '../../../../assets/images/Cases/MSJ/loFi-D.png';
import lofiE from '../../../../assets/images/Cases/MSJ/lofi-E.jpg';
import officeForm from '../../../../assets/images/Cases/MSJ/leasing_page.png';
import mobileView from '../../../../assets/images/Cases/MSJ/mobile_view.png';
import staffPage from '../../../../assets/images/Cases/MSJ/staff_page.png';


const { info, photoArray, launchBtn, phaseTitle, topBtn, testOne, testTwo } = classes;


const CaseMCW = (props) => {
    return (
        <div>
            <ShowCase
                title="Medical College of Wisconsin - Community Engagement Learning Repository (CELR)"
                image={coverImage}>
                <Textbox>
                    <div className={`${testOne} ${testTwo}`}>Test</div>
                    <p>
                        This project I would classify as a definitive moment. This was during my time at Byte Studios working as
                        a team of 4 that consisted of: a front end developer, a backend developer,  a UXUI Designer, and our boss
                        acting as the lead designer / developer. Our client this time is the Medical College of Wisconsin, and they
                        requested essentially a customized searchable database that has user authentication, and the ability for
                        users to upload all types of media such as PDFs, videos, PowerPoint Slides, etc.
                    </p>
                    <p>
                        The scope of this project was massive and undergone many iteration changes in design. It took a team effort
                        to see this project through. When I joined the team, 95% of the design was already done, however during the 
                        process of 2 - 3 months of development we faced a variety of obstacles and scope creep outside of our control.
                    </p>
                </Textbox>
                <div id="uwu" className="splitDivide">
                    <section className={info}>
                        <div>
                            <h3>Tools used:</h3>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>JavaScript (ES5)</li>
                                <li>jQuery</li>
                                <li>PHP</li>
                                <li>Sketch</li>
                                <li>Invision</li>
                            </ul>
                            <h3>Role: Front End Developer</h3>
                        </div>
                    </section>
                    <section className={info}>
                        <div>
                            <h3>Solution</h3>
                            <ul>
                                <li>Completed: Mid April 2020 </li>
                                <li>Available for view?: Yes</li>
                            </ul>
                            <a href="https://celr.mcw.edu/" target="_blank" ><button className={launchBtn}>Launch Project</button></a>
                        </div>
                    </section>
                </div>
                <Textbox>
                    <h2 style={{ textAlign: "center", color: "#BDE0FE" }}>The User Experience (UX) and User Interface (UI) Overview:</h2>
                    <p>
                       The Medical College of Wisconsin is home to many of the medical practices and students in the area. Each medstudent 
                       is expected to conduct their own research that benefits a community. As such, the client needed a database that holds
                       content throughout the years of med students and medical professionals whom uploaded their findings and research. 
                       Of the problems faced, the significant one was that we did not have an existing system built out like this. We 
                       definitely had to take a step back and build this particular search database from scratch in an effort to reuse it 
                       on our owner's propritary content management system (CMS) called Byte. Our main objectives here were:
                        <ol>
                            <li>Two way data flow, of creating accounts and being able to upload content to the database.</li>
                            <li>Searchable queries that brings up categorized projects. We had to take what the client requested from the old system</li>
                            <li>Make the entire process mobile responsive to its web counterpart, including all functionality.</li>
                        </ol>
                    </p>
                    <h3>Initial Site</h3>
                    <p>The initial site featured a different UI. We had to create and design a reimagined look, as well as move all the 
                        old data into the new site. As stated earlier, I joined the team when the design was already 95% done, so the 
                        initial design iterations are not documented from scratch. However I do cover the design changes made by our 
                        designer when we picked this project up back in early October 2018.</p>
                    <div className={photoArray}>
                        <img src={initialSite} alt="initial site of MSJ" />
                    </div>
                </Textbox>
                <Textbox>
                    <h2 className={phaseTitle}>Phase 1: Research</h2>
                    <p> 
                        The initial mock ups was slightly confusing. I did not have a frame of reference of the behavior that 
                        we wanted nor did I really understood the initial site at the time. Instead, I started to think of doing
                        my own research as I had a friend from college that was currently attending MCW.
                        <ol>
                            <li><strong>Persona 1: Med student / Researcher</strong>
                                <p>
                                User would need to be able to publish their findings. Should have a several presets of data
                                fields such as area of interest, subcategories such as funding, sources, and much more. Users 
                                should be able to submit their data in a clear way and guided through the process. Users should 
                                also be able to edit their entries and uploads on their accounts.
                                </p>
                            </li>
                            <li><strong>Person 2: Guest user </strong>
                                <p>
                                Everything that is uploaded into the database should be accessible. With the exception of 
                                administrative powers such as deleting or editing entries. Prospective students, or guest 
                                users should be able to browse the database at ease without having to make an account or sign 
                                in.
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