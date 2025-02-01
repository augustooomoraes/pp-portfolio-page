import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/shadcnui/lib/utils"
import clsx from "clsx"

const badgeVariants = cva(
  clsx(
    "inline-flex items-center",
    "rounded-full px-2.5 py-0.5",
    "text-xs font-semibold",
    "transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  ),
  {
    variants: {
      variant: {
        default:
          "border border-transparent bg-primary     text-primary-foreground     hover:bg-primary/80",
        secondary:
          "border border-transparent bg-secondary   text-secondary-foreground   hover:bg-secondary/80",
        destructive:
          "border border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline:
          "border text-foreground",
        web:
          "p-1 hover:bg-surface-hover dark:hover:bg-surface-hoverDark"
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
