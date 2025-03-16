import { Button } from "@/shadcnui/components/ui/button"
import { Card, CardContent, CardFooter } from "@/shadcnui/components/ui/card"
import { Badge } from "@/shadcnui/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image, { StaticImageData } from "next/image"

import { Aleo } from "next/font/google";
import classNames from "classnames"
const aleo = Aleo({ subsets: ["latin"] });

interface Technology {
  name: string
  color?: string // TODO: actually use as bg-color when available.
}

interface PortfolioCardProps {
  title: string
  description: string
  imageOg: StaticImageData,
  imageFav: StaticImageData,
  technologies: Technology[]
  liveUrl: string
  githubUrl: string
}

export default function PortfolioCard({
  title = "Project Title",
  description = "A beautiful and responsive website built with modern technologies.",
  imageOg,
  imageFav,
  technologies,
  liveUrl = "#",
  githubUrl = "#",
}: PortfolioCardProps) {
  return (
    <Card className="bg-surface-card dark:bg-surface-cardDark !border-none group relative overflow-hidden transition-all hover:shadow-lg rounded-xl">

      <div className="aspect-[2/1] overflow-hidden">
        <div className="relative h-full w-full transition-transform duration-300 group-hover:scale-110">
          <Image
            src={imageOg}
            alt={`${title} – banner`}
            className="object-cover"
            fill
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 dark:from-background/30 to-background/10" />
        </div>
      </div>

      <CardContent className="relative z-10 space-y-4 p-6">

        <div>
          <div className="flex flex-row items-center gap-3 mb-3">
            <Image
              src={imageFav}
              alt={`${title} – favicon`}
              width={30}
              height={30}
            />
            <h3 className={classNames(aleo.className, "text-2xl font-medium m-0")}>{title}</h3>
          </div>
          <p className="text-base text-card-foreground/65">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech.name} variant="web">
              {tech.name}
            </Badge>
          ))}
        </div>

      </CardContent>

      <CardFooter className="p-6 pt-0">
        <div className="flex gap-5">
          <RedirectButton type="liveUrl" url={liveUrl} />
          <RedirectButton type="githubUrl" url={githubUrl} />
        </div>
      </CardFooter>

    </Card>
  )
}

function RedirectButton({type, url} : {type: "liveUrl" | "githubUrl", url: string}) {
  return (
    <Button variant="web" size="web" asChild>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="flex flex-row items-center gap-1.5 px-1.5 py-0.5 text-base">
          {
            type === "liveUrl"
              ? <>
                <ExternalLink className="h-5 w-5" />
                <span className="mt-0.5">
                  Site
                </span>
              </>
              : <>
                <Github className="h-5 w-5" />
                <span className="mt-0.5">
                  Código
                </span>
              </>
          }
        </div>
      </a>
    </Button>
  )
}
