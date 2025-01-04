import classNames from "classnames";

import { Nunito_Sans } from "next/font/google";
import { coursesItems, CoursesSection, Divisor, educationItems, EducationSection, experienceItems, ExperienceSection, HabilitiesSection, habilityItems, languageItems, LanguagesSection, SectionTitle } from "../ui/components/curriculum-sections";
const nunito_sans = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Currículo",
};

export default function Page() {
  return (
    <main className={classNames(nunito_sans.className, "grid grid-cols-[1fr] lg:grid-cols-[400px_1fr] lg:gap-x-[20px]")}>

      <div> {/* Primeira coluna */}

        <article className="mb-[70rem]">
          <SectionTitle title="Educação" />
          {
            educationItems.map( (item, index) => {
              return (
                <>
                  {index !== 0 && <Divisor />}
                  {EducationSection(item)}
                </>
              )
            })
          }
        </article>

        <article className="mb-[36rem]">
          <SectionTitle title="Habilidades" />
          <ul className="list-inside list-disc ">
            {
              habilityItems.map( (item, index) => {
                return (
                  <>
                    {index !== 0 && <Divisor />}
                    {HabilitiesSection(item)}
                  </>
                )
              })
            }
          </ul>
        </article>

        <article className="mb-[36rem]">
          <SectionTitle title="Idiomas" />
          {
            languageItems.map( item => LanguagesSection(item))
          }
        </article>

      </div>

      <div> {/* segunda coluna */}

        <article className="mb-[36rem]">
          <SectionTitle title="Experiência" />
          {
            experienceItems.map( (item, index) => {
              return (
                <>
                  {index !== 0 && <Divisor />}
                  {ExperienceSection(item)}
                </>
              )
            })
          }
        </article>

        <article className="mb-[36rem]">
          <SectionTitle title="Cursos" />
          {
            coursesItems.map( (item, index) => {
              return (
                <>
                  {index !== 0 && <Divisor mb="18"/>}
                  {CoursesSection(item)}
                </>
              )
            })
          }
        </article>
      </div>
      {/* =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= */}
    </main>
  );
}
