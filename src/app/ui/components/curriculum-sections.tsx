import { Aleo } from "next/font/google";
import classNames from "classnames";
import { JSX } from "react";
const aleo = Aleo({ subsets: ["latin"] });
import GitHubContributionCalendar, { ContributionCalendar } from "./github-contribution-calendar";
import githubContributionsLockeet from "@/app/data/github-contributions-lockeet.json";
const parsedGithubContributionsLockeet = githubContributionsLockeet.data.user.contributionsCollection.contributionCalendar

// =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= //
// =x=x=x=x=x=x=x=x=x=x=x=x=x= types //

type EducationItemType = {
  title: string,
  timeInterval: JSX.Element,
  place: string,
}

type HabilityItemType = JSX.Element[]

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
  githubCalendar?: ContributionCalendar,
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
      <svg className="mb-h2 pl-5 h-0.75 w-full">
        <rect className="w-full h-full opacity-50 text-inherit bg-inherit fill-text-primary dark:fill-text-primaryDark"></rect>
      </svg>
    </div>
  )
}

export function Divisor( {mb} : {mb?: string} ) {
  return <hr className={`
    ${ mb ? "mb-" + mb : "my-4" }
    max-w-[320px]
    opacity-30
    border-black dark:border-white
  `} />
}

export function EducationSection( index: number, itemData: EducationItemType ) {

  const { timeInterval, title, place } = itemData;

  return (
    <div key={index}>
      {index !== 0 && <Divisor />}
      <section className="mb-8">
        <h4 className={classNames(aleo.className, "mb-0")}>{title}</h4>
        <p className="font-light dark:font-extralight text-lg leading-6">
          {timeInterval}
        </p>
        <p className="-mt-4 -mb-5 font-medium">{place}</p>
      </section>
    </div>
  )
}

export function HabilitiesSection( index:number, itemsGroup: HabilityItemType ) {
  return (
    <div key={index}>
      {index !== 0 && <Divisor />}
      {itemsGroup.map( (item) => { return (
        <li className="dark:font-light text-1.2xl">{item}</li>
      )})}
    </div>
  )
}

export function LanguagesSection( index: number, itemData: LanguageItemType ) {

  const { lang, level, info } = itemData;

  return (
    <div key={index}>
      <p className="text-1.2xl font-medium dark:font-normal leading-7.5">
        {lang} <span className="italic font-light">({level})</span>
      </p>
      {info && <p className="-mt-2.5 italic font-light dark:font-extralight text-lg leading-3">{info}</p>}
    </div>
  )
}

export function ExperienceSection( index: number, itemData: ExperienceItemType ) {

  const { interval, place, role, items, githubCalendar } = itemData;

  return (
    <div key={index}>
      {index !== 0 && <Divisor mb="4.5" />}
      <div className="mb-4.5">
        <p className="text-lg font-light dark:font-extralight">{interval}</p>
        <p className="text-1.5xl font-normal -mt-5">{place}</p>
        <p className="text-2xl font-bold -mt-3">{role}</p>
        <ul className="list-inside list-disc -mt-2 space-y-0.5">
          {
            items.map( (item, index) => {
              return (
                <li key={index} className="dark:font-light text-1.2xl">{item}</li>
              )
            })
          }
        </ul>
      </div>
      {githubCalendar && <GitHubContributionCalendar calendarData={githubCalendar} />}
    </div>
  )
}

