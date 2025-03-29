import { Card } from "@/shadcnui/components/ui/card"
import Image, { StaticImageData } from "next/image"

import { Aleo } from "next/font/google";
import classNames from "classnames"
import Link from "next/link"
const aleo = Aleo({ subsets: ["latin"] });

interface PortfolioCardProps {
  title: string,
  url: string,
  imageLight: StaticImageData,
  imageDark: StaticImageData,
}

export default function PortfolioCardDesignBrand({
  title = "Project Title",
  url = "#",
  imageLight,
  imageDark,
}: PortfolioCardProps) {
  return (
  <Link href={`./design/${url}`} className="block">
    <Card className="bg-surface-card dark:bg-surface-cardDark !border-none group relative overflow-hidden transition-all hover:shadow-lg rounded-xl">
      <div className="aspect-square overflow-hidden relative">

        <div className="relative h-full w-full">
          <Image
            src={imageLight}
            alt={`${title} – logo`}
            className="block dark:hidden object-cover transition-all duration-300 group-hover:blur-sm"
            fill
            priority
          />
          <Image
            src={imageDark}
            alt={`${title} – logo`}
            className="hidden dark:block object-cover transition-all duration-300 group-hover:blur-sm"
            fill
            priority
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center bg-black/[0.01] dark:bg-white/[0.01] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <h3 className={classNames(aleo.className, "text-4xl font-medium text-center text-text-primary dark:text-text-primaryDark mx-6")}>
            {title}
          </h3>
        </div>

      </div>
    </Card>
  </Link>
  )
}
