import Image from "next/image";
import SocialButton, { links } from "./ui/components/social-button";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col-reverse min-[840px]:flex-row flex-nowrap justify-between items-center gap-24">
        <section>
          <h1>Olá!</h1>
          {/* TODO: find out how word-spacing's handled on tailwind */}
          <p className="home-word-spacing dark:tracking-notThatWide dark:font-light">
            Chamo-me Augusto, moro em São Francisco de Paula – RS e trabalho com <span className="font-extrabold dark:font-semibold">programação e desenvolvimento web</span>.
          </p>
          <p className="home-word-spacing dark:tracking-notThatWide dark:font-light">
            Procuro empregos onde poderia <span className="font-extrabold dark:font-semibold">estender e aprofundar meus conhecimentos e habilidades</span> na área de desenvolvimento e programação em geral, com profissionais mais experientes e qualificados. Estou <span className="font-extrabold dark:font-semibold">aberto a desafios</span> e interessado em aprender o que for necessário para progredir profissionalmente e me inserir nesta área de atuação.
          </p>
        </section>
        <Image
          width={280}
          height={280}
          className="rounded-full shadow-[15px_15px_15px_0_rgba(0,0,0,0.2)]"
          src={"/me0.jpg"}
          alt=""
        />
      </div>
      {/* TODO: my-header1 should do the job... */}
      <div className="my-12 flex flex-col md:flex-row flex-nowrap gap-5">
        { links.map( link => { return SocialButton(link) } ) }
      </div>
    </main>
  );
}
