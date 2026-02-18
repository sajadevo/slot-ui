import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const textareaVariants = cva(
  "placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground border-input w-full min-w-0 rounded-md border bg-transparent transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 text-sm corner-shape focus-visible:ring-ring/70 focus-visible:ring-3 focus-visible:border-primary/50 field-sizing-content min-h-16",
  {
    variants: {
      size: {
        default: "px-2 py-1.5",
        sm: "px-1.5 py-1 text-xs",
        lg: "px-3 py-2.5",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
)

function Textarea({
  className,
  size = "default",
  ...props
}: Omit<React.ComponentProps<"textarea">, "size"> &
  VariantProps<typeof textareaVariants>) {
  return (
    <textarea
      data-slot="textarea"
      data-size={size}
      className={cn(textareaVariants({ size, className }))}
      {...props}
    />
  )
}

export { Textarea, textareaVariants }
