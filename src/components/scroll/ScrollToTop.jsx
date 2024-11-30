import React, { useEffect, useRef, useState } from "react";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./scrollTop.css"

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const prevScrollPos = useRef(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const currentScrollPos = window.scrollY;

      // Button is displayed after scrolling for 500 pixels
      currentScrollPos > 500 && currentScrollPos > prevScrollPos.current ? setIsVisible(true) : setIsVisible(false)

      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [isVisible]);

  return (
    <>
      {isVisible && (
        <button className="scroll-top" onClick={() => { window.scrollTo(0, 0) }}>
          <FontAwesomeIcon icon={faAnglesUp} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
