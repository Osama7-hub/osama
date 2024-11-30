import React, { useContext, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile, faFilePdf, faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { Button, Nav, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { translations } from '../language/translations';
import { LangContext } from '../language/LangContext';

function NavLinks() {
    // حالة لتخزين اللغة الحالية
    const { language, setLanguage } = useContext(LangContext);

    const renderTooltip = props => <Tooltip id="button-tooltip" {...props}>Download CV</Tooltip>


    const [theme, setTheme] = useState(
        localStorage.getItem("currentMode") ?? "dark"
    );

    useEffect(() => {
        if (theme === "light") {
            document.body.classList.remove("dark");
            document.body.classList.add("light");
        } else {
            document.body.classList.remove("light");
            document.body.classList.add("dark");
        }
    }, [theme]);


    // دالة لتغيير اللغة وحفظها في localStorage
    const handleLanguageChange = () => {
        const newLanguage = language === 'en' ? 'ar' : 'en';
        setLanguage(newLanguage);
        localStorage.setItem('language', newLanguage);
    };

    // جلب اللغة من localStorage عند تحميل المكون لأول مرة
    useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            setLanguage(savedLanguage);
        }
    }, []);

    const direction = language === 'en' ? 'ltr' : 'rtl';

    return (
        <>
            <Nav className="m-auto" dir={direction}>
                {
                    translations[language].navbar.map(navLink => {
                        return (
                            <Nav.Link key={navLink.link} href={`#${navLink.link}`}>{navLink.title}</Nav.Link>
                        )
                    })
                }
            </Nav>

            <Nav className='options-nav flex-row justify-content-center align-items-center'>
                <Button className='btn-mode' onClick={handleLanguageChange}>
                    {language === 'en' ? 'AR' : 'EN'}
                </Button>

                <Button className='btn-mode ms-2'
                    onClick={() => {
                        // Send value to localStorage
                        localStorage.setItem("currentMode", theme === "dark" ? "light" : "dark");
                        // get value from localStorage
                        setTheme(localStorage.getItem("currentMode"));
                    }}
                >
                    {theme === "dark" ? (<FontAwesomeIcon icon={faSun} />) : (<FontAwesomeIcon icon={faMoon} />)}
                </Button>
            </Nav>
        </>
    )
}

export default NavLinks
