"use client";

import {
  ContextMenu,
  ContextMenuPopup,
  ContextMenuItem,
  ContextMenuSub,
  ContextMenuSubPopup,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export default function ContextMenuSubmenu() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="border text-muted-foreground flex aspect-video w-full max-w-xs items-center justify-center rounded-card corner-shape border-dashed text-sm select-none">
        <span className="hidden pointer-fine:inline-block">Right click here</span>
        <span className="hidden pointer-coarse:inline-block">Long press here</span>
      </ContextMenuTrigger>
      <ContextMenuPopup>
        <ContextMenuItem>Undo</ContextMenuItem>
        <ContextMenuItem>Redo</ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger>Find</ContextMenuSubTrigger>
          <ContextMenuSubPopup>
            <ContextMenuItem>Search the Web</ContextMenuItem>
            <ContextMenuItem>Find Next</ContextMenuItem>
            <ContextMenuItem>Find Previous</ContextMenuItem>
          </ContextMenuSubPopup>
        </ContextMenuSub>
      </ContextMenuPopup>
    </ContextMenu>
  );
}
