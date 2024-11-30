import React, { useContext, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faPen } from '@fortawesome/free-solid-svg-icons';
import Lottie from "lottie-react";
import aboutAnimation from "../../animation/about.json";
import designAnimation from "../../animation/designServ.json";
import devAnimation from "../../animation/develop.json";
import "./About.css";
import { translations } from '../language/translations';
import { LangContext } from '../language/LangContext';

function About() {
    const lottieRef = useRef();
    const { language, setLanguage } = useContext(LangContext);
    return (
        <div className='my-5 about' id='About'>
            <Container>
                <div className="dots-up-right dots"></div>
                <div className="dots-down-left dots"></div>
                <h2 className='text-center section-title'>{translations[language].AboutMe}</h2>
                <Row>
                    <Col md={12} lg={12} xl={5}>
                        <div className='about-img'>
                            <img src="./imgs/aboutMe.png" alt="About Me" className='w-100 h-100' />
                        </div>
                    </Col>
                    <Col md={12} lg={12} xl={7}>
                        <div className='about-info'>
                            <p>{translations[language].aboutSammary}</p>
                            <div className="services">
                                <h3>{translations[language].WhatDoing}</h3>
                                <Row>
                                    <Col sm={12} md={6}>
                                        <div className='box'>
                                            <Lottie
                                                lottieRef={lottieRef}
                                                className="d-block mr-5 pr-5 text-left"
                                                style={{ width: "60px", marginBottom: "15px" }}
                                                onLoadedImages={() => {
                                                    // @ts-ignore
                                                    // https://lottiereact.com/
                                                    lottieRef.current.setSpeed(8);
                                                }}
                                                animationData={designAnimation}
                                            />
                                            <h4>{translations[language].webDesign}</h4>
                                            <p>{translations[language].webDesignDesc}</p>
                                        </div>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <div className='box'>
                                            <Lottie
                                                lottieRef={lottieRef}
                                                className="d-block mr-5 pr-5 text-left"
                                                style={{ width: "60px", height: "60px", marginBottom: "15px" }}
                                                onLoadedImages={() => {
                                                    // @ts-ignore
                                                    // https://lottiereact.com/
                                                    lottieRef.current.setSpeed(8);
                                                }}
                                                animationData={devAnimation}
                                            />
                                            <h4>{translations[language].WebDev}</h4>
                                            <p>{translations[language].WebDevDesc}</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About
