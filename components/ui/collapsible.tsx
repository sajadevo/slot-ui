"use client";

import { Collapsible as BuiCollapsible } from "@base-ui/react";

import { cn } from "@/lib/utils";

function Collapsible(props: BuiCollapsible.Root.Props) {
  return <BuiCollapsible.Root data-slot="collapsible" {...props} />;
}

function CollapsibleTrigger(props: BuiCollapsible.Trigger.Props) {
  return <BuiCollapsible.Trigger data-slot="collapsible-trigger" {...props} />;
}

function CollapsiblePanel({ className, ...props }: BuiCollapsible.Panel.Props) {
  return (
    <BuiCollapsible.Panel
      data-slot="collapsible-panel"
      className={cn(
        "h-(--collapsible-panel-height) overflow-hidden transition-[height] duration-200 data-ending-style:h-0 data-starting-style:h-0",
        className,
      )}
      {...props}
    />
  );
}

export { Collapsible, CollapsibleTrigger, CollapsiblePanel };
