"use client";

import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

import { FaChevronUp } from "react-icons/fa6";

export function BackToTopButton() {
  const [BackToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setBackToTopButton(true) : setBackToTopButton(false);
    });
  });

  const scrollUp = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <CSSTransition in={BackToTopButton} unmountOnExit timeout={200} classNames="containerOpacity">
      <div className="bttButtonContainer">
        <button onClick={scrollUp} className="bttButtonContent">
          <FaChevronUp />
        </button>
      </div>
    </CSSTransition>
  );
}
