"use client";

import Link from "next/link";
import classNames from "classnames";

import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

import { Nunito_Sans } from "next/font/google";
import { useState } from "react";
import { ThemeToggle } from "./components/themeToggle/theme-toggle";
const nunito_sans = Nunito_Sans({ subsets: ["latin"] });

export function Navbar() {
  const [isOpenDdMenu, setIsOpenDdMenu] = useState(false);
  function handleClick() {
    setIsOpenDdMenu((prev) => !prev);
  }
  /**
   * https://www.youtube.com/watch?v=IF6k0uZuypA&t=656s
   * Baseado nesse State acima, controlar as classes do <menu>.
   * Fazer algo semelhante no backToTopButton.js.
   */

  return (
    <header className="
      bg-transparent
      shadow-[0_10px_40px_0_rgba(0,0,0,0.2)]
      h-fit
      col-start-1 col-end-4
      grid grid-cols-[minmax(40px,_1fr)_minmax(300px,_1000px)_minmax(40px,_1fr)]
    ">
      <nav className="
        py-[40px]
        flex flex-row flex-nowrap justify-between items-center
        col-start-2 col-end-3
      ">
        <Link
          href="/"
          onClick={() => setIsOpenDdMenu(false)}
          className="text-[28rem] font-medium text-text-primary dark:text-text-primaryDark"
        >
          Augusto Moraes
        </Link>

        <menu className={classNames(
          nunito_sans.className,
          "hidden md:flex",
          "text-[22rem] font-normal text-right text-current",
          "gap-[40px] list-none",
        )}>
          { links.map( (link, index) => NavLink(index, link, handleClick) ) }
          <ThemeToggle />
        </menu>

        <div className="flex flex-row gap-[10rem] md:hidden">
          <ThemeToggle />
          {
            isOpenDdMenu
            ? <IoClose onClick={handleClick} className="md:hidden cursor-pointer" />
            : <IoMenu onClick={handleClick} className="cursor-pointer" />
          }
        </div>

        <menu className={classNames(
          nunito_sans.className,
          "md:hidden",
          "flex flex-col items-end gap-[4px]",
          "absolute top-[80px] right-[40px]",
          isOpenDdMenu ? "p-[4px] rounded-[6px]" : "p-0 rounded-none",
          "bg-surface-secondary shadow-lg",
          "text-right",
          "overflow-hidden",
          isOpenDdMenu ? "opacity-100" : "opacity-0",
        )}>
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
            w-[120px] py-[1px] pr-[8px]
            transition-colors duration-longer
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