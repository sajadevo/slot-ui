"use client";

import {
  ContextMenu,
  ContextMenuPopup,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { UserIcon, CreditCardIcon, SettingsIcon } from "lucide-react";

export default function ContextMenuIcon() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="border text-muted-foreground flex aspect-video w-full max-w-xs items-center justify-center rounded-card corner-shape border-dashed text-sm select-none">
        <span className="hidden pointer-fine:inline-block">Right click here</span>
        <span className="hidden pointer-coarse:inline-block">Long press here</span>
      </ContextMenuTrigger>
      <ContextMenuPopup>
        <ContextMenuItem>
          <UserIcon />
          Profile
        </ContextMenuItem>
        <ContextMenuItem>
          <CreditCardIcon />
          Billing
        </ContextMenuItem>
        <ContextMenuItem>
          <SettingsIcon />
          Settings
        </ContextMenuItem>
      </ContextMenuPopup>
    </ContextMenu>
  );
}
