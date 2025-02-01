import PortfolioCard from "@/app/ui/components/web-cards";
import classNames from "classnames";

import { Nunito_Sans } from "next/font/google";
const nunito_sans = Nunito_Sans({ subsets: ["latin"] });

import PpPortfolioPageOg from "@/../public/portfolio-web/pp-portfolio-page-og.png"
import PpPortfolioPageFav from "@/../public/portfolio-web/pp-portfolio-page-fav.png"
import PpDevocionarioOg from "@/../public/portfolio-web/pp-devocionario-og.png"
import PpDevocionarioFav from "@/../public/portfolio-web/pp-devocionario-fav.png"
import PpTicTacToeOg from "@/../public/portfolio-web/pp-tic-tac-toe-og.png"
import PpTicTacToeFav from "@/../public/portfolio-web/pp-tic-tac-toe-fav.png"

export const metadata = {
  title: "Web",
};

export default function Page() {
  return (
    <main className={classNames(nunito_sans.className)}>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <PortfolioCard key={project.title} {...project} />
      ))}
    </div>
    </main>
  );
}

const projects = [
  {
    title: "Portfólio",
    description: "Esta mesma página.",
    imageOg: PpPortfolioPageOg,
    imageFav: PpPortfolioPageFav,
    technologies: [{ name: "Next.js" }, { name: "TypeScript" }, { name: "Tailwind CSS" }, { name: "shadcn/ui" }],
    liveUrl: "#",
    githubUrl: "https://github.com/augustooomoraes/pp-portfolio-page",
  },
  {
    title: "Devocionário",
    description: "Orações e práticas espirituais. Diagramação especializada.",
    imageOg: PpDevocionarioOg,
    imageFav: PpDevocionarioFav,
    technologies: [{ name: "Next.js" }, { name: "Typescript" }, { name: "Tailwind CSS" }, { name: "shadcn/ui" }],
    liveUrl: "https://devocionario.augustooomoraes.com/",
    githubUrl: "https://github.com/augustooomoraes/pp-devocionario",
  },
  {
    title: "Tic-tac-toe",
    description: "Projeto desenvolvido em etapas: JavaScript → TypeScript → React → Next.js.",
    imageOg: PpTicTacToeOg,
    imageFav: PpTicTacToeFav,
    technologies: [{ name: "Next.js" }, { name: "TypeScript" }, { name: "Tailwind CSS" }, { name: "JavaScript" }, { name: "React" }],
    liveUrl: "https://tictactoe.augustooomoraes.com/",
    githubUrl: "https://github.com/augustooomoraes/pp-tic-tac-toe",
  },
]