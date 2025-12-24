"use client";

import { Radio as BuiRadio } from "@base-ui/react/radio";
import { RadioGroup as BuiRadioGroup } from "@base-ui/react/radio-group";

import { cn } from "@/lib/utils";

function RadioGroup({ className, ...props }: BuiRadioGroup.Props) {
  return (
    <BuiRadioGroup
      className={cn("flex flex-col gap-3", className)}
      data-slot="radio-group"
      {...props}
    />
  );
}

function Radio({ className, ...props }: BuiRadio.Root.Props) {
  return (
    <BuiRadio.Root
      className={cn(
        "border-input bg-background data-checked:bg-primary data-checked:border-primary relative inline-flex size-5 shrink-0 items-center justify-center rounded-full border shadow-xs outline-none disabled:opacity-50",
        className,
      )}
      data-slot="radio"
      {...props}
    >
      <BuiRadio.Indicator
        className="before:bg-primary-foreground flex before:size-2 before:rounded-full data-unchecked:hidden"
        data-slot="radio-indicator"
      />
    </BuiRadio.Root>
  );
}

export { RadioGroup, Radio };
