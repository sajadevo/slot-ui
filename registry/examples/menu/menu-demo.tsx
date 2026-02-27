"use client";

import { Button } from "@/components/ui/button";
import {
  Menu,
  MenuPopup,
  MenuItem,
  MenuTrigger,
} from "@/components/ui/menu";

export default function MenuDemo() {
  return (
    <Menu>
      <MenuTrigger render={<Button variant="outline" />}>Open</MenuTrigger>
      <MenuPopup>
        <MenuItem>Profile</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem>Billing</MenuItem>
      </MenuPopup>
    </Menu>
  );
}
