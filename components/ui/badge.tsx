import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "h-5 gap-1 corner-shape rounded-full border border-transparent px-1.5 not-has-[>svg]:pb-px text-xs font-medium transition-all duration-200 [&>svg]:size-3! inline-flex items-center justify-center w-fit whitespace-nowrap shrink-0 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-disabled:cursor-not-allowed aria-disabled:opacity-50 overflow-hidden group/badge",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        secondary:
          "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
        destructive:
          "bg-destructive/7 text-destructive [a]:hover:bg-destructive/10",
          success: "bg-success/7 text-success [a]:hover:bg-success/10",
          info: "bg-info/7 text-info [a]:hover:bg-info/10",
          warning: "bg-warning/7 text-warning [a]:hover:bg-warning/10",
        outline:
          "border-border text-foreground [a]:hover:bg-accent/50",
        ghost:
          "bg-transparent text-foreground [a]:hover:bg-accent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  })
}

export { Badge, badgeVariants }
