"use client";

import * as React from "react";
import { flushSync } from "react-dom";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipPopup, TooltipTrigger } from "@/components/ui/tooltip";

import { MoonIcon, SunDimIcon } from "lucide-react";

import { useTheme } from "next-themes";

export function ModeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  async function toggleTheme() {
    const theme = resolvedTheme === "dark" ? "light" : "dark";

    if (
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setTheme(theme);
      return;
    }

    await document.startViewTransition(() => {
      flushSync(() => {
        setTheme(theme);
      });
    }).ready;
  }

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            size="icon-sm"
            variant="ghost"
            className="group/toggle extend-touch-target size-8"
            onClick={toggleTheme}
          />
        }
      >
        {resolvedTheme === "dark" ? <MoonIcon /> : <SunDimIcon />}
        <span className="sr-only">Toggle theme</span>
      </TooltipTrigger>
      <TooltipPopup>Toggle Mode</TooltipPopup>
    </Tooltip>
  );
}
