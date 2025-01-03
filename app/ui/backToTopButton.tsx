"use client";

import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

import { FaChevronUp } from "react-icons/fa6";

export function BackToTopButton() {
  const [showBackToTopButton, setShowBackToTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 100 ? setShowBackToTopButton(true) : setShowBackToTopButton(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <CSSTransition in={showBackToTopButton} unmountOnExit timeout={200} classNames="containerOpacity">
      <div className="bttButtonContainer">
        <button onClick={scrollUp} className="bttButtonContent">
          <FaChevronUp />
        </button>
      </div>
    </CSSTransition>
  );
}
