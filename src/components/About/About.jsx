import React, { useContext, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Lottie from "lottie-react";
import designAnimation from "../../animation/designServ.json";
import devAnimation from "../../animation/develop.json";
import "./about.css";
import { translations } from '../language/translations';
import { LangContext } from '../language/LangContext';

import { useEffect } from 'react';

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function About() {

    // مراقبة العنصر أثناء دخوله إلى الشاشة
    const [ref, inView] = useInView({
        triggerOnce: true, // التأثير يظهر مرة واحدة فقط
        threshold: 0.1, // النسبة التي يبدأ عندها العنصر بالظهور
    });

    // للتحكم في الـ animation
    const controls = useAnimation();

    // تشغيل الأنيميشن عند ظهور العنصر
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [inView, controls]);


    const lottieRef = useRef();
    const { language, setLanguage } = useContext(LangContext);
    return (
        <section className='my-5 about' id='About'>
            <Container>
                <div className="dots-up-right dots"></div>
                <div className="dots-down-left dots"></div>
                <h2 className='text-center section-title'>{translations[language].AboutMe}</h2>
                <Row>
                    <Col md={12} lg={12} xl={5}>
                        <motion.div 
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                        }}
                        className='about-img'>
                            <img src="./imgs/aboutMe.png" alt="About Me" className='w-100 h-100' />
                        </motion.div>
                    </Col>
                    <Col md={12} lg={12} xl={7}>
                        <motion.div 
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                        }}
                        className='about-info'>
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
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About
