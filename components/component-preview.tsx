"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { getRegistryComponent } from "@/registry/index.tsx";

const MAX_HEIGHT = 180;

interface ComponentPreviewProps extends React.ComponentProps<"div"> {
  name: string;
  children?: React.ReactNode;
  align?: "center" | "start" | "end";
}

export function ComponentPreview({
  name,
  children,
  align = "center",
  className,
  ...props
}: ComponentPreviewProps) {
  const codeRef = React.useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [isOverflowing, setIsOverflowing] = React.useState(false);
  const [contentHeight, setContentHeight] = React.useState(0);

  React.useEffect(() => {
    const element = codeRef.current;
    if (!element) return;

    const observer = new ResizeObserver(() => {
      setContentHeight(element.scrollHeight);
      setIsOverflowing(element.scrollHeight > MAX_HEIGHT);
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const Component = getRegistryComponent(name);

  if (!Component) {
    return (
      <p className="text-muted-foreground text-sm">
        Component{" "}
        <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm">
          {name}
        </code>{" "}
        not found in registry.
      </p>
    );
  }

  return (
    <div
      data-slot="component-preview"
      className={cn(
        "group relative my-4 flex flex-col overflow-hidden rounded-card border corner-shape",
        className,
      )}
      {...props}
    >
      {/* Preview area */}
      <div
        data-slot="preview"
        className={cn(
          "preview relative flex min-h-88 w-full justify-center p-10",
          {
            "items-center": align === "center",
            "items-start": align === "start",
            "items-end": align === "end",
          },
        )}
      >
        <React.Suspense
          fallback={
            <div className="text-muted-foreground flex items-center text-sm">
              Loading...
            </div>
          }
        >
          {React.createElement(Component)}
        </React.Suspense>
      </div>

      {/* Code area */}
      <div className="relative border-t">
        <div
          ref={codeRef}
          className="overflow-hidden transition-[max-height]"
          style={{
            maxHeight:
              isExpanded || !isOverflowing ? contentHeight : MAX_HEIGHT,
          }}
        >
          {children}
        </div>

        {isOverflowing && (
          <div
            className={cn("flex items-end justify-center pb-2", {
              "from-background absolute inset-x-0 bottom-0 bg-linear-to-t to-transparent pt-16":
                !isExpanded,
            })}
          >
            <Button
              size="sm"
              variant="outline"
              className="bg-background not-disabled:hover:bg-muted"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Hide Code" : "Show Code"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
