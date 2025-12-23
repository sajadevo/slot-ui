"use client";

import * as React from "react";
import { AlertDialog as BuiAlertDialog } from "@base-ui/react/alert-dialog";

import { cn } from "@/lib/utils";

function AlertDialog(props: BuiAlertDialog.Root.Props) {
  return <BuiAlertDialog.Root data-slot="alert-dialog" {...props} />;
}

function AlertDialogTrigger(props: BuiAlertDialog.Trigger.Props) {
  return <BuiAlertDialog.Trigger data-slot="alert-dialog-trigger" {...props} />;
}

function AlertDialogPortal(props: BuiAlertDialog.Portal.Props) {
  return <BuiAlertDialog.Portal data-slot="alert-dialog-portal" {...props} />;
}

function AlertDialogBackdrop({
  className,
  ...props
}: BuiAlertDialog.Backdrop.Props) {
  return (
    <BuiAlertDialog.Backdrop
      data-slot="alert-dialog-backdrop"
      className={cn(
        "fixed inset-0 z-50 min-h-dvh bg-black/50 transition-all duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-[-webkit-touch-callout:none]:absolute",
        className,
      )}
      {...props}
    />
  );
}

function AlertDialogViewport({
  className,
  ...props
}: BuiAlertDialog.Viewport.Props) {
  return (
    <BuiAlertDialog.Viewport
      data-slot="alert-dialog-viewport"
      className={cn(className)}
      {...props}
    />
  );
}

function AlertDialogPopup({ className, ...props }: BuiAlertDialog.Popup.Props) {
  return (
    <AlertDialogPortal>
      <AlertDialogBackdrop />
      <AlertDialogViewport>
        <BuiAlertDialog.Popup
          data-slot="alert-dialog-popup"
          className={cn(
            "bg-popover fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-1/2 gap-6 rounded-[if(style(--shape:squircle):3rem;else:var(--radius-xl))] border p-6 shadow-xl duration-200 [corner-shape:var(--shape)] sm:max-w-lg",
            className,
          )}
          {...props}
        />
      </AlertDialogViewport>
    </AlertDialogPortal>
  );
}

function AlertDialogHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  );
}

function AlertDialogFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className,
      )}
      {...props}
    />
  );
}

function AlertDialogTitle({ className, ...props }: BuiAlertDialog.Title.Props) {
  return (
    <BuiAlertDialog.Title
      data-slot="alert-dialog-title"
      className={cn("text-lg font-semibold", className)}
      {...props}
    />
  );
}

function AlertDialogDescription({
  className,
  ...props
}: BuiAlertDialog.Description.Props) {
  return (
    <BuiAlertDialog.Description
      data-slot="alert-dialog-description"
      className={cn("text-muted-foreground text-base", className)}
      {...props}
    />
  );
}

function AlertDialogClose(props: BuiAlertDialog.Close.Props) {
  return <BuiAlertDialog.Close data-slot="alert-dialog-close" {...props} />;
}

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogBackdrop,
  AlertDialogTrigger,
  AlertDialogPopup,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogClose,
};
