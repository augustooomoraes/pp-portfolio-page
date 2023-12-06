import classNames from "classnames";

import { Nunito_Sans } from "next/font/google";
import { Aleo } from "next/font/google";
const nunito_sans = Nunito_Sans({ subsets: ["latin"] });
const aleo = Aleo({ subsets: ["latin"] });

export const metadata = {
  title: "Currículo",
};

export default function Page() {
  return (
    <main className={nunito_sans.className}>
      {/* =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= */}
      <h2 className={aleo.className}>Educação</h2>
      <section className="mb-[70rem]">
        {/* =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= */}
        <section className="mb-[36rem]">
          <h4 className={classNames(aleo.className, "mb-0")}>Design</h4>
          <p className="font-light text-[18rem]">
            jan.2018 – dez.2018 <span className="italic">(incompleto)</span>
          </p>
          <p className="mb-0 leading-[0] font-medium">Universidade de Caxias do Sul</p>
        </section>
        {/* =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= */}
        <section className="mb-[36rem]">
          <h4 className={classNames(aleo.className, "mb-0")}>Criação Digital</h4>
          <p className="font-light text-[18rem]">
            jul.2019 – dez.2020 <span className="italic">(incompleto)</span>
          </p>
          <p className="mb-0 leading-[0] font-medium">Universidade de Caxias do Sul</p>
        </section>
        {/* =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= */}
      </section>
      {/* =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= */}
      <h2 className={aleo.className}>Habilidades</h2>
      <section className="mb-[36rem]">
        <ul className="list-inside list-disc ">
          <li className="text-[21rem] font-light">Excel, Power BI, Report Builder</li>
          <li className="text-[21rem] font-light">Power Automate</li>
          <li className="text-[21rem] font-light">Photoshop, Illustrator, InDesign</li>
          <li className="text-[21rem] font-light">Blender</li>
        </ul>
      </section>
      {/* =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= */}
      <h2 className={aleo.className}>Idiomas</h2>
      {/* =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= */}
      <h2 className={aleo.className}>Experiência</h2>
      {/* =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= */}
      <h2 className={aleo.className}>Cursos</h2>
    </main>
  );
}
