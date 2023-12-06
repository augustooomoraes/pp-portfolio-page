import Image from "next/image";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <div className="flex flex-row flex-nowrap justify-between items-center gap-[90px]">
        <section>
          <h1>Olá!</h1>
          <p className="home-word-spacing text-light tracking-[0.4rem]">
            Chamo-me Augusto, moro em Caxias do Sul – RS e estudo <strong>programação e desenvolvimento web</strong> pela internet.
          </p>
          <p className="text-light tracking-[0.4rem] word-spacing-home">
            Procuro empregos onde poderia mais eficientemente <strong>estender e aprofundar meus conhecimentos e habilidades</strong> na área de desenvolvimento e programação em geral, com profissionais mais experientes e qualificados. Estou <strong>aberto a desafios</strong> e interessado em aprender o que for necessário para progredir profissionalmente e me inserir nesta área de atuação.
          </p>
        </section>
        <Image width={280} height={280} className="rounded-full shadow-[15px_15px_15px_0_rgba(0,0,0,0.2)]" src={"/me0.jpg"} alt="" />
      </div>
      <div className="home-link-list flex flex-row flex-nowrap gap-[20px]">
        <a className="home-link" target="_blank" href="https://www.linkedin.com/in/augustocdm/">
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>
        <a className="home-link" target="_blank" href="https://github.com/augustoomoraes">
          <FaGithub />
          <span>GitHub</span>
        </a>
        <a className="home-link" target="_blank" href="https://www.instagram.com/augustooomoraes/">
          <FaInstagram />
          <span>Instagram</span>
        </a>
      </div>
    </main>
  );
}
