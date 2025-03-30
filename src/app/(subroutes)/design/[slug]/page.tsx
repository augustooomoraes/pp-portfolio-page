import { notFound } from "next/navigation";
import Image from "next/image";

import { Nunito_Sans } from "next/font/google";
import { Aleo } from "next/font/google";
const nunito_sans = Nunito_Sans({ subsets: ["latin"] });
const aleo = Aleo({ subsets: ["latin"], style: ["normal", "italic"] });

import brandProjects from "@/app/data/design-brand.json";
import classNames from "classnames";

export default function DesignDetail({ params }: { params: { slug: string } }) {
  const project = brandProjects.find((item) => item.url === params.slug);

  if (!project) return notFound();

  return (
    <main className={classNames(nunito_sans.className, "space-y-12")}>

      <div className="flex flex-col gap-6">
        {project.images?.map((image, index) =>
          // <div className="max-w-3xl">
            <Image
              key={index}
              src={image}
              alt={`${project.title} – ${index + 1}}`}
              className="rounded-lg"
              width={1000}
              height={0}
              layout="responsive"
              // style={{
              //   objectFit: "contain",
              //   maxWidth: "100%",
              //   maxHeight: "100%",
              // }}
            />
          // </div>
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
