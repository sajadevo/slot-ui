"use client";

import { Button } from "@/components/ui/button";
import {
  Menu,
  MenuPopup,
  MenuGroup,
  MenuItem,
  MenuLabel,
  MenuSeparator,
  MenuTrigger,
} from "@/components/ui/menu";

export default function MenuGroup_() {
  return (
    <Menu>
      <MenuTrigger render={<Button variant="outline" />}>My Account</MenuTrigger>
      <MenuPopup>
        <MenuGroup>
          <MenuLabel>Personal</MenuLabel>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Settings</MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuGroup>
          <MenuLabel>Team</MenuLabel>
          <MenuItem>Members</MenuItem>
          <MenuItem>Billing</MenuItem>
        </MenuGroup>
      </MenuPopup>
    </Menu>
  );
}
