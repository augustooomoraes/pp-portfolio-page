"use client";

import Link from "next/link";
import classNames from "classnames";

import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

import { Nunito_Sans } from "next/font/google";
import { useState } from "react";
const nunito_sans = Nunito_Sans({ subsets: ["latin"] });

export function Navbar() {
  const [isOpenDdMenu, setIsOpenDdMenu] = useState(false);
  function handleClick() {
    setIsOpenDdMenu((prev) => !prev);
  }

  return (
    // <header className="bg-transparent shadow-[0_10px_40px_0_rgba(0,0,0,0.2)] flex justify-center col-start-1 col-end-4">
    <header className="bg-transparent shadow-[0_10px_40px_0_rgba(0,0,0,0.2)] h-fit col-start-1 col-end-4 grid grid-cols-[minmax(40px,_1fr)_minmax(300px,_1000px)_minmax(40px,_1fr)]">
      <nav className="py-[40px] flex flex-row flex-nowrap justify-between items-center col-start-2 col-end-3">
        {/* <nav className="py-[40px] flex flex-row flex-nowrap justify-between"> */}
        <Link href="/" onClick={() => setIsOpenDdMenu(false)} className="text-[28rem] font-medium">
          Augusto Moraes
        </Link>
        <menu className={classNames(nunito_sans.className, "hidden md:flex text-[22rem] font-normal text-right gap-[40px] list-none")}>
          <Link href="/curriculum">CV</Link>
          <Link href="/contact">Contato</Link>
          <Link href="/design">Design</Link>
          <Link href="/web">Web</Link>
        </menu>
        {isOpenDdMenu ? <IoClose onClick={handleClick} className="md:hidden" /> : <IoMenu onClick={handleClick} className="md:hidden" />}
        {isOpenDdMenu && (
          <menu className={classNames(nunito_sans.className, "nav-link-list p-[4px] rounded-[6px] md:hidden absolute right-[40px] top-[80px] flex flex-col gap-[4px] items-end text-right")}>
            <Link href="/curriculum" onClick={handleClick}>
              <div className="nav-link pr-[8px] py-[1px] w-[120px] rounded-[6px]">CV</div>
            </Link>
            <Link href="/contact" onClick={handleClick}>
              <div className="nav-link pr-[8px] py-[1px] w-[120px] rounded-[6px]">Contato</div>
            </Link>
            <Link href="/design" onClick={handleClick}>
              <div className="nav-link pr-[8px] py-[1px] w-[120px] rounded-[6px]">Design</div>
            </Link>
            <Link href="/web" onClick={handleClick}>
              <div className="nav-link pr-[8px] py-[1px] w-[120px] rounded-[6px]">Web</div>
            </Link>
          </menu>
        )}
      </nav>
    </header>
  );
}
