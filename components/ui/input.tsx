import { Input as BuiInput } from "@base-ui/react/input";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva(
  "placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground border-input w-full min-w-0 rounded-md border bg-transparent text-base shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 text-sm [corner-shape:var(--shape)] focus-visible:ring-ring focus-visible:ring-3 focus-visible:border-primary",
  {
    variants: {
      size: {
        default: "h-10 px-3",
        sm: "h-8 px-2 rounded-sm",
        lg: "h-12 text-base px-4",
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
}: Omit<BuiInput.Props, "size"> & VariantProps<typeof inputVariants>) {
  return (
    <BuiInput
      data-slot="input"
      data-size={size}
      className={cn(inputVariants({ size, className }))}
      {...props}
    />
  );
}

export { Input, inputVariants };
