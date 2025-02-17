import classNames from "classnames";
import clsx from "clsx";

import { Nunito_Sans } from "next/font/google";
import { Aleo } from "next/font/google";
const nunito_sans = Nunito_Sans({ subsets: ["latin"] });
const aleo = Aleo({ subsets: ["latin"], style: ["normal", "italic"] });

export const metadata = {
  title: "Design",
};

export default function Page() {
  return (
    <main className={classNames(nunito_sans.className)}>
      <section>
        <h1 className={clsx(aleo.className, "mb-0")}>Editorial</h1>
        <span className={clsx(aleo.className, "mb-7 text-3xl italic font-light")}>(diagramação)</span>
        {/* TODO: see if i can load a preview image from a Google Drive file share link */}
      </section>
    </main>
  );
}
