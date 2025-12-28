"use client";

import { Switch as SwitchPrimitive } from "@base-ui/react/switch";

import { cn } from "@/lib/utils";

function Switch({ className, ...props }: SwitchPrimitive.Root.Props) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        "peer data-checked:bg-primary data-checked:border-primary bg-input inline-flex h-5 w-8 shrink-0 items-center rounded-full border shadow-xs transition-all outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          "bg-background pointer-events-none block size-4.5 translate-x-0 rounded-full shadow-xs ring-0 transition-transform data-checked:translate-x-[calc(100%-6px)]",
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
