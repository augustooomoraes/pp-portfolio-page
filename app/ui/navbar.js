import Link from "next/link";
import classNames from "classnames";

import { Nunito_Sans } from "next/font/google";
const nunito_sans = Nunito_Sans({ subsets: ["latin"] });

export function Navbar() {
  return (
    // <header className="bg-transparent shadow-[0_10px_40px_0_rgba(0,0,0,0.2)] flex justify-center col-start-1 col-end-4">
    <header className="bg-transparent shadow-[0_10px_40px_0_rgba(0,0,0,0.2)] h-fit col-start-1 col-end-4 grid grid-cols-[minmax(40px,_1fr)_minmax(300px,_1000px)_minmax(40px,_1fr)]">
      <nav className="py-[40px] flex flex-row flex-nowrap justify-between items-center col-start-2 col-end-3">
        {/* <nav className="py-[40px] flex flex-row flex-nowrap justify-between"> */}
        <Link href="/" className="text-[28rem] font-medium">
          Augusto Moraes
        </Link>
        <menu className={classNames(nunito_sans.className, "text-[22rem] font-normal text-right flex gap-[40px] list-none")}>
          <Link href="/curriculum">CV</Link>
          <Link href="/contact">Contato</Link>
          <Link href="/design">Design</Link>
          <Link href="/web">Web</Link>
        </menu>
      </nav>
    </header>
  );
}
