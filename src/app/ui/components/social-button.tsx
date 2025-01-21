import { IconType } from "react-icons";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

type ButtonType = {
  icon: IconType,
  url: string,
  title: string,
}

export default function SocialButton(buttonData: ButtonType) {

  const { icon: Icon, url, title } = buttonData;

  return (
    <div className="bg-surface-secondary rounded-md shadow-lg w-max">
      <a
        className="
          flex flex-row flex-nowrap items-center gap-4.5
          py-4 pr-6 pl-4.5 rounded-md
          transition-colors duration-300
          hover:bg-surface-hover
        "
        target="_blank"
        href={url}
      >
        <Icon />
        <span>{title}</span>
      </a>
    </div>
  )
}

export const links: ButtonType[] = [
  {
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/augustocdm/",
    title: "LinkedIn"
  },
  {
    icon: FaGithub,
    url: "https://github.com/augustooomoraes",
    title: "GitHub"
  },
  {
    icon: FaInstagram,
    url: "https://www.instagram.com/augustooomoraes/",
    title: "Instagram"
  },
]
