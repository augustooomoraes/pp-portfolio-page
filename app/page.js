import Image from "next/image";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export const metadata = {
  openGraph: {
    title: "Augusto Moraes",
    description: "Portfólio e informações sobre este cujo nome a página intitula.",
    // url: "https://www.augustooomoraes.com/",
    url: "https://staging-augustooomoraes.vercel.app/",
    type: "website",
    image: "https://staging-augustooomoraes.vercel.app/_next/image?url=%2Fopengraph-image.png&w=640&q=75",
  },
};

export default function Home() {
  return (
    <main>
      <div className="flex flex-col-reverse min-[840px]:flex-row flex-nowrap justify-between items-center gap-[90px]">
        <section>
          <h1>Olá!</h1>
          <p className="home-word-spacing dark:tracking-[0.4rem] dark:font-light">
            Chamo-me Augusto, moro em Caxias do Sul – RS e estudo <span className="font-extrabold dark:font-semibold">programação e desenvolvimento web</span> pela internet.
          </p>
          <p className="home-word-spacing dark:tracking-[0.4rem] dark:font-light">
            Procuro empregos onde poderia mais eficientemente <span className="font-extrabold dark:font-semibold">estender e aprofundar meus conhecimentos e habilidades</span> na área de desenvolvimento e programação em geral, com profissionais mais experientes e qualificados. Estou <span className="font-extrabold dark:font-semibold">aberto a desafios</span> e interessado em aprender o que for necessário para progredir profissionalmente e me inserir nesta área de atuação.
          </p>
        </section>
        <Image width={280} height={280} className="rounded-full shadow-[15px_15px_15px_0_rgba(0,0,0,0.2)]" src={"/me0.jpg"} alt="" />
      </div>
      <div className="home-link-list flex flex-col md:flex-row flex-nowrap gap-[20px]">
        <div className="home-link-container">
          <a className="home-link" target="_blank" href="https://www.linkedin.com/in/augustocdm/">
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
        </div>
        <div className="home-link-container">
          <a className="home-link" target="_blank" href="https://github.com/augustooomoraes">
            <FaGithub />
            <span>GitHub</span>
          </a>
        </div>
        <div className="home-link-container">
          <a className="home-link" target="_blank" href="https://www.instagram.com/augustooomoraes/">
            <FaInstagram />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </main>
  );
}
