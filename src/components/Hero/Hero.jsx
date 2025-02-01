import React, { useContext, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Lottie from "lottie-react";
import devAnimation from "../../animation/developer.json";
import "./hero.css"
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { translations } from '../language/translations'
import { LangContext } from '../language/LangContext';
import { useEffect } from 'react';

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


function Hero() {

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
    // حالة لتخزين اللغة الحالية
    const { language, setLanguage } = useContext(LangContext);
    return (
        <div className='hero' id='Home'>
            <Container>
                <Row>
                    <Col md={12} lg={6}>
                        <div
                            className='hero-info'>
                            <img src="./imgs/Osama.jpg" alt="avatar" width={100} height={100} className='rounded-circle avatar' />
                            <h2>{translations[language].name} <span> {translations[language].jobTitle}</span></h2>
                            <p>{translations[language].sammary}</p>
                            <div className="d-flex align-items-center gap-3 social-icon">
                                <a href="https://wa.me/97433467648" target="_blank" rel="noopener noreferrer"><img src="./imgs/whatsapp_icon.png" alt="whatsapp-icon" width={25} height={25} /></a>
                                <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEeRDdEMvwb0gAAAZL8fELYdt2m3P_ABa04W1hjHErbt-JKyu_SHKgoLYci6pQF6ukcyhLhviq7uA_L186RVpZGs0jYhBGC92aL4z0Q8Ugxsc5FZsA0IdY6w2gSUX1lFwUBd4M=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fosama-ahmed-86b455208%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app" target="_blank" rel="noopener noreferrer"><img src="./imgs/linkedIn-icon.png" alt="linkedIn-icon" width={25} height={25} /></a>
                                <a href="https://github.com/Osama7-hub" target="_blank" rel="noopener noreferrer"><img src="./imgs/github.png" alt="github-icon" width={25} height={25} /></a>
                                {
                                    language === "ar" ? <a href="files/اسامة-cv.pdf" className='btn btn-primary'><FontAwesomeIcon icon={faFilePdf} /> {translations[language].cvButton}</a>
                                        : <a href="files/Osama-cv.pdf" className='btn btn-primary'><FontAwesomeIcon icon={faFilePdf} /> {translations[language].cvButton}</a>
                                }
                            </div>
                        </div>
                    </Col>
                    <Col md={12} lg={6}>
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={controls}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
                            }} 
                        className='hero-img'>
                            <Lottie
                                lottieRef={lottieRef}
                                onLoadedImages={() => {
                                    // @ts-ignore
                                    // https://lottiereact.com/
                                    lottieRef.current.setSpeed(0.5);
                                }}
                                animationData={devAnimation}
                            />
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Hero
