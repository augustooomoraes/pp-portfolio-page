import { Aleo } from "next/font/google";
import classNames from "classnames";
import { JSX } from "react";
const aleo = Aleo({ subsets: ["latin"] });

// =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= //
// =x=x=x=x=x=x=x=x=x=x=x=x=x= types //

type EducationItemType = {
  title: string,
  timeInterval: JSX.Element,
  place: string,
}

type LanguageItemType = {
  lang: string,
  level: string,
  info?: string,
}

type ExperienceItemType = {
  interval: string,
  place: string,
  role: string,
  items: JSX.Element[],
}

type CourseItemType = {
  interval: string,
  place: string,
  location: string,
  discipline: string,
  paragraph?: JSX.Element,
  items?: string[],
}

// =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= //
// =x=x=x=x=x=x=x=x=x=x=  components //

export function SectionTitle( {title} : {title: string} ) {
  return (
    <div className="grid grid-cols-[auto_1fr] items-center">
      <h2 className={aleo.className}>{title}</h2>
      <svg className="mb-h2 pl-[20rem] h-[3rem] w-full">
        <rect className="w-full h-full opacity-50 text-inherit bg-inherit fill-text-primary dark:fill-text-primaryDark"></rect>
      </svg>
    </div>
  )
}

export function Divisor({
  index,
  mb,
} : {
  index: number,
  mb?: string,
} ) {
  return (
    <hr key={index} className={`${ mb ? "mb-[" + mb + "rem]" : "my-[10rem]" } max-w-[320rem] opacity-30 border-black dark:border-white`} />
  )
}

export function EducationSection( index: number, itemData: EducationItemType ) {

  const { timeInterval, title, place } = itemData;

  return (
    <section className="mb-[36rem]" key={index}>
      <h4 className={classNames(aleo.className, "mb-0")}>{title}</h4>
      <p className="font-light dark:font-extralight text-[18rem] leading-[22rem]">
        {timeInterval}
      </p>
      <p className="mt-[-16rem] mb-[-20rem] font-medium">{place}</p>
    </section>
  )
}

export function HabilitiesSection( items: string[] ) {
  return (
    items.map( (item, index) => { return (
      <li key={index} className="dark:font-light text-[21rem]">{item}</li>
    )})
  )
}

export function LanguagesSection( index: number, itemData: LanguageItemType ) {

  const { lang, level, info } = itemData;

  return (
    <div key={index}>
      <p className="text-[21rem] font-medium dark:font-normal leading-[20rem]">
        {lang} <span className="italic font-light">({level})</span>
      </p>
      { info && <p className="mt-[-10rem] italic font-light dark:font-extralight text-[18rem]">{info}</p>}
    </div>
  )
}

