"use client";

import { PreviewCard as PreviewCardPrimitive } from "@base-ui/react/preview-card";

import { cn } from "@/lib/utils";

function PreviewCard(props: PreviewCardPrimitive.Root.Props) {
  return <PreviewCardPrimitive.Root data-slot="preview-card" {...props} />;
}

function PreviewCardTrigger({ ...props }: PreviewCardPrimitive.Trigger.Props) {
  return (
    <PreviewCardPrimitive.Trigger data-slot="preview-card-trigger" {...props} />
  );
}

function PreviewCardPortal(props: PreviewCardPrimitive.Portal.Props) {
  return (
    <PreviewCardPrimitive.Portal data-slot="preview-card-portal" {...props} />
  );
}

function PreviewCardPositioner(props: PreviewCardPrimitive.Positioner.Props) {
  return (
    <PreviewCardPrimitive.Positioner
      data-slot="preview-card-positioner"
      {...props}
    />
  );
}

function PreviewCardPopup({
  align = "center",
  alignOffset = 0,
  side = "bottom",
  sideOffset = 4,
  children,
  className,
  ...props
}: PreviewCardPrimitive.Popup.Props &
  Pick<
    PreviewCardPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  >) {
  return (
    <PreviewCardPortal>
      <PreviewCardPositioner
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
      >
        <PreviewCardPrimitive.Popup
          className={cn(
            "bg-popover text-foreground rounded-popover corner-shape origin-(--transform-origin) border p-3 text-balance shadow-xs transition-all duration-200 data-ending-style:scale-90 data-ending-style:opacity-0 data-starting-style:scale-90 data-starting-style:opacity-0",
            className,
          )}
          data-slot="preview-card-popup"
          {...props}
        >
          {children}
        </PreviewCardPrimitive.Popup>
      </PreviewCardPositioner>
    </PreviewCardPortal>
  );
}

export {
  PreviewCard,
  PreviewCardPopup,
  PreviewCardPortal,
  PreviewCardPositioner,
  PreviewCardPrimitive,
  PreviewCardTrigger,
};
