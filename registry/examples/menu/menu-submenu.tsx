"use client";

import { Button } from "@/components/ui/button";
import {
  Menu,
  MenuPopup,
  MenuItem,
  MenuSub,
  MenuSubPopup,
  MenuSubTrigger,
  MenuTrigger,
} from "@/components/ui/menu";

export default function MenuSubmenu() {
  return (
    <Menu>
      <MenuTrigger render={<Button variant="outline" />}>Edit</MenuTrigger>
      <MenuPopup>
        <MenuItem>Undo</MenuItem>
        <MenuItem>Redo</MenuItem>
        <MenuSub>
          <MenuSubTrigger>Find</MenuSubTrigger>
          <MenuSubPopup>
            <MenuItem>Search the Web</MenuItem>
            <MenuItem>Find Next</MenuItem>
            <MenuItem>Find Previous</MenuItem>
          </MenuSubPopup>
        </MenuSub>
      </MenuPopup>
    </Menu>
  );
}
