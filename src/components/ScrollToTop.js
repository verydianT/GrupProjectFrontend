import React, { useEffect, useState } from "react";
import styled from "styled-components";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const Svgi = styled.svg`
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: rgb(20, 216, 216);
    border-radius: 5px;
    &:hover{
        background-color: #2ee59d;
        box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
        color: rgb(0, 0, 0);
        transform: translateY(-7px);
    }
  `;


  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div onClick={scrollToTop}>
          <Svgi xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="45px" height="45px">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </Svgi>
        </div>
      )}
    </div>
  );
}

export default ScrollToTop;
