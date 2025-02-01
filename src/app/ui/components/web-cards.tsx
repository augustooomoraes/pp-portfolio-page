import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

interface Technology {
  name: string
  color?: string
}

interface PortfolioCardProps {
  title: string
  description: string
  imageUrl: string
  technologies: Technology[]
  liveUrl: string
  githubUrl: string
}

export default function PortfolioCard({
  title = "Project Title",
  description = "A beautiful and responsive website built with modern technologies.",
  imageUrl = "/placeholder.svg?height=400&width=600",
  technologies = [{ name: "React" }, { name: "Next.js" }, { name: "TypeScript" }, { name: "Tailwind" }],
  liveUrl = "#",
  githubUrl = "#",
}: PortfolioCardProps) {
  return (
    <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-video overflow-hidden">
        <div className="relative h-full w-full transition-transform duration-300 group-hover:scale-110">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20" />
        </div>
      </div>
      <CardContent className="relative z-10 -mt-20 space-y-4 p-6">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech.name} variant="secondary" className="bg-background/80 backdrop-blur-sm">
              {tech.name}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <div className="flex gap-2">
          <Button size="sm" asChild>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Site
            </a>
          </Button>
          <Button size="sm" variant="outline" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Código
            </a>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
