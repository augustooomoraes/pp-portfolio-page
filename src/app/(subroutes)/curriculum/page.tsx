import classNames from "classnames";

import { Nunito_Sans } from "next/font/google";
import { coursesItems, CoursesSection, Divisor, educationItems, EducationSection, experienceItems, ExperienceSection, HabilitiesSection, habilityItems, languageItems, LanguagesSection, SectionTitle } from "../../ui/components/curriculum-sections";
const nunito_sans = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Currículo",
};

export default function Page() {
  return (
    <main className={classNames(nunito_sans.className, "grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[400px_minmax(0,1fr)] lg:gap-x-5")}>

      <div> {/* Primeira coluna */}

        <article className="mb-16">
          <SectionTitle title="Educação" />
          {educationItems.map( (item, index) => EducationSection(index, item) )}
        </article>

        <article className="mb-9">
          <SectionTitle title="Habilidades" />
          <ul className="list-inside list-disc ">
            {habilityItems.map( (item, index) => HabilitiesSection(index, item) )}
          </ul>
        </article>

        <article className="mb-9">
          <SectionTitle title="Idiomas" />
          {languageItems.map( (item, index) => LanguagesSection(index, item) )}
        </article>

      </div>

      <div> {/* segunda coluna */}

        <article className="mb-9">
          <SectionTitle title="Experiência" />
          {experienceItems.map( (item, index) => ExperienceSection(index, item) )}
        </article>

        <article className="mb-9">
          <SectionTitle title="Cursos" />
          {coursesItems.map( (item, index) => CoursesSection(index, item) )}
        </article>
      </div>
      {/* =x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x=x= */}
    </main>
  );
}
