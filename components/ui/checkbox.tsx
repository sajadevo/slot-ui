"use client";

import {
  Checkbox as BuiCheckbox,
  CheckboxGroup as BuiCheckboxGroup,
} from "@base-ui/react";

import { CheckIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Checkbox({ className, ...props }: BuiCheckbox.Root.Props) {
  return (
    <BuiCheckbox.Root
      data-slot="checkbox"
      className={cn(
        "peer border-input data-checked:bg-primary data-checked:text-primary-foreground data-checked:border-primary focus-visible:border-ring size-5 shrink-0 rounded-sm border shadow-xs outline-none [corner-shape:var(--shape)] disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <BuiCheckbox.Indicator
        data-slot="checkbox-indicator"
        className="grid size-full place-content-center text-current transition-none"
      >
        <CheckIcon className="size-3.5" />
      </BuiCheckbox.Indicator>
    </BuiCheckbox.Root>
  );
}

function CheckboxGroup({ className, ...props }: BuiCheckboxGroup.Props) {
  return (
    <BuiCheckboxGroup
      className={cn("flex flex-col items-start gap-2", className)}
      {...props}
    />
  );
}

export { Checkbox, CheckboxGroup };
