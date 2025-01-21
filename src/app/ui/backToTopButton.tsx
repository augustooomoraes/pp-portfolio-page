"use client";

import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa6";

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(document.documentElement.scrollTop >= 100);
    };

    onScroll();
    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      <div className={`
        bg-surface-secondary dark:bg-surface-secondaryDark
        shadow-md
        fixed bottom-7 right-7
        w-10 h-10 rounded-almostMedium
        transition-opacity duration-300
        ${visible ? "opacity-100" : "opacity-0"}
      `}>
        <button onClick={visible ? scrollUp : undefined} className={`
          ${visible ? "cursor-pointer" : "cursor-default"}
          flex justify-center items-center
          w-full h-full rounded-almostMedium
          transition-colors
          hover:bg-surface-hover dark:hover:bg-surface-hoverDark
        `}>
          <FaChevronUp />
        </button>
      </div>
    </>
  );
}