export function CoursesSection( index: number, itemData: CourseItemType ) {

  const { interval, place, location, discipline, paragraph, items } = itemData;

  return (
    <div key={index}>
      {index !== 0 && <Divisor mb="4.5"/>}
      <section className="mb-4.5">
        <p className="text-lg font-light dark:font-extralight">{interval}</p>
        <p className="text-1.5xl font-normal -mt-5">
          <span className="font-bold dark:font-semibold">{place}</span>
          {" – "}
          <span className="font-light dark:font-extralight">{location}</span>
        </p>
        <p className="text-2xl font-bold -mt-2.5 leading-7.5">{discipline}</p>
        {
          paragraph && 
          <p className="dark:font-light -mt-2.5 text-1.2xl leading-7">{paragraph}</p>
        }
        {
          items &&
          <ul className="list-inside list-disc -mt-1.5  space-y-0.5">
            {
              items.map( (item, index) => {
                return (
                  <li key={index} className="dark:font-light text-1.2xl">{item}</li>
                )
              })
            }
          </ul>
        }
      </section>
    </div>
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

export const habilityItems: HabilityItemType[]= [
  [
    <>Excel, Power BI, Report Builder</>,
    <>Power Automate</>,
  ],
  [
    <>Photoshop, Illustrator, InDesign</>,
    <>Blender</>,
  ],
  [
    <>React, Next.js</>,
    <>Tailwind CSS</>,
    <>GitHub</>,
  ],
  [
    <>Docker <span className="font-extralight dark:!font-thin">(conteinerização e instanciação)</span></>,
    <>Azure <span className="font-extralight dark:!font-thin">(gerenciamento de VMs)</span></>,
  ],
  [
    <>Keycloak</>,
    <>Stripe <span className="font-extralight dark:!font-thin">(para assinaturas de SaaS)</span></>,
    <>Integração de APIs</>,
    <>OpenAI <span className="font-extralight dark:!font-thin">(integração, prompting)</span></>,
  ],
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
    interval: "jan.2021 – set.2023",
    place: "Persol Indústria e Comércio de Persianas e Cortinas Ltda",
    role: "Assistente Administrativo",
    items: [
      <>Manutenção de dados do sistema interno de produção e gestão;</>,
      <>
        Desenvolvimento de tabelas de preço por
        {" "}
        <span className="font-bold dark:font-semibold">Excel</span>
        ;
      </>,
      <>
        Elaboração de fichas técnicas de produtos com
        {" "}
        <span className="font-bold dark:font-semibold">Photoshop</span>
        ,
        {" "}
        <span className="font-bold dark:font-semibold">Illustrator</span>
        {" "}
        e
        {" "}
        <span className="font-bold dark:font-semibold">InDesign</span>
        ;
      </>,
      <>
        Produção de modelos tridimensionais de produtos com
        {" "}
        <span className="font-bold dark:font-semibold">Blender</span>
        ;
      </>,
      <>
        Tratamento e relacionamento de dados, elaboração de relatórios e dashboards com
        {" "}
        <span className="font-bold dark:font-semibold">Power BI Desktop</span>
        {" "}
        e
        {" "}
        <span className="font-bold dark:font-semibold">Power BI Report Builder</span>
        ;
      </>,        
      <>
        Automação de envios de relatórios por e-mail com
        {" "}
        <span className="font-bold dark:font-semibold">Power Automate</span>,
        {" "}
        <span className="font-bold dark:font-semibold">Outlook</span>
        {" "}
        e
        {" "}
        <span className="font-bold dark:font-semibold">OneDrive</span>
        .
      </>,
    ],
  },
  {
    interval: "jan.2024 – dez.2024",
    place: "Lockeet",
    role: "Analista de cibersegurança, desenvolvedor fullstack",
    items: [
      <>Estudo de protocolos de segurança;</>,
      <>
        Customização e conteinerização de instâncias de
        {" "}
        <span className="font-bold dark:font-semibold">Keycloak</span>
        ;
      </>,
      <>
        Gerenciamento de máquinas virtuais pelo
        {" "}
        <span className="font-bold dark:font-semibold">Microsoft Azure</span>
        ;
      </>,
      <>
        Desenvolvimento de aplicações – especialmente do SaaS
        {" "}
        <a
          target="_blank"
          href="https://briggs.lockeet.com/"
          className="font-bold dark:font-semibold hover:underline"
        >
          BRIGGS
        </a>
        :
        <ul className="list-inside list-disc ml-4 space-y-0.5">
          <li className="dark:font-light text-1.2xl">desenvolvimento fullstack com Nextjs;</li>
          <li className="dark:font-light text-1.2xl">
            integração com
            {" "}
            <span className="font-bold dark:font-semibold">Stripe</span>
            {" "}
            para configuração de assinaturas recorrentes;
          </li>
          <li className="dark:font-light text-1.2xl">integração com APIs;</li>
          <li className="dark:font-light text-1.2xl">
            implementação de ferramentas de IA com
            {" "}
            <span className="font-bold dark:font-semibold">OpenAI</span>
            ;
          </li>
          <li className="dark:font-light text-1.2xl">gerenciamento de repositório.</li>
        </ul>
      </>,
    ],
    githubCalendar: parsedGithubContributionsLockeet,
  },
  {
    interval: "jan.2016 – atualmente",
    place: "Autônomo",
    role: "Freelancer",
    items: [
      <>
        Produção de
        {" "}
        <span className="font-bold dark:font-semibold">estampas</span>
        {" "}
        para roupas e acessórios e de
        {" "}
        <span className="font-bold dark:font-semibold">materiais de divulgação</span>
        ;
      </>,
      <>
        Produção de
        {" "}
        <span className="font-bold dark:font-semibold">logotipos</span>
        {" "}
        e edição de
        {" "}
        <span className="font-bold dark:font-semibold">fotografias e imagens</span>
        {" "}
        de produtos para catálogos virtuais;
      </>,
      <>
        Edição de
        {" "}
        <span className="font-bold dark:font-semibold">vídeo</span>
        {" "}
        para aulas virtuais;
      </>,
      <>
        Elaboração de projetos para
        {" "}
        <span className="font-bold dark:font-semibold">móveis e decoração</span>
        .
      </>,
      <>
        Serviços gerais em
        {" "}
        <span className="font-bold dark:font-semibold">reparos domésticos</span>
        {" "}
        e
        {" "}
        <span className="font-bold dark:font-semibold">construções simples</span>
        .
      </>,
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
