import classNames from "classnames";

import { Nunito_Sans } from "next/font/google";
import { Aleo } from "next/font/google";
import { Divisor, educationItems, EducationSection, HabilitiesSection, habilityItems, languageItems, LanguagesSection, SectionTitle } from "../ui/components/curriculum-sections";
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

        <article className="mb-[70rem]">
          <SectionTitle title="Educação" />
          {
            educationItems.map( (item, index) => {
              return (
                <>
                  {index !== 0 && <Divisor />}
                  {EducationSection(item)}
                </>
              )
            })
          }
        </article>

        <article className="mb-[36rem]">
          <SectionTitle title="Habilidades" />
          <ul className="list-inside list-disc ">
            {
              habilityItems.map( (item, index) => {
                return (
                  <>
                    {index !== 0 && <Divisor />}
                    {HabilitiesSection(item)}
                  </>
                )
              })
            }
          </ul>
        </article>

        <article className="mb-[36rem]">
          <SectionTitle title="Idiomas" />
          {
            languageItems.map( item => LanguagesSection(item))
          }
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
              <rect className="w-full h-full opacity-50 dark:fill-white"></rect>
            </svg>
          </div>
          {/* =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= */}
          <div className="mb-[18rem]">
            <p className="text-[18rem] font-light dark:font-extralight">jan.2021 – set.2023</p>
            <p className="text-[22rem] font-normal mt-[-20rem]">Persol Indústria e Comércio de Persianas e Cortinas Ltda</p>
            <p className="text-[26rem] font-bold mt-[-12rem]">Assistente Administrativo</p>
            <ul className="list-inside list-disc mt-[-8rem]">
              <li className="dark:font-light">Manutenção de dados do sistema interno de produção e gestão;</li>
              <li className="dark:font-light">
                Desenvolvimento de tabelas de preço por <span className="font-bold dark:font-semibold">Excel</span>;
              </li>
              <li className="dark:font-light">
                Elaboração de fichas técnicas de produtos com <span className="font-bold dark:font-semibold">Photoshop</span>, <span className="font-bold dark:font-semibold">Illustrator</span> e <span className="font-bold dark:font-semibold">InDesign</span>;
              </li>
              <li className="dark:font-light">
                Produção de modelos tridimensionais de produtos com <span className="font-bold dark:font-semibold">Blender</span>;
              </li>
              <li className="dark:font-light">
                Tratamento e relacionamento de dados, elaboração de relatórios e dashboards com <span className="font-bold dark:font-semibold">Power BI Desktop</span> e <span className="font-bold dark:font-semibold">Power BI Report Builder</span>;
              </li>
              <li className="dark:font-light">
                Automação de envios de relatórios por e-mail com <span className="font-bold dark:font-semibold">Power Automate</span>, <span className="font-bold dark:font-semibold">Outlook</span> e <span className="font-bold dark:font-semibold">OneDrive</span>.
              </li>
            </ul>
          </div>
          {/* =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= */}
          <hr className="mb-[18rem] max-w-[320rem] opacity-30 border-black light:border dark:border-white"></hr>
          <div className="mb-[36rem]">
            <p className="text-[18rem] font-light dark:font-extralight">jan.2016 – atualmente</p>
            <p className="text-[22rem] font-normal mt-[-20rem]">Autônomo</p>
            <p className="text-[26rem] font-bold mt-[-12rem]">Freelancer</p>
            <ul className="list-inside list-disc mt-[-8rem]">
              <li className="dark:font-light">
                Produção de <span className="font-bold dark:font-semibold">estampas</span> para roupas e acessórios e de <span className="font-bold dark:font-semibold">materiais de divulgação</span>;
              </li>
              <li className="dark:font-light">
                Produção de <span className="font-bold dark:font-semibold">logotipos</span> e edição de <span className="font-bold dark:font-semibold">fotografias e imagens</span> de produtos para catálogos virtuais;
              </li>
              <li className="dark:font-light">
                Edição de <span className="font-bold dark:font-semibold">vídeo</span> para aulas virtuais;
              </li>
              <li className="dark:font-light">
                Elaboração de projetos para <span className="font-bold dark:font-semibold">móveis e decoração</span>.
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
              <rect className="w-full h-full opacity-50 dark:fill-white"></rect>
            </svg>
          </div>
          {/* =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= */}
          <section className="mb-[18rem]">
            <p className="text-[18rem] font-light dark:font-extralight">mai.2023 – jul.2023</p>
            <p className="text-[22rem] font-normal mt-[-20rem]">
              <span className="font-bold dark:font-semibold">Instituto Caldeira</span>
              <span className="font-light dark:font-extralight"> – Porto Alegre, RS</span>
            </p>
            <p className="text-[26rem] font-bold mt-[-10rem] leading-[30rem]">Programa Nova Geração – trilha de programação</p>
            <p className="dark:font-light">
              Cursos de <span className="font-bold dark:font-semibold">Javascript</span>, <span className="font-bold dark:font-semibold">HTML</span>, <span className="font-bold dark:font-semibold">Git</span>, <span className="font-bold dark:font-semibold">Github</span> e <span className="font-bold dark:font-semibold">Java</span> pela Alura Cursos Online de Tecnologia.
            </p>
          </section>
          {/* =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= */}
          <hr className="mb-[18rem] max-w-[320rem] opacity-30 border-black light:border dark:border-white"></hr>
          <section className="mb-[18rem]">
            <p className="text-[18rem] font-light dark:font-extralight">jan.2022 – atualmente</p>
            <p className="text-[22rem] font-normal mt-[-20rem]">
              <span className="font-bold dark:font-semibold">freeCodeCamp</span>
              <span className="font-light dark:font-extralight"> – remoto</span>
            </p>
            <p className="text-[26rem] font-bold mt-[-10rem] leading-[30rem]">Cursos de programação</p>
            <ul className="list-inside list-disc mt-[-8rem]">
              <li className="dark:font-light">Responsive Web Design;</li>
              <li className="dark:font-light">Javascript Algorithms and Data Structures;</li>
              <li className="dark:font-light">Relational Databases.</li>
            </ul>
          </section>
          {/* =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= */}
          <hr className="mb-[18rem] max-w-[320rem] opacity-30 border-black light:border dark:border-white"></hr>
          <section className="mb-[36rem]">
            <p className="text-[18rem] font-light dark:font-extralight">jan.2023</p>
            <p className="text-[22rem] font-normal mt-[-20rem]">
              <span className="font-bold dark:font-semibold">DataCamp</span>
              <span className="font-light dark:font-extralight"> – remoto</span>
            </p>
            <p className="text-[26rem] font-bold mt-[-10rem] leading-[30rem]">Cursos de ciências de dados</p>
            <ul className="list-inside list-disc mt-[-8rem]">
              <li className="dark:font-light">Understanding Data Engineering;</li>
              <li className="dark:font-light">Understanding Data Science;</li>
              <li className="dark:font-light">Introduction to Python.</li>
            </ul>
          </section>
          {/* =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= */}
        </article>
      </div>
      {/* =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= */}
    </main>
  );
}
