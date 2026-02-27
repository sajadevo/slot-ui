"use client";

import { Button } from "@/components/ui/button";
import {
  Menu,
  MenuPopup,
  MenuItem,
  MenuShortcut,
  MenuTrigger,
} from "@/components/ui/menu";

export default function MenuShortcut_() {
  return (
    <Menu>
      <MenuTrigger render={<Button variant="outline" />}>Open</MenuTrigger>
      <MenuPopup>
        <MenuItem>
          New Tab
          <MenuShortcut>⌘T</MenuShortcut>
        </MenuItem>
        <MenuItem>
          New Window
          <MenuShortcut>⌘N</MenuShortcut>
        </MenuItem>
        <MenuItem>
          Close Tab
          <MenuShortcut>⌘W</MenuShortcut>
        </MenuItem>
      </MenuPopup>
    </Menu>
  );
}
