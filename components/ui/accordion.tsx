"use client";

import * as React from "react";
import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";

import { ChevronDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const accordionItemVariants = cva(
  "bg-transparent corner-shape",
  {
    variants: {
      variant: {
        default: "border-b last:border-b-0",
        solid:
          "bg-accent text-accent-foreground rounded-[if(style(--shape:squircle):1.5rem;else:var(--radius-lg))] my-2 px-4",
        outline:
          "border text-foreground rounded-[if(style(--shape:squircle):1.5rem;else:var(--radius-lg))] my-2 px-4",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type AccordionContextType = VariantProps<typeof accordionItemVariants>;

const AccordionContext = React.createContext<AccordionContextType>({
  variant: "default",
});

function useAccordionContext() {
  const context = React.useContext(AccordionContext);

  if (!context) {
    throw new Error(
      "`useAccordionContext()` must be used within the `<Accordion />`",
    );
  }

  return context;
}

function Accordion({
  variant = "default",
  ...props
}: AccordionPrimitive.Root.Props & VariantProps<typeof accordionItemVariants>) {
  return (
    <AccordionContext.Provider value={{ variant }}>
      <AccordionPrimitive.Root data-slot="accordion" {...props} />
    </AccordionContext.Provider>
  );
}

function AccordionItem({ className, ...props }: AccordionPrimitive.Item.Props) {
  const { variant } = useAccordionContext();

  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      data-variant={variant}
      className={cn(accordionItemVariants({ variant, className }))}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header
      data-slot="accordion-header"
      className="flex [&[data-open]_[data-slot=accordion-trigger-icon]]:rotate-180"
    >
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "flex flex-1 items-start justify-between gap-4 py-4 text-start text-sm font-medium transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50",
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon
          data-slot="accordion-trigger-icon"
          className="text-surface-foreground/50 pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionPanel({
  className,
  children,
  ...props
}: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-panel"
      className="h-(--accordion-panel-height) overflow-hidden text-sm transition-[height] duration-200 data-ending-style:h-0 data-starting-style:h-0"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Panel>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionPanel };
