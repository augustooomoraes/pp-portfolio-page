"use client";

import Link from "next/link";
import classNames from "classnames";

import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

import { Nunito_Sans } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "./components/themeToggle/theme-toggle";

const nunito_sans = Nunito_Sans({ subsets: ["latin"] });

export function Navbar() {
  const [isOpenDdMenu, setIsOpenDdMenu] = useState(false);
  const menuRef = useRef<HTMLMenuElement | null>(null);

  function handleClick() {
    setIsOpenDdMenu((prev) => !prev);
  }

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

    // Cleanup on unmount or state change
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpenDdMenu]);

  return (
    <header className="
      bg-transparent
      shadow-lg
      h-fit
      col-start-1 col-end-4
      grid grid-cols-[minmax(2.5rem,_1fr)_minmax(300px,_1000px)_minmax(2.5rem,_1fr)]
    ">
      <nav className="
        py-10
        flex flex-row flex-nowrap justify-between items-center
        col-start-2 col-end-3
      ">
        <Link
          href="/"
          onClick={() => setIsOpenDdMenu(false)}
          className="text-2.5xl font-medium text-text-primary dark:text-text-primaryDark"
        >
          Augusto Moraes
        </Link>

        <menu className={classNames(
          nunito_sans.className,
          "hidden md:flex",
          "text-1.5xl font-normal text-right text-current",
          "gap-10 list-none",
        )}>
          { links.map( (link, index) => NavLink(index, link, handleClick) ) }
          <ThemeToggle />
        </menu>

        <div className="flex flex-row gap-2.5 md:hidden">
          <ThemeToggle />
          {
            isOpenDdMenu
            ? <IoClose
              onClick={handleClick}
              className="
                md:hidden
                cursor-pointer
                hover:text-link-hover dark:hover:text-link-hoverDark
                transition-colors duration-300
              "
            />
            : <IoMenu
              onClick={handleClick}
              className="
                cursor-pointer
                hover:text-link-hover dark:hover:text-link-hoverDark
                transition-colors duration-300
              "
            />
          }
        </div>

        <menu
          ref={menuRef}
          className={classNames(
            nunito_sans.className,
            "md:hidden",
            "flex flex-col items-end gap-1",
            "absolute top-20 right-10",
            isOpenDdMenu ? "p-1 rounded-md" : "p-0 rounded-none",
            "bg-surface-secondary dark:bg-surface-secondaryDark shadow-lg",
            "text-right",
            "overflow-hidden",
            isOpenDdMenu ? "opacity-100" : "opacity-0",
          )}
        >
          { links.map( (link, index) => NavLink(index, link, handleClick, true, isOpenDdMenu) ) }
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
  visible = true,
) {
  if (dropdown) {
    return (
      visible
        ? <Link
          key={index}
          href={link.url}
          onClick={func}
        >
          <div className="
            w-32 py-px pr-2
            transition-colors duration-300
            hover:bg-surface-hover dark:hover:bg-surface-hoverDark
            text-text-primary dark:text-text-primaryDark
          ">
            {link.title}
          </div>
        </Link>
      : null
    )
  } else {
    return <Link
      key={index}
      href={link.url}
      className="text-text-primary dark:text-text-primaryDark"
    >
      {link.title}
    </Link>
  }
}

type LinkType = {
  url: string,
  title: string,
}

const links: LinkType[] = [
  {
    url: "/curriculum",
    title: "CV",
  },
  {
    url: "/contact",
    title: "Contato",
  },
  {
    url: "/design",
    title: "Design",
  },
  {
    url: "/web",
    title: "Web",
  },
]