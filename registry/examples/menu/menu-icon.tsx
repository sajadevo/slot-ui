"use client";

import { Button } from "@/components/ui/button";
import {
  Menu,
  MenuPopup,
  MenuItem,
  MenuTrigger,
} from "@/components/ui/menu";
import { UserIcon, CreditCardIcon, SettingsIcon } from "lucide-react";

export default function MenuIcon() {
  return (
    <Menu>
      <MenuTrigger render={<Button variant="outline" />}>Open</MenuTrigger>
      <MenuPopup>
        <MenuItem>
          <UserIcon />
          Profile
        </MenuItem>
        <MenuItem>
          <CreditCardIcon />
          Billing
        </MenuItem>
        <MenuItem>
          <SettingsIcon />
          Settings
        </MenuItem>
      </MenuPopup>
    </Menu>
  );
}
