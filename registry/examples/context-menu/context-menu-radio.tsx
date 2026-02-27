"use client";

import * as React from "react";
import {
  ContextMenu,
  ContextMenuPopup,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export default function ContextMenuRadio() {
  const [position, setPosition] = React.useState("bottom");

  return (
    <ContextMenu>
      <ContextMenuTrigger className="border text-muted-foreground flex aspect-video w-full max-w-xs items-center justify-center rounded-card corner-shape border-dashed text-sm select-none">
        <span className="hidden pointer-fine:inline-block">Right click here</span>
        <span className="hidden pointer-coarse:inline-block">Long press here</span>
      </ContextMenuTrigger>
      <ContextMenuPopup>
        <ContextMenuRadioGroup value={position} onValueChange={setPosition}>
          <ContextMenuRadioItem value="top">Top</ContextMenuRadioItem>
          <ContextMenuRadioItem value="bottom">Bottom</ContextMenuRadioItem>
          <ContextMenuRadioItem value="right">Right</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuPopup>
    </ContextMenu>
  );
}
