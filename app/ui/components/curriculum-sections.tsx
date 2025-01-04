import { IconType } from "react-icons";
import { FaGithub, FaInstagram, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { FaCakeCandles, FaFigma, FaWhatsapp } from "react-icons/fa6";
import { HiOutlineHandRaised } from "react-icons/hi2";
import { LuMail } from "react-icons/lu";
import { Aleo } from "next/font/google";
import classNames from "classnames";
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

// =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= //
// =x=x=x=x=x=x=x=x=x=x=  components //

export function SectionTitle( {title} : {title: string}) {
  return (
    <div className="grid grid-cols-[auto_1fr] items-center">
      <h2 className={aleo.className}>{title}</h2>
      <svg className="mb-h2 pl-[20rem] h-[3rem] w-full">
        <rect className="w-full h-full opacity-50 dark:fill-white"></rect>
      </svg>
    </div>
  )
}

export function Divisor() {
  return (
    <hr className="my-[10rem] max-w-[320rem] opacity-30 border-black light:border dark:border-white" />
  )
}

export function EducationSection(itemData: EducationItemType) {

  const { timeInterval, title, place } = itemData;

  return (
    <section className="mb-[36rem]">
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

export function LanguagesSection(itemData: LanguageItemType) {

  const { lang, level, info } = itemData;

  return (
    <>
      <p className="text-[21rem] font-medium dark:font-normal leading-[20rem]">
        {lang} <span className="italic font-light">({level})</span>
      </p>
      { info && <p className="mt-[-10rem] italic font-light dark:font-extralight text-[18rem]">{info}</p>}
    </>
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
