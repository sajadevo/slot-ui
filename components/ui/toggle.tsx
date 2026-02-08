"use client";

import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const toggleVariants = cva(
  "inline-flex items-center text-foreground justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium [corner-shape:var(--shape)] transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 has-[>svg]:px-2 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-transparent not-disabled:not-data-pressed:hover:bg-accent/50 data-pressed:bg-accent",
        outline:
          "border bg-transparent not-disabled:hover:bg-accent/50 data-pressed:bg-accent/50 data-pressed:shadow-none",
      },
      size: {
        default: "h-9 px-3.5 min-w-9",
        sm: "h-8 px-3 min-w-8 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-10 px-4 min-w-10 [&_svg:not([class*='size-'])]:size-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Toggle({
  className,
  variant,
  size,
  ...props
}: TogglePrimitive.Props & VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive
      className={cn(toggleVariants({ className, size, variant }))}
      data-slot="toggle"
      {...props}
    />
  );
}

export { Toggle, toggleVariants };