export function ExperienceSection( index: number, itemData: ExperienceItemType ) {

  const { interval, place, role, items } = itemData;

  return (
    <div key={index} className="mb-[18rem]">
      <p className="text-[18rem] font-light dark:font-extralight">{interval}</p>
      <p className="text-[22rem] font-normal mt-[-20rem]">{place}</p>
      <p className="text-[26rem] font-bold mt-[-12rem]">{role}</p>
      <ul className="list-inside list-disc mt-[-8rem]">
        {
          items.map( (item, index) => {
            return (
              <li key={index} className="dark:font-light">{item}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export function CoursesSection( index: number, itemData: CourseItemType ) {

  const { interval, place, location, discipline, paragraph, items } = itemData;

  return (
    <section className="mb-[18rem]" key={index}>
      <p className="text-[18rem] font-light dark:font-extralight">{interval}</p>
      <p className="text-[22rem] font-normal mt-[-20rem]">
        <span className="font-bold dark:font-semibold">{place}</span>
        {" – "}
        <span className="font-light dark:font-extralight">{location}</span>
      </p>
      <p className="text-[26rem] font-bold mt-[-10rem] leading-[30rem]">{discipline}</p>
      {
        paragraph && 
        <p className="dark:font-light">{paragraph}</p>
      }
      {
        items &&
        <ul className="list-inside list-disc mt-[-8rem]">
          {
            items.map( (item, index) => {
              return (
                <li key={index} className="dark:font-light">{item}</li>
              )
            })
          }
        </ul>
      }
    </section>
  )
}

// =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= //
// =x=x=x=x=x=x=x=x=x=x=x=x=x=  data //

export const educationItems: EducationItemType[] = [
  {
    title: "Design",
    timeInterval: <span>jan.2018 – dez.2018 <span className="italic">(incompleto)</span></span>,
    place: "Universidade de Caxias do Sul",
  },
  {
    title: "Criação Digital",
    timeInterval: <span>jul.2019 – dez.2020 <span className="italic">(incompleto)</span></span>,
    place: "Universidade de Caxias do Sul",
  },
]

export const habilityItems = [
  [
    "Excel, Power BI, Report Builder",
    "Power Automate",
  ],
  [
    "Photoshop, Illustrator, InDesign",
    "Blender",
  ],
  [
    "React, Next.js",
    "Tailwind CSS",
    "GitHub",
  ]
]

export const languageItems: LanguageItemType[] = [
  {
    lang: "Português",
    level: "nativo",
  },
  {
    lang: "Inglês",
    level: "avançado",
    info: "College Yes Cultural (2013–2018)",
  },
]

export const experienceItems: ExperienceItemType[] = [
  {
    interval: "jan.2016 – atualmente",
    place: "Autônomo",
    role: "Freelancer",
    items: [
      <span>Manutenção de dados do sistema interno de produção e gestão;</span>,
      <span>Desenvolvimento de tabelas de preço por <span className="font-bold dark:font-semibold">Excel</span>;</span>,
      <span>Elaboração de fichas técnicas de produtos com <span className="font-bold dark:font-semibold">Photoshop</span>, <span className="font-bold dark:font-semibold">Illustrator</span> e <span className="font-bold dark:font-semibold">InDesign</span>;</span>,
      <span>Produção de modelos tridimensionais de produtos com <span className="font-bold dark:font-semibold">Blender</span>;</span>,
      <span>Tratamento e relacionamento de dados, elaboração de relatórios e dashboards com <span className="font-bold dark:font-semibold">Power BI Desktop</span> e <span className="font-bold dark:font-semibold">Power BI Report Builder</span>;</span>,        
      <span>Automação de envios de relatórios por e-mail com <span className="font-bold dark:font-semibold">Power Automate</span>, <span className="font-bold dark:font-semibold">Outlook</span> e <span className="font-bold dark:font-semibold">OneDrive</span>.</span>,
    ],
  },
  {
    interval: "jan.2016 – atualmente",
    place: "Autônomo",
    role: "Freelancer",
    items: [
      <span>Produção de <span className="font-bold dark:font-semibold">estampas</span> para roupas e acessórios e de <span className="font-bold dark:font-semibold">materiais de divulgação</span>;</span>,
      <span>Produção de <span className="font-bold dark:font-semibold">logotipos</span> e edição de <span className="font-bold dark:font-semibold">fotografias e imagens</span> de produtos para catálogos virtuais;</span>,
      <span>Edição de <span className="font-bold dark:font-semibold">vídeo</span> para aulas virtuais;</span>,
      <span>Elaboração de projetos para <span className="font-bold dark:font-semibold">móveis e decoração</span>.</span>,
    ],
  },
]

export const coursesItems: CourseItemType[] = [
  {
    interval: "mai.2023 – jul.2023",
    place: "Instituto Caldeira",
    location: "Porto Alegre, RS",
    discipline: "Programa Nova Geração – trilha de programação",
    paragraph: <span>Cursos de <span className="font-bold dark:font-semibold">Javascript</span>, <span className="font-bold dark:font-semibold">HTML</span>, <span className="font-bold dark:font-semibold">Git</span>, <span className="font-bold dark:font-semibold">Github</span> e <span className="font-bold dark:font-semibold">Java</span> pela Alura Cursos Online de Tecnologia.</span>,
  },
  {
    interval: "jan.2022 – dez.2023",
    place: "freeCodeCamp",
    location: "remoto",
    discipline: "Cursos de programação",
    items: [
      "Responsive Web Design;",
      "Javascript Algorithms and Data Structures;",
      "Relational Databases.",
    ],
  },
  {
    interval: "jan.2023",
    place: "DataCamp",
    location: "remoto",
    discipline: "Cursos de ciências de dados",
    items: [
      "Understanding Data Engineering;",
      "Understanding Data Science;",
      "Introduction to Python.",
    ],
  },
]
