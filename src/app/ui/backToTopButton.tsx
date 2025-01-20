"use client";

import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

import { FaChevronUp } from "react-icons/fa6";

export function BackToTopButton() {
  const [showBackToTopButton, setShowBackToTopButton] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setShowBackToTopButton(window.scrollY > 100);
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <CSSTransition in={showBackToTopButton} unmountOnExit timeout={200} classNames="containerOpacity">
      <div className="
        bg-surface-secondary shadow-md
        fixed bottom-[30rem] right-[30rem]
        w-[40rem] h-[40rem] rounded-[3.75rem]
      ">
        <button onClick={scrollUp} className="
          flex justify-center items-center
          w-full h-full rounded-[3.75rem]
          transition-colors
          hover:bg-surface-hover dark:hover:bg-surface-hoverDark
        ">
          <FaChevronUp />
        </button>
      </div>
    </CSSTransition>
  );
}
