import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./footer.css";
import { translations } from '../language/translations';
import { LangContext } from '../language/LangContext';

function Footer() {
    const { language, setLanguage } = useContext(LangContext);
    return (
        <footer>
            <Container>
                <Row>
                    <Col sm={12} md={6}>
                        <div className="copyright my-2">
                            {translations[language].RightReserved} <span className="mx-1 date">{new Date().getFullYear()}</span>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div className="d-flex justify-content-end gap-3 my-2 social-icon">
                            <a href="https://wa.me/97433467648" target="_blank" rel="noopener noreferrer"><img src="./imgs/whatsapp_icon.png" alt="whatsapp-icon" width={25} height={25} /></a>
                            <a href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEeRDdEMvwb0gAAAZL8fELYdt2m3P_ABa04W1hjHErbt-JKyu_SHKgoLYci6pQF6ukcyhLhviq7uA_L186RVpZGs0jYhBGC92aL4z0Q8Ugxsc5FZsA0IdY6w2gSUX1lFwUBd4M=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fosama-ahmed-86b455208%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app" target="_blank" rel="noopener noreferrer"><img src="./imgs/linkedIn-icon.png" alt="linkedIn-icon" width={25} height={25} /></a>
                            <a href="https://github.com/Osama7-hub" target="_blank" rel="noopener noreferrer"><img src="./imgs/github.png" alt="github-icon" width={25} height={25} /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
