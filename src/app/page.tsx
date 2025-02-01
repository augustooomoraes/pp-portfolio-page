import Image from "next/image";
import SocialButton, { links } from "./ui/components/social-button";
import ProfilePic from "@/../public/profile-pic/me2edit.jpg"

export default function Home() {
  return (
    <main>
      <div className="flex flex-col-reverse min-[840px]:flex-row flex-nowrap justify-between items-center gap-24">
        <section>
          <h1>Olá!</h1>
          {/* TODO: find out how word-spacing's handled on tailwind */}
          <HomeParagraph>
            Chamo-me Augusto, moro em São Francisco de Paula – RS, trabalho com
            {" "}
            <HomeBold>desenvolvimento web</HomeBold>
            {" "}
            e
            {" "}
            <HomeBold>diagramação editorial</HomeBold>.
          </HomeParagraph>
          <HomeParagraph>
            Procuro serviços onde poderia
            {" "}
            <HomeBold>aplicar, estender e aprofundar</HomeBold>
            {" "}
            meus conhecimentos e habilidades em geral. Estou
            {" "}
            <HomeBold>aberto a desafios</HomeBold>
            {" "}
            e interessado em aprender o que for necessário para entregar os melhores resultados.
          </HomeParagraph>
        </section>
        <Image
          width={280}
          height={280}
          className="rounded-full shadow-2xl"
          src={ProfilePic}
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

function HomeParagraph({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <p className="home-word-spacing">{children}</p>
}

function HomeBold({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <span className="font-extrabold">{children}</span>
}
