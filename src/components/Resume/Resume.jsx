import React, { useContext } from 'react';
import "./resume.css";
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { translations } from '../language/translations';
import { LangContext } from '../language/LangContext';

function Resume() {
    const { language, setLanguage } = useContext(LangContext);
    return (
        <section className="resume" id="Resume">
            <Container>
                <h2 className="section-title">{translations[language].resume}</h2>
                <div className="timeline-content">
                    <div className="title">{translations[language].education}</div>

                    <div className="right">
                        <div className="content">
                            <span className="date">2016</span>
                            <h3>{translations[language].computerScience}</h3>
                            <p>{translations[language].csSummary}</p>
                        </div>
                    </div>

                    <div className="clearfix"></div>

                    <div className="title">{translations[language].experience}</div>

                    {/* <div className="right">
                        <div className="content">
                            <span className="date">2023-{translations[language].present}</span>
                            <h3>{translations[language].freelanceFEndDev}</h3>
                            <p>{translations[language].freelanceFEndDevSummary}</p>
                        </div>
                    </div> */}
                    <div className="clearfix"></div>
                    <div className="left">
                        <div className="content">
                            <span className="date">2021</span>
                            <h3>{translations[language].softDev}</h3>
                            <p>{translations[language].softDevSummary}</p>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="right">
                        <div className="content">
                            <span className="date">2020</span>
                            <h3>{translations[language].helpDesk}</h3>
                            <p>{translations[language].helpDeskSummary}</p>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="left">
                        <div className="content">
                            <span className="date">2018</span>
                            <h3>{translations[language].callCenter}</h3>
                            <p>{translations[language].callCenterSummary}</p>
                        </div>
                    </div>
                    <div className="clearfix"></div>

                </div>
            </Container>
        </section>
    )
}

export default Resume
