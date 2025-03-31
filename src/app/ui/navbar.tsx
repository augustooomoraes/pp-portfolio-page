"use client";

import Link from "next/link";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";

import { IoMenu, IoClose } from "react-icons/io5";
import { Nunito_Sans } from "next/font/google";
import { ThemeToggle } from "./components/themeToggle/theme-toggle";

const nunito_sans = Nunito_Sans({ subsets: ["latin"] });

export function Navbar() {
  const [isOpenDdMenu, setIsOpenDdMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLMenuElement | null>(null);

  function handleClick() {
    setIsOpenDdMenu((prev) => !prev);
  }

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 10);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpenDdMenu(false);
      }
    }

    if (isOpenDdMenu) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpenDdMenu]);

  return (
    <header
      className={classNames(
        "bg-surface-primary dark:bg-surface-primaryDark",
        "shadow-lg",
        "fixed top-0 z-50 w-full",
        "transition-all duration-300",
        isScrolled ? "py-4" : "py-10"
      )}
    >
      <nav className="flex justify-between items-center col-start-2 col-end-3 px-6 md:px-12 md:mx-auto mx-6">

        <Link
          href="/"
          onClick={() => setIsOpenDdMenu(false)}
          className="
            block
            text-2.2xl md:text-2.5xl font-medium text-text-primary dark:text-text-primaryDark
          "
        >
          Augusto Moraes
        </Link>
        {/* <Link
          href="/"
          onClick={() => setIsOpenDdMenu(false)}
          className="
            block md:hidden
            text-2.5xl font-medium text-text-primary dark:text-text-primaryDark
          "
        >
          AM
        </Link> */}

        <menu
          className={classNames(
            nunito_sans.className,
            "hidden md:flex",
            "text-1.5xl font-normal text-right text-current",
            "gap-10 list-none",
          )}
        >
          {links.map((link, index) => NavLink(index, link, handleClick))}
          <ThemeToggle />
        </menu>

        <div className="flex flex-row gap-2.5 md:hidden">
          <ThemeToggle />
          {isOpenDdMenu ? (
            <IoClose
              onClick={handleClick}
              className="cursor-pointer hover:text-link-hover dark:hover:text-link-hoverDark transition-colors duration-300"
            />
          ) : (
            <IoMenu
              onClick={handleClick}
              className="cursor-pointer hover:text-link-hover dark:hover:text-link-hoverDark transition-colors duration-300"
            />
          )}
        </div>

        <menu
          ref={menuRef}
          className={classNames(
            nunito_sans.className,
            "md:hidden flex flex-col items-end gap-1",
            "absolute top-20 right-10",
            isOpenDdMenu ? "p-1 rounded-md opacity-100" : "p-0 rounded-none opacity-0",
            "bg-surface-secondary dark:bg-surface-secondaryDark",
            "shadow-lg text-right overflow-hidden transition-all duration-300",
          )}
        >
          {links.map((link, index) =>
            NavLink(index, link, handleClick, true, isOpenDdMenu)
          )}
        </menu>

      </nav>
    </header>
  );
}

function NavLink(
  index: number,
  link: LinkType,
  func: () => void,
  dropdown = false,
  visible = true
) {
  if (dropdown) {
    return visible ? (
      <Link key={index} href={link.url} onClick={func}>
        <div className="
          w-32 py-px pr-2
          transition-colors duration-300
          hover:bg-surface-hover dark:hover:bg-surface-hoverDark
          text-text-primary dark:text-text-primaryDark
        ">
          {link.title}
        </div>
      </Link>
    ) : null;
  } else {
    return (
      <Link key={index} href={link.url} className="text-text-primary dark:text-text-primaryDark">
        {link.title}
      </Link>
    );
  }
}

type LinkType = {
  url: string;
  title: string;
};

const links: LinkType[] = [
  { url: "/curriculum", title: "CV" },
  { url: "/contact", title: "Contato" },
  { url: "/design", title: "Design" },
  { url: "/web", title: "Web" },
];
