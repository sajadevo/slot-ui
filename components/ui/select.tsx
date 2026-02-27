"use client";

import * as React from "react";

import { Select as SelectPrimitive } from "@base-ui/react/select";
import { cva, type VariantProps } from "class-variance-authority";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronsUpDownIcon,
  ChevronUpIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

const Select = SelectPrimitive.Root;

const selectTriggerVariants = cva(
  "placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground border-input w-full min-w-0 rounded-md flex items-center border bg-transparent transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 text-sm corner-shape aria-invalid:border-destructive/50 aria-invalid:ring-destructive/15 focus-visible:ring-ring/70 focus-visible:ring-3 focus-visible:border-primary/50 [&_svg:not([class*='size-'])]:size-4",
  {
    defaultVariants: {
      size: "default",
    },
    variants: {
      size: {
        default: "h-8 px-2",
        lg: "h-10 px-3",
        sm: "h-7 gap-1.5 px-1.5 [&_svg:not([class*='size-'])]:size-3.5",
      },
    },
  },
);

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: SelectPrimitive.Trigger.Props & VariantProps<typeof selectTriggerVariants>) {
  return (
    <SelectPrimitive.Trigger
      className={cn(selectTriggerVariants({ size }), className)}
      data-slot="select-trigger"
      {...props}
    >
      {children}
      <SelectPrimitive.Icon data-slot="select-icon" className="ml-auto">
        <ChevronsUpDownIcon className="size-4 opacity-60 shrink-0" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

function SelectValue({ className, ...props }: SelectPrimitive.Value.Props) {
  return (
    <SelectPrimitive.Value
      className={cn(
        "truncate data-placeholder:text-muted-foreground",
        className,
      )}
      data-slot="select-value"
      {...props}
    />
  );
}

function SelectPopup({
  className,
  children,
  side = "bottom",
  sideOffset = 4,
  align = "start",
  alignOffset = 0,
  alignItemWithTrigger = true,
  ...props
}: SelectPrimitive.Popup.Props &
  Pick<
    SelectPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset" | "alignItemWithTrigger"
  >) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Positioner
        align={align}
        alignItemWithTrigger={alignItemWithTrigger}
        alignOffset={alignOffset}
        className="z-50 select-none"
        data-slot="select-positioner"
        side={side}
        sideOffset={sideOffset}
      >
        <SelectPrimitive.Popup
          className="group origin-(--transform-origin) text-foreground bg-popover rounded-popover border corner-shape shadow-xs min-w-(--anchor-width) data-[side=none]:min-w-[calc(var(--anchor-width)+1rem)]"
          data-slot="select-popup"
          {...props}
        >
          <SelectScrollUpButton />
          <SelectPrimitive.List
            className={cn(
              "max-h-(--available-height) overflow-y-auto p-1",
              className,
            )}
            data-slot="select-list"
          >
            {children}
          </SelectPrimitive.List>
          <SelectScrollDownButton />
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  );
}

function SelectGroup({ className, ...props }: SelectPrimitive.Group.Props) {
  return (
    <SelectPrimitive.Group
      data-slot="select-group"
      className={cn("scroll-my-1", className)}
      {...props}
    />
  );
}

function SelectLabel({
  className,
  ...props
}: SelectPrimitive.GroupLabel.Props) {
  return (
    <SelectPrimitive.GroupLabel
      data-slot="select-label"
      className={cn("text-muted-foreground px-1.5 py-1 text-xs font-medium", className)}
      {...props}
    />
  );
}

function SelectSeparator({
  className,
  ...props
}: SelectPrimitive.Separator.Props) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      {...props}
    />
  );
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpArrow>) {
  return (
    <SelectPrimitive.ScrollUpArrow
      data-slot="select-scroll-up-button"
      className={cn(
        "top-0 z-50 flex h-7 w-[calc(100%-2px)] translate-y-px cursor-default items-center justify-center rounded-t-[inherit] corner-shape bg-popover [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      <ChevronUpIcon />
    </SelectPrimitive.ScrollUpArrow>
  );
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownArrow>) {
  return (
    <SelectPrimitive.ScrollDownArrow
      data-slot="select-scroll-down-button"
      className={cn(
        "bottom-0 z-50 flex h-7 w-[calc(100%-2px)] -translate-y-px cursor-default items-center justify-center rounded-b-[inherit] bg-popover corner-shape [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      <ChevronDownIcon />
    </SelectPrimitive.ScrollDownArrow>
  );
}

function SelectItem({
  className,
  children,
  ...props
}: SelectPrimitive.Item.Props) {
  return (
    <SelectPrimitive.Item
      className={cn(
        "grid min-h-8 in-data-[side=none]:min-w-[calc(var(--anchor-width)+1.25rem)] cursor-default grid-cols-[1rem_1fr] items-center gap-2 rounded-[calc(var(--radius-md)-2px)] corner-shape py-1 px-2 text-sm outline-none data-disabled:pointer-events-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className,
      )}
      data-slot="select-item"
      {...props}
    >
      <SelectPrimitive.ItemIndicator className="col-start-1">
        <CheckIcon />
      </SelectPrimitive.ItemIndicator>
      <SelectPrimitive.ItemText className="col-start-2 min-w-0">
        {children}
      </SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

export {
  Select,
  SelectTrigger,
  selectTriggerVariants,
  SelectValue,
  SelectPopup,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};
