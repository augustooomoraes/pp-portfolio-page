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
    <main className={classNames(nunito_sans.className, "grid grid-cols-[1fr] lg:grid-cols-[400px_1fr] lg:gap-x-[20px]")}>
      {/* =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= */}
      {/* Primeira coluna */}
      <div>
        {/* =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= */}
        <article className="mb-[70rem]">
          <div className="grid grid-cols-[auto_1fr] items-center">
            <h2 className={aleo.className}>Educação</h2>
            <svg className="mb-h2 pl-[20rem] h-[3rem] w-full">
              <rect className="w-full h-full fill-white opacity-50"></rect>
            </svg>
          </div>
          {/* =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= */}
          <section className="mb-[36rem]">
            <h4 className={classNames(aleo.className, "mb-0")}>Design</h4>
            <p className="font-extralight text-[18rem] leading-[22rem]">
              jan.2018 – dez.2018 <span className="italic">(incompleto)</span>
            </p>
            <p className="mt-[-16rem] mb-[-20rem] font-medium">Universidade de Caxias do Sul</p>
          </section>
          {/* =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= */}
          <section className="mb-[36rem]">
            <h4 className={classNames(aleo.className, "mb-0")}>Criação Digital</h4>
            <p className="font-extralight text-[18rem] leading-[22rem]">
              jul.2019 – dez.2020 <span className="italic">(incompleto)</span>
            </p>
            <p className="mt-[-16rem] mb-[-20rem] font-medium">Universidade de Caxias do Sul</p>
          </section>
          {/* =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= */}
        </article>
        {/* =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= */}
        <article className="mb-[36rem]">
          <div className="grid grid-cols-[auto_1fr] items-center">
            <h2 className={aleo.className}>Habilidades</h2>
            <svg className="mb-h2 pl-[20rem] h-[3rem] w-full">
              <rect className="w-full h-full fill-white opacity-50"></rect>
            </svg>
          </div>
          <ul className="list-inside list-disc ">
            <li className="text-[21rem] font-light">Excel, Power BI, Report Builder</li>
            <li className="text-[21rem] font-light">Power Automate</li>
            <hr className="opacity-30 my-[10rem] max-w-[320rem]"></hr>
            <li className="text-[21rem] font-light">Photoshop, Illustrator, InDesign</li>
            <li className="text-[21rem] font-light">Blender</li>
            <hr className="opacity-30 my-[10rem] max-w-[320rem]"></hr>
            <li className="text-[21rem] font-light">React, Next.js</li>
            <li className="text-[21rem] font-light">Tailwind CSS</li>
            <li className="text-[21rem] font-light">GitHub</li>
          </ul>
        </article>
        {/* =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= */}
        <article className="mb-[36rem]">
          <div className="grid grid-cols-[auto_1fr] items-center">
            <h2 className={aleo.className}>Idiomas</h2>
            <svg className="mb-h2 pl-[20rem] h-[3rem] w-full">
              <rect className="w-full h-full fill-white opacity-50"></rect>
            </svg>
          </div>
          <p className="text-[21rem] font-normal leading-[20rem]">
            Português <span className="italic font-light">(nativo)</span>
          </p>
          <p className="text-[21rem] font-normal leading-[20rem]">
            Inglês <span className="italic font-light">(avançado)</span>
          </p>
          <p className="mt-[-10rem] italic font-extralight text-[18rem]">College Yes Cultural (2013–2018)</p>
        </article>
      </div>
      {/* =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= */}
      {/* segunda coluna */}
      <div>
        {/* =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= */}
        <article className="mb-[36rem]">
          <div className="grid grid-cols-[auto_1fr] items-center">
            <h2 className={aleo.className}>Experiência</h2>
            <svg className="mb-h2 pl-[20rem] h-[3rem] w-full">
              <rect className="w-full h-full fill-white opacity-50"></rect>
            </svg>
          </div>
          {/* =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= */}
          <div className="mb-[18rem]">
            <p className="text-[18rem] font-extralight">jan.2021 – set.2023</p>
            <p className="text-[22rem] font-normal mt-[-20rem]">Persol Indústria e Comércio de Persianas e Cortinas Ltda</p>
            <p className="text-[26rem] font-bold mt-[-12rem]">Assistente Administrativo</p>
            <ul className="list-inside list-disc mt-[-8rem]">
              <li className="font-light">Manutenção de dados do sistema interno de produção e gestão;</li>
              <li className="font-light">
                Desenvolvimento de tabelas de preço por <span className="font-semibold">Excel</span>;
              </li>
              <li className="font-light">
                Elaboração de fichas técnicas de produtos com <span className="font-semibold">Photoshop</span>, <span className="font-semibold">Illustrator</span> e <span className="font-semibold">InDesign</span>;
              </li>
              <li className="font-light">
                Produção de modelos tridimensionais de produtos com <span className="font-semibold">Blender</span>;
              </li>
              <li className="font-light">
                Tratamento e relacionamento de dados, elaboração de relatórios e dashboards com <span className="font-semibold">Power BI Desktop</span> e <span className="font-semibold">Power BI Report Builder</span>;
              </li>
              <li className="font-light">
                Automação de envios de relatórios por e-mail com <span className="font-semibold">Power Automate</span>, <span className="font-semibold">Outlook</span> e <span className="font-semibold">OneDrive</span>.
              </li>
            </ul>
          </div>
          {/* =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= */}
          <hr className="opacity-30 mb-[18rem] max-w-[320rem]"></hr>
          <div className="mb-[36rem]">
            <p className="text-[18rem] font-extralight">jan.2016 – atualmente</p>
            <p className="text-[22rem] font-normal mt-[-20rem]">Autônomo</p>
            <p className="text-[26rem] font-bold mt-[-12rem]">Freelancer</p>
            <ul className="list-inside list-disc mt-[-8rem]">
              <li className="font-light">
                Produção de <span className="font-semibold">estampas</span> para roupas e acessórios e de <span className="font-semibold">materiais de divulgação</span>;
              </li>
              <li className="font-light">
                Produção de <span className="font-semibold">logotipos</span> e edição de <span className="font-semibold">fotografias e imagens</span> de produtos para catálogos virtuais;
              </li>
              <li className="font-light">
                Edição de <span className="font-semibold">vídeo</span> para aulas virtuais;
              </li>
              <li className="font-light">
                Elaboração de projetos para <span className="font-semibold">móveis e decoração</span>.
              </li>
            </ul>
          </div>
          {/* =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= */}
        </article>
        {/* =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= */}
        <article className="mb-[36rem]">
          <div className="grid grid-cols-[auto_1fr] items-center">
            <h2 className={aleo.className}>Cursos</h2>
            <svg className="mb-h2 pl-[20rem] h-[3rem] w-full">
              <rect className="w-full h-full fill-white opacity-50"></rect>
            </svg>
          </div>
          {/* =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= */}
          <section className="mb-[18rem]">
            <p className="text-[18rem] font-extralight">mai.2023 – jul.2023</p>
            <p className="text-[22rem] font-normal mt-[-20rem]">
              <span className="font-bold">Instituto Caldeira</span>
              <span className="font-extralight"> – Porto Alegre, RS</span>
            </p>
            <p className="text-[26rem] font-bold mt-[-10rem] leading-[30rem]">Programa Nova Geração – trilha de programação</p>
            <p className="font-extralight">
              Cursos de <span className="font-semibold">Javascript</span>, <span className="font-semibold">HTML</span>, <span className="font-semibold">Git</span>, <span className="font-semibold">Github</span> e <span className="font-semibold">Java</span> pela Alura Cursos Online de Tecnologia.
            </p>
          </section>
          {/* =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= */}
          <hr className="opacity-30 mb-[18rem] max-w-[320rem]"></hr>
          <section className="mb-[18rem]">
            <p className="text-[18rem] font-extralight">jan.2022 – atualmente</p>
            <p className="text-[22rem] font-normal mt-[-20rem]">
              <span className="font-bold">freeCodeCamp</span>
              <span className="font-extralight"> – remoto</span>
            </p>
            <p className="text-[26rem] font-bold mt-[-10rem] leading-[30rem]">Cursos de programação</p>
            <ul className="list-inside list-disc mt-[-8rem]">
              <li className="font-light">Responsive Web Design;</li>
              <li className="font-light">Javascript Algorithms and Data Structures;</li>
              <li className="font-light">Relational Databases.</li>
            </ul>
          </section>
          {/* =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= */}
          <hr className="opacity-30 mb-[18rem] max-w-[320rem]"></hr>
          <section className="mb-[36rem]">
            <p className="text-[18rem] font-extralight">jan.2023</p>
            <p className="text-[22rem] font-normal mt-[-20rem]">
              <span className="font-bold">DataCamp</span>
              <span className="font-extralight"> – remoto</span>
            </p>
            <p className="text-[26rem] font-bold mt-[-10rem] leading-[30rem]">Cursos de ciências de dados</p>
            <ul className="list-inside list-disc mt-[-8rem]">
              <li className="font-light">Understanding Data Engineering;</li>
              <li className="font-light">Understanding Data Science;</li>
              <li className="font-light">Introduction to Python.</li>
            </ul>
          </section>
          {/* =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= */}
        </article>
      </div>
      {/* =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= */}
    </main>
  );
}
