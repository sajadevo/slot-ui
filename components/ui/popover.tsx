"use client";

import { Popover as PopoverPrimitive } from "@base-ui/react/popover";

import { cn } from "@/lib/utils";

function Popover(props: PopoverPrimitive.Root.Props) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />;
}

function PopoverTrigger({ ...props }: PopoverPrimitive.Trigger.Props) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
}

function PopoverBackdrop(props: PopoverPrimitive.Backdrop.Props) {
  return <PopoverPrimitive.Backdrop data-slot="popover-backdrop" {...props} />;
}

function PopoverPortal(props: PopoverPrimitive.Portal.Props) {
  return <PopoverPrimitive.Portal data-slot="popover-portal" {...props} />;
}

function PopoverPositioner(props: PopoverPrimitive.Positioner.Props) {
  return (
    <PopoverPrimitive.Positioner data-slot="popover-positioner" {...props} />
  );
}

function PopoverArrow(props: PopoverPrimitive.Arrow.Props) {
  return <PopoverPrimitive.Arrow data-slot="popover-arrow" {...props} />;
}

function PopoverViewport(props: PopoverPrimitive.Viewport.Props) {
  return <PopoverPrimitive.Viewport data-slot="popover-viewport" {...props} />;
}

function PopoverPopup({
  align = "center",
  alignOffset = 0,
  side = "bottom",
  sideOffset = 8,
  arrowPadding = 5,
  withArrow = true,
  children,
  className,
  ...props
}: PopoverPrimitive.Popup.Props & {
  align?: PopoverPrimitive.Positioner.Props["align"];
  alignOffset?: PopoverPrimitive.Positioner.Props["alignOffset"];
  side?: PopoverPrimitive.Positioner.Props["side"];
  sideOffset?: PopoverPrimitive.Positioner.Props["sideOffset"];
  arrowPadding?: PopoverPrimitive.Positioner.Props["arrowPadding"];
  withArrow?: boolean;
}) {
  return (
    <PopoverPortal>
      <PopoverPositioner
        align={align}
        data-slot="popover-positioner"
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        arrowPadding={arrowPadding}
      >
        <PopoverPrimitive.Popup
          data-slot="popover-Popup"
          className={cn(
            "bg-popover text-foreground origin-(--transform-origin) rounded-lg border p-4 text-balance shadow-xs transition-all duration-200 data-ending-style:scale-90 data-ending-style:opacity-0 data-starting-style:scale-90 data-starting-style:opacity-0",
            className,
          )}
          {...props}
        >
          {withArrow && (
            <PopoverArrow className="data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180">
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
            </PopoverArrow>
          )}
          <PopoverViewport>{children}</PopoverViewport>
        </PopoverPrimitive.Popup>
      </PopoverPositioner>
    </PopoverPortal>
  );
}

function PopoverClose(props: PopoverPrimitive.Close.Props) {
  return <PopoverPrimitive.Close data-slot="popover-close" {...props} />;
}
function PopoverTitle({ className, ...props }: PopoverPrimitive.Title.Props) {
  return (
    <PopoverPrimitive.Title
      className={cn("text-lg leading-none font-semibold", className)}
      data-slot="popover-title"
      {...props}
    />
  );
}

function PopoverDescription({
  className,
  ...props
}: PopoverPrimitive.Description.Props) {
  return (
    <PopoverPrimitive.Description
      className={cn("text-muted-foreground text-base", className)}
      data-slot="popover-description"
      {...props}
    />
  );
}

export {
  Popover,
  PopoverTrigger,
  PopoverBackdrop,
  PopoverPortal,
  PopoverPositioner,
  PopoverArrow,
  PopoverViewport,
  PopoverPopup,
  PopoverClose,
  PopoverTitle,
  PopoverDescription,
};
