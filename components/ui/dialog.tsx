"use client";

import * as React from "react";
import { Dialog as BuiDialog } from "@base-ui/react/dialog";

import { XIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Dialog(props: BuiDialog.Root.Props) {
  return <BuiDialog.Root data-slot="dialog" {...props} />;
}

function DialogTrigger(props: BuiDialog.Trigger.Props) {
  return <BuiDialog.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogPortal(props: BuiDialog.Portal.Props) {
  return <BuiDialog.Portal data-slot="dialog-portal" {...props} />;
}

function DialogClose(props: BuiDialog.Close.Props) {
  return <BuiDialog.Close data-slot="dialog-close" {...props} />;
}

function DialogViewport(props: BuiDialog.Viewport.Props) {
  return <BuiDialog.Viewport data-slot="dialog-viewport" {...props} />;
}

function DialogBackdrop({ className, ...props }: BuiDialog.Backdrop.Props) {
  return (
    <BuiDialog.Backdrop
      data-slot="dialog-backdrop"
      className={cn(
        "fixed inset-0 z-50 min-h-dvh bg-black/50 transition-all duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-[-webkit-touch-callout:none]:absolute",
        className,
      )}
      {...props}
    />
  );
}

function DialogPopup({
  className,
  children,
  showCloseButton = true,
  ...props
}: BuiDialog.Popup.Props & {
  showCloseButton?: boolean;
}) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogBackdrop />
      <DialogViewport>
        <BuiDialog.Popup
          data-slot="dialog-popup"
          className={cn(
            "bg-popover fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-1/2 gap-6 rounded-[if(style(--shape:squircle):3rem;else:var(--radius-xl))] border p-6 shadow-xl transition-all duration-200 [corner-shape:var(--shape)] data-ending-style:scale-90 data-ending-style:opacity-0 data-starting-style:scale-90 data-starting-style:opacity-0 sm:max-w-lg",
            className,
          )}
          {...props}
        >
          {children}
          {showCloseButton && (
            <DialogClose className="ring-offset-background focus:ring-ring text-secondary-foreground not-disabled:hover:bg-accent absolute end-3 top-3 flex size-6 items-center justify-center rounded-full disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
              <XIcon />
              <span className="sr-only">Close</span>
            </DialogClose>
          )}
        </BuiDialog.Popup>
      </DialogViewport>
    </DialogPortal>
  );
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function DialogFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className,
      )}
      {...props}
    />
  );
}

function DialogTitle({ className, ...props }: BuiDialog.Title.Props) {
  return (
    <BuiDialog.Title
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...props}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: BuiDialog.Description.Props) {
  return (
    <BuiDialog.Description
      data-slot="dialog-description"
      className={cn("text-muted-foreground text-base", className)}
      {...props}
    />
  );
}

export {
  Dialog,
  DialogClose,
  DialogPopup,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogBackdrop,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
