import React, { useContext, useState } from 'react'
import "./portifolio.css"
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";
import { Col, Container, Row, Card } from 'react-bootstrap';
import { translations } from '../language/translations';
import { LangContext } from '../language/LangContext';


function Portifolio() {
  const { language, setLanguage } = useContext(LangContext);
  const [currentActive, setCurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setCurrentActive(buttonCategory);

    const newArr = myProjects.filter((item) => {
      const category = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });

      return category === buttonCategory;
    });

    setArr(newArr);
  };

  return (
    <section className="portifolio" id='Portifolio'>
      <Container>
        <div className="dots dots-up-right"></div>
        <div className="dots dots-down-left"></div>
        <h2 className="section-title my-5">{translations[language].myWork}</h2>
        <Row>
          <Col lg={2}>
            <section className="d-flex flex-column gap-1 flex-wrap gap-2 left-section mb-5">
              <button
                onClick={() => {
                  setCurrentActive("all");
                  setArr(myProjects);
                }}
                className={currentActive === "all" ? "active" : null}
              >
                {translations[language].allProjects}
              </button>

              <button
                onClick={() => {
                  handleClick("css");
                }}
                className={currentActive === "css" ? "active" : null}
              >
                {translations[language].HtmlCssJS}
              </button>

              <button
                onClick={() => {
                  handleClick("react");
                }}
                className={currentActive === "react" ? "active" : null}
              >
                {translations[language].React}
              </button>

            </section>
          </Col>

          <Col lg={10}>
            <div className="d-flex gap-2 right-section">
              <AnimatePresence>
                <Row>
                  {arr.map((item, index) => {
                    return (
                      <Col lg={4} key={index}>
                        <motion.a
                          layout
                          initial={{ transform: "scale(0.4)" }}
                          animate={{ transform: "scale(1)" }}
                          transition={{ type: "spring", damping: 8, stiffness: 50 }}
                          key={index}
                          className='mb-3 d-block text-decoration-none'
                          href={item.projectLink} target="_blank" rel="noopener noreferrer"
                        >
                          <Card>
                            <Card.Img variant="top" src={item.imgPath} />
                            <Card.Body>
                              <Card.Text>{item.projectTitle}</Card.Text>
                            </Card.Body>
                          </Card>
                        </motion.a>
                      </Col>
                    );
                  })}
                </Row>
              </AnimatePresence>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Portifolio
