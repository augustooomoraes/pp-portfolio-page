import { notFound } from "next/navigation";
import Image from "next/image";

import { Nunito_Sans } from "next/font/google";
const nunito_sans = Nunito_Sans({ subsets: ["latin"] });

import brandProjects from "@/app/data/design-brand.json";
import classNames from "classnames";

export async function generateStaticParams() {
  return brandProjects.map((item) => ({ slug: item.url }));
}

export default async function DesignDetail({ params }: { params: Promise<{ slug: string }>}) {
  const { slug } = await params;
  const project = brandProjects.find((item) => item.url === slug);

  if (!project) return notFound();

  return (
    <main className={classNames(nunito_sans.className, "space-y-12")}>

      <div className="flex flex-col gap-6">
        {project.images?.map((image, index) =>
          <Image
            key={index}
            src={image}
            alt={`${project.title} – ${index + 1}}`}
            className="rounded-lg"
            width={1000}
            height={0}
            layout="responsive"
          />
        )}
      </div>

      <div>
        <h1 className="text-4xl md:text-5xl font-bold mb-0">{project.title}</h1>
        {project.subtitle && <span className="
          block text-text-secondary dark:text-text-secondaryDark
          text-2.2xl md:text-3xl
          -mt-0.5 md:mt-0.5
        ">{project.subtitle}</span>}
        {project.date && <span className="
          block text-text-secondary dark:text-text-secondaryDark
          text-1.2xl md:text-1.5xl
          mt-1.5
          opacity-90
        ">{project.date}</span>}

        <div className="mt-4 md:mt-6 !space-y-1.5 max-w-prose">
          {project.description?.map((desc, index) => (
            <p key={index} className="text-xl md:text-1.2xl !my-0 leading-snug">{desc}</p>
          ))}
        </div>
      </div>

    </main>
  );
}
