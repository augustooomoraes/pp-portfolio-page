"use client";

const { useEffect, useState } = require("react");

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
    <>
      {BackToTopButton && (
        <div className="nav-link-list fixed bottom-[30px] right-[30px] w-[40rem] h-[40rem] rounded-[6px]">
          <button onClick={scrollUp} className="nav-link w-full h-full rounded-[6px] flex justify-center items-center">
            <FaChevronUp />
          </button>
        </div>
      )}
    </>
  );
}
