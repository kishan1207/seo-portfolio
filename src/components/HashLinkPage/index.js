import * as React from 'react';
import Education from "../../pages/education/EducationComponent";
import Experience from "../../pages/experience/Experience";
import Contact from "../../pages/contact/ContactComponent";
import Projects from "../../pages/projects/Projects";
import Home from '../../pages/home/HomeComponent';
import Skills from '../../containers/skills/Skills';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import TopButton from '../topButton/TopButton';

const HashLinkPage = ({ theme }) => {
    return (<>
        <Header theme={theme} />
        <div id='section-home'>
            <Home theme={theme} />
        </div>
        <div id="section-education">
            <Education theme={theme} />
        </div>
        <div id="section-skills">
            <Skills theme={theme} />
        </div>
        <div id='section-experience'>
            <Experience theme={theme} />
        </div>
        <div id='section-projects'>
            <Projects theme={theme} />
        </div>
        <div id='section-contact'>
            <Contact theme={theme} />
        </div>
        <Footer theme={theme} />
        <TopButton theme={theme} />
    </>)
}

export default HashLinkPage