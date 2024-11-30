import { useContext, useEffect, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import "./navbar.css"
import { faBarsStaggered, faX } from '@fortawesome/free-solid-svg-icons';
import { Button, Nav, OverlayTrigger, Tooltip } from 'react-bootstrap';
import NavLinks from './NavLinks';
import { translations } from '../language/translations';
import { LangContext } from '../language/LangContext';

function NavToggle() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const renderTooltip = props => <Tooltip id="button-tooltip" {...props}>Download CV</Tooltip>

    const { language, setLanguage } = useContext(LangContext);


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


    const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "dark");

    useEffect(() => {
        if (theme === "light") {
            document.body.classList.remove("dark");
            document.body.classList.add("light");
        } else {
            document.body.classList.remove("light");
            document.body.classList.add("dark");
        }
    }, [theme]);

    return (
        <>
            <div className='d-flex align-items-center'>
                <Nav className='d-md-flex flex-row justify-content-center align-items-center d-lg-none'>
                    <Button className='btn-mode' onClick={handleLanguageChange}>
                        {language === 'en' ? 'AR' : 'EN'}
                    </Button>

                    <Button className='btn-mode'
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
                <Button className='NavToggle' variant="primary" onClick={handleShow}>
                    <FontAwesomeIcon icon={faBarsStaggered} />
                </Button>
            </div>


            <Offcanvas show={show} onHide={handleClose} placement={"end"}>
                <Offcanvas.Header>
                    <FontAwesomeIcon icon={faX} className='ms-auto' onClick={handleClose} />
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <NavLinks />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default NavToggle
