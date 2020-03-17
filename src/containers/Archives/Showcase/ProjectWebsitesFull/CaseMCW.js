import React from 'react';
import ShowCase from '../Showcase';
import classes from '../Showcase.module.scss';
import ShowCaseSlider from '../ShowCaseSlider/ShowCaseSlider';

// import CodeBlock from '../../CodeBlock/CodeBlock';
import Textbox from '../../../../components/Textbox/Textbox';

//Images
import coverImage from '../../../../assets/images/MCW_Sample.png';
import initialSite from '../../../../assets/images/Cases/MCW/MCW_InitialSite.png';
//Search Repo Images
import RepoA from '../../../../assets/images/Cases/MCW/MCW_RepoSearchA.png';
import RepoB from '../../../../assets/images/Cases/MCW/MCW_RepoSearchB.png';
import RepoC from '../../../../assets/images/Cases/MCW/MCW_RepoSearchC.png';

import officeForm from '../../../../assets/images/Cases/MSJ/leasing_page.png';
import mobileView from '../../../../assets/images/Cases/MSJ/mobile_view.png';
import staffPage from '../../../../assets/images/Cases/MSJ/staff_page.png';


const { info, photoArray, launchBtn, phaseTitle, topBtn, keyWord } = classes;


const CaseMCW = (props) => {
    return (
        <div id="start">
            <ShowCase
                title="Medical College of Wisconsin - Community Engagement Learning Repository (CELR)"
                image={coverImage}>
                <Textbox>
                    {/* <div className={`${testOne} ${testTwo}`}>Test</div> */}
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
                            <a href="https://celr.mcw.edu/"
                                target="_blank"
                                without rel="noopener noreferrer" >
                                <button className={launchBtn}>Launch Project</button>
                            </a>
                        </div>
                    </section>
                </div>
                <Textbox>
                    <h2 style={{ textAlign: "center", color: "#BDE0FE" }}>The User Experience (UX) and User Interface (UI) Overview:</h2>
                    <p>
                        The Medical College of Wisconsin is home to many of the medical practices and students in the area. Each medical student
                        is required to do a research project in order to qualify for graduation. Students conduct their own research that
                        on a variety of topics, including some that may benefit a community or shine light on an issue plaguing a community.
                        As such, the client needed a database that holds content throughout the years of med students and medical professionals
                        whom uploaded their findings and research. Of the problems faced, the significant one was that we did not
                        have an existing system built out like this. We definitely had to take a step back and build this particular
                        search database from scratch in an effort to reuse it on our owner's propritary
                        content management system (CMS) called Byte. Our main objectives here were:
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
                        Fortunately, the designs were labeled and spec'd out appropriately. This is a massive project and we
                        needed to divide it up. I needed to focus on one particular area at a time, as the sole front end
                        developer. 
                    </p>
                    <h3>Homepage</h3>
                    <p>First was the home page as listed below. This page features a search menu attached to a tertiary menu. 
                        This menu is three levels deep.
                        <ol>
                            <li>The <strong className={keyWord}>first menu</strong> has the three main categories of "Health Focus Areas", "Languages" and "Product Types</li>
                            <li>The <strong className={keyWord}>secondary menu</strong> has submenus for specific categories related to the parent categories 
                                it is nested in.</li>
                            <li>The <strong className={keyWord}>third menu</strong> is specifically tailored to the second categories and presents more options.</li>
                        </ol>
                    </p>
                    <ShowCaseSlider
                        slideNumber={3}
                        slideWidth={125}
                        slideHeight={60}
                        slideImageA={RepoA}
                        slideImageB={RepoB}
                        slideImageC={RepoC}
                    />
                    <p>
                        In addition, the menu needed to be fluid and responsive to the page. When minimized, the repostiory
                        information should take up any whitespace, and the opposite for when the menu is expanded. The choices
                        a user can select is based off the database and results will show immediately once the parameter were up.
                        This was rather difficult, as we did not have the backend up. I had to just lay down the ground works,
                        and write my JavaScript functions to be as modular as possible. Not to mention, the tech stack was also
                        using jQuery for AJAX calls.
                    </p>
     
                    {/* <div className={slideCarousel}>
                        <img src={RepoA} alt="first functionality concept" />
                        <img src={RepoB} alt="first functionality concept" />
                        <img src={RepoC} alt="first functionality concept" />

                    </div> */}
                    <p>
                        Bacon ipsum dolor amet ham hock ribeye tri-tip meatball, jerky ball tip venison pork loin shankle hamburger.
                        Cupim sirloin porchetta, spare ribs cow rump andouille. Picanha cow bacon, kevin corned beef sirloin pork loin
                        shoulder ball tip tri-tip boudin ribeye beef ribs. Beef ribs salami frankfurter cupim, strip steak pork chop picanha
                        pancetta rump hamburger landjaeger spare ribs.
                    </p>

                </Textbox>
                <Textbox>
                    <h2 className={phaseTitle}>Phase 3: Development</h2>
                    <p>
                        Bacon ipsum dolor amet ham hock ribeye tri-tip meatball, jerky ball tip venison pork loin shankle hamburger.
                        Cupim sirloin porchetta, spare ribs cow rump andouille. Picanha cow bacon, kevin corned beef sirloin pork loin
                        shoulder ball tip tri-tip boudin ribeye beef ribs. Beef ribs salami frankfurter cupim, strip steak pork chop picanha
                        pancetta rump hamburger landjaeger spare ribs.
                    </p>
                    <p>
                        Bacon ipsum dolor amet ham hock ribeye tri-tip meatball, jerky ball tip venison pork loin shankle hamburger.
                        Cupim sirloin porchetta, spare ribs cow rump andouille. Picanha cow bacon, kevin corned beef sirloin pork loin
                        shoulder ball tip tri-tip boudin ribeye beef ribs. Beef ribs salami frankfurter cupim, strip steak pork chop picanha
                        pancetta rump hamburger landjaeger spare ribs.
                    </p>
                    <div className={photoArray}>
                        <img src={officeForm} alt="office space form" />
                    </div>
                    <p>
                        Bacon ipsum dolor amet ham hock ribeye tri-tip meatball, jerky ball tip venison pork loin shankle hamburger.
                        Cupim sirloin porchetta, spare ribs cow rump andouille. Picanha cow bacon, kevin corned beef sirloin pork loin
                        shoulder ball tip tri-tip boudin ribeye beef ribs. Beef ribs salami frankfurter cupim, strip steak pork chop picanha
                        pancetta rump hamburger landjaeger spare ribs.
                    </p>
                    <div className={photoArray}>
                        <img src={mobileView} alt="mobile view of the sites" />
                        <img src={staffPage} alt="mobile view of the sites" />
                    </div>
                </Textbox>
                <Textbox>
                    <h2 className={phaseTitle}>Phase 4: Reflection</h2>
                    <p>
                        Bacon ipsum dolor amet ham hock ribeye tri-tip meatball, jerky ball tip venison pork loin shankle hamburger.
                        Cupim sirloin porchetta, spare ribs cow rump andouille. Picanha cow bacon, kevin corned beef sirloin pork loin
                        shoulder ball tip tri-tip boudin ribeye beef ribs. Beef ribs salami frankfurter cupim, strip steak pork chop picanha
                        pancetta rump hamburger landjaeger spare ribs.
                    </p>
                    <p>
                        Bacon ipsum dolor amet ham hock ribeye tri-tip meatball, jerky ball tip venison pork loin shankle hamburger.
                        Cupim sirloin porchetta, spare ribs cow rump andouille. Picanha cow bacon, kevin corned beef sirloin pork loin
                        shoulder ball tip tri-tip boudin ribeye beef ribs. Beef ribs salami frankfurter cupim, strip steak pork chop picanha
                        pancetta rump hamburger landjaeger spare ribs.
                    </p>
                </Textbox>
            </ShowCase>
            <a href="#start" className={topBtn}>To Top</a>
        </div>
    );
};


export default CaseMCW;