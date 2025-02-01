import { Github, Globe, Instagram, Linkedin } from "lucide-react";

import { FaGlobe, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa6";

export default function AppFooter() {

  return (
    <>
      <div className="h-full" />
      <footer className="
        bg-surface-hoverDark
        py-10 px-2 mt-12
        flex flex-col sm:flex-row items-center justify-around
      ">
        {/* mt-24 sm:mt-40 */}

        <div className="
          w-full flex flex-col sm:flex-row justify-around
          sm:mx-8
          gap-5 xl:gap-2
        ">
          <TextColumn>
            <a
              href="/"
              className="flex flex-row items-center gap-3 hover:text-linkHover active:text-linkActive hover:underline active:underline"
            >
              <FaGlobe className="w-5 h-5"/>
              augustooomoraes.com
            </a>
          </TextColumn>

          <TextColumn>
            <div className="flex flex-row gap-4">

              <a
                target="_blank"
                href="https://www.linkedin.com/in/augustocdm/"
                className="hover:text-linkHover active:text-linkActive"
              >
                <FaLinkedin className="w-5 h-5"/>
              </a>

              {/* TODO: link this repo's page (when it's public... if that's gonna happen) */}
              <a
                target="_blank"
                href="https://github.com/augustooomoraes"
                className="hover:text-linkHover active:text-linkActive"
              >
                <FaGithub className="w-5 h-5"/>
              </a>

              <a
                target="_blank"
                href="https://www.instagram.com/augustooomoraes/"
                className="hover:text-linkHover active:text-linkActive"
              >
                <FaInstagram className="w-5 h-5"/>
              </a>

            </div>
          </TextColumn>
        </div>
      </footer>
    </>
  );
}

function TextColumn({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full px-4 gap-3 text-center flex flex-row items-center justify-center ">
      {children}
    </div>
  )
}