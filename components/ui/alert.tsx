import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full corner-shape border rounded-alert border-transparent py-3 px-3.5 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-2.5 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current transition-all duration-200",
  {
    variants: {
      variant: {
        default: "bg-accent text-accent-foreground",
        destructive:
          "bg-destructive/7 text-destructive *:data-[slot=alert-description]:text-destructive",
        success:
          "bg-success/7 text-success *:data-[slot=alert-description]:text-success",
        info:
          "bg-info/7 text-info *:data-[slot=alert-description]:text-info",
        warning:
          "bg-warning/7 text-warning *:data-[slot=alert-description]:text-warning",
        outline:
          "border-border bg-transparent text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Alert({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      data-variant={variant}
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        "col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight",
        className
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        "col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed opacity-80",
        className
      )}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }
