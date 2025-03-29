import { Button } from "@/shadcnui/components/ui/button"
import { Card, CardContent, CardFooter } from "@/shadcnui/components/ui/card"
import { Badge } from "@/shadcnui/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image, { StaticImageData } from "next/image"

import { Aleo } from "next/font/google";
import classNames from "classnames"
const aleo = Aleo({ subsets: ["latin"] });

interface PortfolioCardProps {
  title: string
  imageLight: StaticImageData,
  imageDark: StaticImageData,
}

export default function PortfolioCardDesignBrand({
  title = "Project Title",
  imageLight,
  imageDark,
}: PortfolioCardProps) {
  return (
    <Card variant="design-brand" className="!border-none group relative overflow-hidden transition-all hover:shadow-lg rounded-xl">

      <div className="aspect-square overflow-hidden">
        <div className="relative h-full w-full">
          <Image
            src={imageLight}
            alt={`${title} – logo`}
            className="block dark:hidden object-cover"
            fill
            priority
          />
          <Image
            src={imageDark}
            alt={`${title} – logo`}
            className="hidden dark:block object-cover"
            fill
            priority
          />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-background/60 dark:from-background/30 to-background/10" /> */}
        </div>
      </div>

      <CardContent className="relative z-10 space-y-4 p-6">
        <h3 className={classNames(aleo.className, "text-2xl font-medium m-0")}>{title}</h3>
      </CardContent>

      <CardFooter className="p-6 pt-0">
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
