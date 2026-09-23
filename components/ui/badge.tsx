import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center border font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1.5 [&>svg]:pointer-events-none transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow-xs hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive/15 text-destructive border-destructive/25",
        outline: "text-foreground border-border",
        success:
          "border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
        warning:
          "border-amber-500/20 bg-amber-500/10 text-amber-700 dark:text-amber-400",
        info:
          "border-cyan-500/20 bg-cyan-500/10 text-cyan-700 dark:text-cyan-400",
        purple:
          "border-violet-500/20 bg-violet-500/10 text-violet-700 dark:text-violet-400",
        invert: "border-transparent bg-foreground text-background",
      },
      size: {
        xs: "text-[10px] px-1.5 py-0.5 font-medium",
        sm: "text-xs px-2 py-0.5 font-medium",
        default: "text-xs px-2.5 py-1 font-medium",
        lg: "text-sm px-3 py-1.5 font-semibold",
      },
      radius: {
        default: "rounded-md",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      radius: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, radius, ...props }: BadgeProps) {
  return (
    <span
      className={cn(badgeVariants({ variant, size, radius }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
