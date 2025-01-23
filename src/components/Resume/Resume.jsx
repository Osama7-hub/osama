import React, { useContext } from 'react';
import "./resume.css";
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { translations } from '../language/translations';
import { LangContext } from '../language/LangContext';

import { useEffect } from 'react';

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Resume() {
    const { language, setLanguage } = useContext(LangContext);

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

    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
        className="resume" id="Resume">
            <Container>
                <h2 className="section-title">{translations[language].resume}</h2>
                <div className="timeline-content">
                    <div className="title">{translations[language].education}</div>

                    <motion.div 
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
                    }}
                    className="right">
                        <div className="content">
                            <span className="date">2016</span>
                            <h3>{translations[language].computerScience}</h3>
                            <p>{translations[language].csSummary}</p>
                        </div>
                    </motion.div>

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
                    <motion.div 
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
                    }} 
                    className="left">
                        <div className="content">
                            <span className="date">2021</span>
                            <h3>{translations[language].softDev}</h3>
                            <p>{translations[language].softDevSummary}</p>
                        </div>
                    </motion.div>
                    <div className="clearfix"></div>
                    <motion.div 
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0, transition: { duration: 2.0 } },
                    }}
                    className="right">
                        <div className="content">
                            <span className="date">2020</span>
                            <h3>{translations[language].helpDesk}</h3>
                            <p>{translations[language].helpDeskSummary}</p>
                        </div>
                    </motion.div>
                    <div className="clearfix"></div>
                    <motion.div 
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0, transition: { duration: 2.5 } },
                    }} 
                    className="left">
                        <div className="content">
                            <span className="date">2018</span>
                            <h3>{translations[language].callCenter}</h3>
                            <p>{translations[language].callCenterSummary}</p>
                        </div>
                    </motion.div>
                    <div className="clearfix"></div>

                </div>
            </Container>
        </motion.section>
    )
}

export default Resume
