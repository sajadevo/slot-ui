"use client";

import { Avatar as BuiAvatar } from "@base-ui/react/avatar";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const avatarVariants = cva(
  "relative inline-flex shrink-0 overflow-hidden rounded-full select-none",
  {
    variants: {
      size: {
        default: "size-10",
        sm: "size-8",
        lg: "size-12",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

function Avatar({
  size,
  className,
  ...props
}: BuiAvatar.Root.Props & VariantProps<typeof avatarVariants>) {
  return (
    <BuiAvatar.Root
      data-slot="avatar"
      className={cn(avatarVariants({ size, className }))}
      {...props}
    />
  );
}

function AvatarImage({ className, ...props }: BuiAvatar.Image.Props) {
  return (
    <BuiAvatar.Image
      data-slot="avatar-image"
      className={cn("aspect-square size-full", className)}
      {...props}
    />
  );
}

function AvatarFallback({ className, ...props }: BuiAvatar.Fallback.Props) {
  return (
    <BuiAvatar.Fallback
      data-slot="avatar-fallback"
      className={cn(
        "bg-accent text-accent-foreground inline-flex size-full items-center justify-center rounded-full text-sm font-medium",
        className,
      )}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback, avatarVariants };
