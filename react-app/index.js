import React from 'react';
import ReactDOM from 'react-dom';

import SchoolIcon from 'material-ui-icons/School';
import WorkIcon from 'material-ui-icons/Work';

import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


// import { asyncComponent } from 'react-async-component'
//
// const MaterialIconAsync = ({ icon }) => {
//     let iconName = icon.replace(/Icon$/, '')
//     return React.createElement(asyncComponent({
//         resolve: () => import(
//             /* webpackMode: "eager" */
//             `material-ui-icons/${iconName}`)
//     }))
// }
//


class Timeline extends React.Component {

    render() {

        return (
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    icon={<WorkIcon/>}
                >
                    <h3 className="vertical-timeline-element-title">Web Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Freelance</h4>
                    <h5 className="vertical-timeline-element-subtitle">London, UK</h5>
                    <h5 className="vertical-timeline-element-mydate">Dec 2017 - present</h5>
                    <p>
                        Full stack developer with broard experience in all aspects of web development, providing client
                        consultation and support.
                        Interested in challenging development & creative opportunities.
                        I am currently working remote on a <span className="badge badge-dark">Drupal 8</span> <span
                        className="badge badge-dark">ReactJS</span> <u>membership platform</u> with <u>E-commerce
                        functionalities</u>.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    icon={<WorkIcon/>}
                >
                    <h3 className="vertical-timeline-element-title">Senior Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Viacom International Media Networks</h4>
                    <h5 className="vertical-timeline-element-subtitle">London, UK</h5>
                    <h5 className="vertical-timeline-element-mydate">Feb 2016 - Dec 2017</h5>
                    <p>
                        Rebuilt & developed new features for the company whole applications/websites in PHP <span
                        className="badge badge-dark">Drupal</span> <span className="badge badge-dark">Symfony</span>.
                        Focused primarily on the <u>backend</u> in addition to providing <u>technical documentation</u>.
                        <br/>
                        <ul>
                            <li>API development</li>
                            <li>platform strategy</li>
                            <li>backend code</li>
                            <li>systems integration</li>
                        </ul>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    icon={<WorkIcon/>}
                >
                    <h3 className="vertical-timeline-element-title">Lead Developer (Digital Development Manager)</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bloodwise, Blood Cancer Charity -
                        http://bloodwise.org.uk</h4>
                    <h5 className="vertical-timeline-element-subtitle">London, UK</h5>
                    <h5 className="vertical-timeline-element-mydate">Apr 2013 - Feb 2016</h5>
                    <p>
                        Lead developer responsible for <u>all digital projects</u> in the company.
                        <br/><br/>
                        Leading a team of 4 developers and numerous contractors on various projects mainly
                        <span className="badge badge-dark">Drupal</span> <span
                        className="badge badge-dark">Symfony</span>. My team has ownership of all digital deliveries
                        (maintenance and innovation).
                        <br/><br/>
                        Required to provide process documentations and workflows, as well as manage my team and fulfil
                        my duty as a developer (see our Stackoverflow page http://bit.ly/1CNMCWc).
                        <br/><br/>
                        <b>Main achievement(s):</b> Complete redesign and redevelopment of the aging main site built in
                        Drupal
                        6/7, as well as introducing new functionalities (bloodwise.org.uk).
                        <br/><br/>
                        Main architect of the <u>continuous integration</u> system involving <span
                        className="badge badge-light">Jenkins</span> <span className="badge badge-light">Phing</span>
                        <span className="badge badge-light">Jira</span> <span
                        className="badge badge-light">Github</span>
                        (waffle.io). The stack is also reporting everything thanks to statuspage.io, NewRelic and some
                        custom scripts.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    icon={<WorkIcon/>}
                >
                    <h3 className="vertical-timeline-element-title">Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Twogether, Creative agency -
                        https://www.wearetogether.com</h4>
                    <h5 className="vertical-timeline-element-subtitle">Beaconsfield, UK</h5>
                    <h5 className="vertical-timeline-element-mydate">Nov 2012 - Apr 2013</h5>
                    <p>
                        Part of a team of 2 developers, assisted by contractors (working remotely / on the project
                        basis).
                        <u>Building & maintaining</u> numerous websites <span
                        className="badge badge-dark">Wordpress</span> and mainly the main application <span
                        className="badge badge-dark">Symfony</span>.
                        <br/><br/>
                        <b>Main achievement(s):</b> Main architect of various scripts to ease the day to day
                        workflow and creation of a board (using Geckoboard API) pulling in at one place all the
                        data/metrics of the company (Twitter, Tickets open, Websites status, etc… )
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    icon={<WorkIcon/>}
                >
                    <h3 className="vertical-timeline-element-title">Software Developer [contract]</h3>
                    <h4 className="vertical-timeline-element-subtitle">Prism DM, Fully integrated fulfilment service -
                        https://www.prism-dm.com</h4>
                    <h5 className="vertical-timeline-element-subtitle">Farnborough, UK</h5>
                    <h5 className="vertical-timeline-element-mydate">May 2012 - Nov 2012</h5>
                    <p>
                        Part of a team of 10 developers working on various projects:
                        Website creation & modification (main project: http://www.pktmny.com/,
                        http://www.agentprovocateur.com)
                        Software development using <span className="badge badge-dark">Zend 1/2</span> & <span
                        className="badge badge-dark">Backbone.js</span> + Scripting <span
                        className="badge badge-dark">Perl</span> <span className="badge badge-dark">Bash</span>
                        <br/><br/>
                        <b>Main achievement(s):</b> Lead developer of an <u>headless back office application</u> (build
                        with
                        Backbone JS and Zend).
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    icon={<WorkIcon/>}
                >
                    <h3 className="vertical-timeline-element-title">Developer Perl (integration team)</h3>
                    <h4 className="vertical-timeline-element-subtitle">Broadbean Technology, Jobs posting application -
                        https://www.broadbean.com</h4>
                    <h5 className="vertical-timeline-element-subtitle">London, UK</h5>
                    <h5 className="vertical-timeline-element-mydate">Jun 2011 - Apr 2012</h5>
                    <p>
                        Hired as a <span className="badge badge-light">Perl</span> developer for the integration team.
                        Working within a team while managing my own projects.
                        Dedicated to the French market, providing the <u>technical support</u> to various stakeholders
                        to
                        ensure that Broadbean's products are correctly integrated with the client's infrastructure.
                        <br/><br/>
                        <b>Main achievement(s):</b> Creation of a <u>set of scripts</u> automating the workflow for the
                        french
                        market.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    icon={<WorkIcon/>}
                >
                    <h3 className="vertical-timeline-element-title">Developer and Strategist (Web & Network)</h3>
                    <h4 className="vertical-timeline-element-subtitle">PMC Milliot, E-commerce websites -
                        http://www.balance-milliot.fr</h4>
                    <h5 className="vertical-timeline-element-subtitle">Paris, France</h5>
                    <h5 className="vertical-timeline-element-subtitle">Sep 2010 - Jun 2011</h5>
                    <p>
                        Trained developers on using and maintaining the <span
                        className="badge badge-dark">Prestashop</span> system (previously created and
                        deployed by an agency).
                        I worked with various stakeholders to develop several modules, which, allowed the company’s
                        intranet to communicate with all their online shops.
                        The contract was completed through the creation of a new multi site <u>E-commerce platform</u>
                        <span className="badge badge-light">Prestashop</span> fully integrated with the company's
                        intranet/websites <span className="badge badge-light">CRM</span> <span
                        className="badge badge-light">Custom
                        system</span> <span className="badge badge-light">CMSmadesimple</span> <span
                        className="badge badge-light">Drupal</span> <span className="badge badge-light">Wordpress</span>.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    icon={<WorkIcon/>}
                >
                    <h3 className="vertical-timeline-element-title">Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">BJNET, Online gaming industry -
                        http://www.gagnerducash.com</h4>
                    <h5 className="vertical-timeline-element-subtitle">Paris, France</h5>
                    <h5 className="vertical-timeline-element-mydate">Oct 2007 - Oct 2010</h5>
                    <p>
                        I was part of a 4-person team, whilst at the same time studying for my Masters.

                        During the first year, I mainly worked as an HTML/CSS integrator and a <span
                        className="badge badge-dark">PHP</span> developer.
                        In the second year, my responsibilities included project management and further
                        technologies <span className="badge badge-light">Actionscript</span> <span
                        className="badge badge-light">AJAX</span> <span className="badge badge-light">JAVA</span>.

                        In my final year, I was responsible for the creation and maintenance of many websites in <span
                        className="badge badge-dark">Wordpress</span> & <span
                        className="badge badge-light">Drupal</span> alongside my role in the main website of the
                        company <span className="badge badge-dark">Drupal 6</span>: a high
                        traffic website containing videos and flash games and a large amount of features like
                        commenting, rating and favoriting of videos and games.
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}
                    icon={<SchoolIcon/>}
                >
                    <h3 className="vertical-timeline-element-title">University Paris-Est Marne-La-Vallee</h3>
                    <h4 className="vertical-timeline-element-subtitle">Master's degree, IT project management / Quality
                        management system</h4>
                    <h5 className="vertical-timeline-element-subtitle">Paris, France</h5>
                    <h5 className="vertical-timeline-element-mydate">2009 - 2010</h5>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}
                    icon={<SchoolIcon/>}
                >
                    <h3 className="vertical-timeline-element-title">University of Cergy-Pontoise</h3>
                    <h4 className="vertical-timeline-element-subtitle">European Bachelor Degree in Global IT System,
                        Specialized in Unix/Linux system</h4>
                    <h5 className="vertical-timeline-element-subtitle">Paris, France</h5>
                    <h5 className="vertical-timeline-element-mydate">2007 - 2009</h5>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}
                    // icon={<SchoolIcon />}
                    icon={<SchoolIcon/>}
                >
                    <h3 className="vertical-timeline-element-title">CFA Leonard de Vinci</h3>
                    <h4 className="vertical-timeline-element-subtitle">BTEC Higher National Diploma, System, Networking,
                        and LAN/WAN</h4>
                    <h5 className="vertical-timeline-element-subtitle">Melun, France</h5>
                    <h5 className="vertical-timeline-element-mydate">2005 - 2007</h5>
                    <p>
                        <h4>Work placement</h4>
                        <h5 className="vertical-timeline-element-subtitle">Agora System (Drim.com) - Moissy-Cramayel, France</h5>
                        <h5 className="vertical-timeline-element-mydate">Dec 2006 - Feb 2007</h5>
                        <b>IT Network Manager:</b> Server administration (Unix/Linux system)
                        <hr/>
                        <h5 className="vertical-timeline-element-subtitle">Arnet Services - Combs-la-Ville, France</h5>
                        <h5 className="vertical-timeline-element-mydate">June 2006 - July 2006</h5>
                        <b>Web Developer:</b> Debugging Wordpress websites
                        <hr/>
                        <h5 className="vertical-timeline-element-subtitle">Arnet Services, Combs-la-Ville, France</h5>
                        <h5 className="vertical-timeline-element-mydate">Feb 2005 - Apr 2005</h5>
                        <b>IT Network Manager:</b> Server administration (Windows & Unix/Linux system)

                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        )
    }
}

ReactDOM.render(
    <Timeline/>
    ,
    document.getElementById('timeline')
);