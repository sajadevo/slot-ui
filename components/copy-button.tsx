"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipPopup, TooltipTrigger } from "@/components/ui/tooltip";

import { CheckIcon, CopyIcon } from "lucide-react";

import { cn } from "@/lib/utils";

type CopyButtonProps = React.ComponentProps<"button"> & {
  value: string;
};

export function CopyButton({ value, className, ...props }: CopyButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect(() => {
    if (hasCopied) {
      const timeout = setTimeout(() => setHasCopied(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [hasCopied]);

  function copyToClipboard() {
    navigator.clipboard.writeText(value);
    setHasCopied(true);
  }

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            size="icon-sm"
            variant="ghost"
            onClick={copyToClipboard}
            className={cn("absolute top-1.5 right-1.5", className)}
            {...props}
          />
        }
      >
        <span className="sr-only">Copy</span>
        {hasCopied ? <CheckIcon /> : <CopyIcon />}
      </TooltipTrigger>
      <TooltipPopup>Copy Code</TooltipPopup>
    </Tooltip>
  );
}
