import PortfolioCardDesignBrand from "@/app/ui/components/design-brand-cards";
import classNames from "classnames";
import clsx from "clsx";

import { Nunito_Sans } from "next/font/google";
import { Aleo } from "next/font/google";
const nunito_sans = Nunito_Sans({ subsets: ["latin"] });
const aleo = Aleo({ subsets: ["latin"], style: ["normal", "italic"] });

import brandProjects from "@/app/data/design-brand.json";

export const metadata = {
  title: "Design",
};

export default function Page() {
  return (
    <main className={classNames(nunito_sans.className)}>
      <section className="mb-24">
        <h1 className={clsx(aleo.className, "mb-8")}>Marcas</h1>
        <div className="grid gap-6 sm:grid-cols-2">
          {brandProjects.map((brandProject) => (
            <PortfolioCardDesignBrand key={brandProject.title} {...brandProject} />
          ))}
        </div>
      </section>

      <section>
        <h1 className={clsx(aleo.className, "mb-0")}>Editorial</h1>
        <span className={clsx(aleo.className, "mb-7 text-3xl italic font-light")}>(diagramação)</span>
        {/* TODO: see if i can load a preview image from a Google Drive file share link */}
      </section>
    </main>
  );
}
