import { JSX } from "react";
import { IconType } from "react-icons";
import { FaGithub, FaInstagram, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { FaCakeCandles, FaFigma, FaWhatsapp } from "react-icons/fa6";
import { HiOutlineHandRaised } from "react-icons/hi2";
import { LuMail } from "react-icons/lu";

type ButtonType = {
  icon: IconType,
  url?: string,
  title: JSX.Element,
  active?: boolean,
}

export default function ContactLink(buttonData: ButtonType) {

  const { icon: Icon, url, title, active } = buttonData;
  let parsedUrl = url;
  let parsedActive = active;
  if ( url === undefined ) parsedUrl = "#";
  if ( active === undefined ) parsedActive = true;

  return (
    <div className="inline-grid grid-cols-[auto_1fr] items-center" key={url}>
      <a
        className={!parsedActive ? "pointer-events-none" : undefined}
        target={parsedActive ? "_blank" : undefined}
        href={parsedActive ? parsedUrl : undefined}
      >
        <div className="
          inline-grid grid-cols-[30px_auto]
          items-center
          text-text-primary dark:text-text-primaryDark
          hover:text-link-hover dark:hover:text-link-hoverDark
          decoration-inherit transition-none hover:transition-colors duration-300
          text-1.5xl
        ">
          <Icon className="justify-self-center" />
          <span className={`pl-5 ${parsedActive && "hover:underline"}`}>{title}</span>
        </div>
      </a>
      <div></div>
    </div>
  )
}

// =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= //

const now = new Date();
const birthDate = new Date('2000-04-14');

let age = now.getFullYear() - birthDate.getFullYear();
const monthDifference = now.getMonth() - birthDate.getMonth();
const dayDifference = now.getDate() - birthDate.getDate();

if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
  age--;
}

// =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= //

export const links: ButtonType[] = [
  {
    icon: HiOutlineHandRaised,
    title: <span>Augusto Cardoso de Moraes</span>,
    active: false,
  },
  {
    icon: FaCakeCandles,
    title: <span>14 de abril <span className="font-light">({age.toString()} anos)</span></span>,
    active: false,
  },
  {
    icon: FaMapMarkerAlt,
    title: <span>São Francisco de Paula – RS</span>,
    active: false,
  },
  {
    icon: FaWhatsapp,
    url: "https://wa.me/5554996803005",
    title: <span>+55 (54) 996 803 005</span>,
  },
  {
    icon: LuMail,
    url: "mailto:cdm.augusto@gmail.com",
    title: <span>cdm.augusto&shy;@gmail.com</span>,
  },
  {
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/augustocdm/",
    title: <span>in/augustocdm</span>,
  },
  {
    icon: FaInstagram,
    url: "https://www.instagram.com/augustooomoraes/",
    title: <span>@augustooo&shy;moraes</span>,
  },
  {
    icon: FaGithub,
    url: "https://github.com/augustooomoraes",
    title: <span>augustooo&shy;moraes</span>,
  },
  // {
  //   icon: FaFigma,
  //   url: "https://www.figma.com/@augustooomoraes",
  //   title: ">@augustooo&shy;moraes",
  // },
]
