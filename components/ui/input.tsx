"use client";

import { Input as InputPrimitive } from "@base-ui/react/input";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva(
  "placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground border-input w-full min-w-0 rounded-md border bg-transparent transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 text-sm corner-shape focus-visible:ring-ring/70 focus-visible:ring-3 focus-visible:border-primary/50",
  {
    variants: {
      size: {
        default: "h-8 px-2",
        sm: "h-7 px-1.5",
        lg: "h-10 px-3",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

function Input({
  className,
  size = "default",
  ...props
}: Omit<InputPrimitive.Props, "size"> & VariantProps<typeof inputVariants>) {
  return (
    <InputPrimitive
      data-slot="input"
      data-size={size}
      className={cn(inputVariants({ size, className }))}
      {...props}
    />
  );
}

export { Input, inputVariants };
