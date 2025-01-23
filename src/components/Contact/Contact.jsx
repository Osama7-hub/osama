import React, { useContext, useEffect, useState } from 'react'
import "./contact.css"
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../animation/done.json";
import contactAnimation from "../../animation/contactMe.json";
import { translations } from '../language/translations';
import { LangContext } from '../language/LangContext';

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Contact() {
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



    const [state, handleSubmit] = useForm("xgvekwgp");
    const { language, setLanguage } = useContext(LangContext);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    // const handleFormSubmit = async (e) => {
    //     e.preventDefault();
    //     await handleSubmit(e); // إرسال البيانات إلى Formspree
    //     if (state.succeeded) {
    //         // تفريغ الحقول إذا نجح الإرسال
    //         setFormData({
    //             name: "",
    //             email: "",
    //             message: "",
    //         });
    //     }
    // };

    // استخدم useEffect لمراقبة حالة الإرسال
    useEffect(() => {
        if (state.succeeded) {
            // تفريغ الحقول بعد نجاح الإرسال
            setFormData({
                name: "",
                email: "",
                message: "",
            });
        }
    }, [state.succeeded]);


    return (
        <section className='my-5 contact' id='Contact'>
            <Container>
                <div className="dots-down-right dots"></div>
                <h2 className='section-title'>{translations[language].contactMe}</h2>
                <p>{translations[language].contactsammary}</p>
                <Row>
                    <Col md={12} lg={6}>
                        <motion.form 
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
                        }}
                        onSubmit={handleSubmit} className='my-4'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control required autoComplete='off' type="text" name="name" placeholder={translations[language].labelName} className='p-3'
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <ValidationError field="name" prefix="Name" errors={state.errors} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control required autoComplete='off' type="email" name="email" placeholder={translations[language].labelEmail} className='p-3'
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <ValidationError field="email" prefix="email" errors={state.errors} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control required autoComplete='off' as="textarea" name="message" placeholder={translations[language].labelMessage} rows={3} cols={3}
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                                <ValidationError field="message" prefix="message" errors={state.errors} />
                            </Form.Group>
                            <Form.Group className='d-flex justify-content-start w-100'>
                                <Button type="submit" disabled={state.submitting} className='px-5'>
                                    {state.submitting ? translations[language].sendingButton : translations[language].sendButton}
                                </Button>
                            </Form.Group>

                            {state.succeeded && (
                                <div className="d-flex align-items-center" style={{ fontSize: "18px", marginTop: "1.7rem" }}>
                                    <Lottie loop={false} style={{ height: 35 }} animationData={doneAnimation} />
                                    {translations[language].sentSuccessfully}
                                </div>
                            )}

                        </motion.form>
                    </Col>
                    <Col md={12} lg={6}>
                        <motion.div 
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
                        }} 
                        className="d-flex justify-content-end w-100 animation">
                            <Lottie
                                className="contact-animation"
                                style={{ height: 355 }}
                                animationData={contactAnimation}
                            />
                        </motion.div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact
