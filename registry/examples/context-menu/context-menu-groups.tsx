"use client";

import {
  ContextMenu,
  ContextMenuPopup,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

export default function ContextMenuGroups() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="border text-muted-foreground flex aspect-video w-full max-w-xs items-center justify-center rounded-card corner-shape border-dashed text-sm select-none">
        <span className="hidden pointer-fine:inline-block">Right click here</span>
        <span className="hidden pointer-coarse:inline-block">Long press here</span>
      </ContextMenuTrigger>
      <ContextMenuPopup>
        <ContextMenuGroup>
          <ContextMenuLabel>Personal</ContextMenuLabel>
          <ContextMenuItem>Profile</ContextMenuItem>
          <ContextMenuItem>Settings</ContextMenuItem>
        </ContextMenuGroup>
        <ContextMenuSeparator />
        <ContextMenuGroup>
          <ContextMenuLabel>Team</ContextMenuLabel>
          <ContextMenuItem>Members</ContextMenuItem>
          <ContextMenuItem>Billing</ContextMenuItem>
        </ContextMenuGroup>
      </ContextMenuPopup>
    </ContextMenu>
  );
}
