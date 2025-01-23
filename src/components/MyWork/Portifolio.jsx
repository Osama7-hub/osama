import React, { useContext, useState, useEffect } from 'react'
import "./portifolio.css"
import { myProjects } from "./myProjects";
import { AnimatePresence, motion, useAnimation} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Col, Container, Row, Card } from 'react-bootstrap';
import { translations } from '../language/translations';
import { LangContext } from '../language/LangContext';

function Portifolio() {

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
        <div className="dots-up-right dots"></div>
        <div className="dots-down-left dots"></div>
        <h2 className="my-5 section-title">{translations[language].myWork}</h2>
        <Row>
          <Col lg={2}>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
              }}
              className="left-section d-flex flex-column flex-wrap gap-1 gap-2 mb-5">
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

            </motion.div>
          </Col>

          <Col lg={10}>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
              }}
              className="right-section d-flex gap-2">
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
                          className='d-block mb-3 text-decoration-none'
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
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Portifolio
