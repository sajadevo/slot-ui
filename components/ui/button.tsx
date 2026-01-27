"use client";

import { Button as ButtonPrimitive } from "@base-ui/react/button";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium [corner-shape:var(--shape)] transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground not-disabled:hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground not-disabled:hover:bg-secondary/70",
        outline:
          "border bg-transparent text-foreground shadow-xs not-disabled:hover:bg-accent/50",
        ghost: "bg-transparent text-foreground not-disabled:hover:bg-accent",
        destructive:
          "bg-destructive/10 text-destructive not-disabled:hover:bg-destructive/15",
      },
      size: {
        default: "h-9 px-3.5 has-[>svg]:px-3",
        sm: "h-8 gap-1.5 px-3 rounded-sm has-[>svg]:px-2.5 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-10 text-base px-4 has-[>svg]:px-3.5 [&_svg:not([class*='size-'])]:size-4.5",
        icon: "size-9",
        "icon-sm": "size-8 rounded-sm [&_svg:not([class*='size-'])]:size-3.5",
        "icon-lg": "size-10 [&_svg:not([class*='size-'])]:size-4.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
