import { HiOutlineHandRaised } from "react-icons/hi2";
// import { FaMapMarkerAlt } from "react-icons/fa";
import { FaCakeCandles } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
// import { FaFacebook } from "react-icons/fa6";
// import { FaXTwitter } from "react-icons/fa6"; // nem tenho
import { FaGithub } from "react-icons/fa6";
// import { BsSubstack } from "react-icons/bs";
// import { FaSpotify } from "react-icons/fa6";
// import { FaYoutube } from "react-icons/fa6";
// import { FaTwitch } from "react-icons/fa6";
// import { FaArtstation } from "react-icons/fa6";
// import { FaDeviantart } from "react-icons/fa6";
// import { FaPinterest } from "react-icons/fa6";
// import { FaCodepen } from "react-icons/fa6";
import { FaFigma } from "react-icons/fa6";

export const metadata = {
  title: "Contato",
};

export default function Page() {
  return (
    <main>
      <section>
        <h1>Contato</h1>
        <div className="grid gap-y-[6rem] items-center">
          {/* =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= */}
          <div className="inline-grid grid-cols-[auto_1fr] items-center">
            <a className="pointer-events-none">
              {" "}
              {/* inactive link */}
              <div className="inline-grid grid-cols-[30rem_auto] items-center">
                <HiOutlineHandRaised className="justify-self-center" />
                <span className="pl-[20rem]">Augusto Cardoso de Moraes</span>
              </div>
            </a>
            <div></div>
          </div>
          {/* =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= */}
          <div className="inline-grid grid-cols-[auto_1fr] items-center">
            <a className="pointer-events-none">
              {" "}
              {/* inactive link */}
              <div className="inline-grid grid-cols-[30rem_auto] items-center">
                <FaCakeCandles className="justify-self-center" />
                <span className="pl-[20rem]">
                  14 de abril <em>(23 anos)</em>
                </span>
              </div>
            </a>
            <div></div>
          </div>
          {/* =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= */}
          <div className="inline-grid grid-cols-[auto_1fr] items-center">
            <a target="_blank" href="https://wa.me/5554996166643">
              <div className="inline-grid grid-cols-[30rem_auto] items-center">
                <FaWhatsapp className="justify-self-center" />
                <span className="pl-[20rem]">+55 (54) 996 166 643</span>
              </div>
            </a>
            <div></div>
          </div>
          {/* =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= */}
          <div className="inline-grid grid-cols-[auto_1fr] items-center">
            <a href="mailto:cdm.augusto@gmail.com">
              <div className="inline-grid grid-cols-[30rem_auto] items-center">
                <LuMail className="justify-self-center" />
                <span className="pl-[20rem]">cdm.augusto@gmail.com</span>
              </div>
            </a>
            <div></div>
          </div>
          {/* =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= */}
          <div className="inline-grid grid-cols-[auto_1fr] items-center">
            <a target="_blank" href="https://www.linkedin.com/in/augustocdm/">
              <div className="inline-grid grid-cols-[30rem_auto] items-center">
                <FaLinkedin className="justify-self-center" />
                <span className="pl-[20rem]">in/augustocdm</span>
              </div>
            </a>
            <div></div>
          </div>
          {/* =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= */}
          <div className="inline-grid grid-cols-[auto_1fr] items-center">
            <a target="_blank" href="https://www.instagram.com/augustooomoraes/">
              <div className="inline-grid grid-cols-[30rem_auto] items-center">
                <FaInstagram className="justify-self-center" />
                <span className="pl-[20rem]">@augustooomoraes</span>
              </div>
            </a>
            <div></div>
          </div>
          {/* =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= */}
          <div className="inline-grid grid-cols-[auto_1fr] items-center">
            <a target="_blank" href="https://github.com/augustoomoraes">
              <div className="inline-grid grid-cols-[30rem_auto] items-center">
                <FaGithub className="justify-self-center" />
                <span className="pl-[20rem]">augustoomoraes</span>
              </div>
            </a>
            <div></div>
          </div>
          {/* =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= */}
          <div className="inline-grid grid-cols-[auto_1fr] items-center">
            <a target="_blank" href="https://www.figma.com/@augustomoraes">
              <div className="inline-grid grid-cols-[30rem_auto] items-center">
                <FaFigma className="justify-self-center" />
                <span className="pl-[20rem]">@augustomoraes</span>
              </div>
            </a>
            <div></div>
          </div>
          {/* =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= */}
        </div>
      </section>
    </main>
  );
}
