"use client";

import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip";

import { cn } from "@/lib/utils";

function TooltipProvider({
  delay = 0,
  ...props
}: TooltipPrimitive.Provider.Props) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delay={delay}
      {...props}
    />
  );
}

function Tooltip(props: TooltipPrimitive.Root.Props) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
}

function TooltipTrigger(props: TooltipPrimitive.Trigger.Props) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

function TooltipPortal(props: TooltipPrimitive.Portal.Props) {
  return <TooltipPrimitive.Portal data-slot="tooltip-portal" {...props} />;
}

function TooltipPositioner(props: TooltipPrimitive.Positioner.Props) {
  return (
    <TooltipPrimitive.Positioner data-slot="tooltip-positioner" {...props} />
  );
}

function TooltipArrow(props: TooltipPrimitive.Arrow.Props) {
  return <TooltipPrimitive.Arrow data-slot="tooltip-arrow" {...props} />;
}

function TooltipPopup({
  align = "center",
  alignOffset = 0,
  side = "top",
  sideOffset = 8,
  arrowPadding = 5,
  withArrow = true,
  children,
  className,
  ...props
}: TooltipPrimitive.Popup.Props & {
  align?: TooltipPrimitive.Positioner.Props["align"];
  alignOffset?: TooltipPrimitive.Positioner.Props["alignOffset"];
  side?: TooltipPrimitive.Positioner.Props["side"];
  sideOffset?: TooltipPrimitive.Positioner.Props["sideOffset"];
  arrowPadding?: TooltipPrimitive.Positioner.Props["arrowPadding"];
  withArrow?: boolean;
}) {
  return (
    <TooltipPortal>
      <TooltipPositioner
        align={align}
        data-slot="tooltip-positioner"
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        arrowPadding={arrowPadding}
      >
        <TooltipPrimitive.Popup
          data-slot="tooltip-Popup"
          className={cn(
            "bg-popover text-foreground origin-(--transform-origin) rounded-md border px-2 py-1.5 text-xs shadow-xs transition-all duration-200 corner-shape data-ending-style:scale-90 data-ending-style:opacity-0 data-starting-style:scale-90 data-starting-style:opacity-0",
            className,
          )}
          {...props}
        >
          {withArrow && (
            <TooltipArrow className="data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180">
              <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
                <path
                  d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
                  className="fill-popover"
                />
                <path
                  d="M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z"
                  className="fill-border"
                />
              </svg>
            </TooltipArrow>
          )}
          {children}
        </TooltipPrimitive.Popup>
      </TooltipPositioner>
    </TooltipPortal>
  );
}

export {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipPortal,
  TooltipPositioner,
  TooltipArrow,
  TooltipPopup,
};
