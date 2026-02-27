"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  MenuCheckboxItem,
  MenuPopup,
  MenuTrigger,
} from "@/components/ui/menu";

export default function MenuCheckbox() {
  const [showStatusBar, setShowStatusBar] = React.useState(true);
  const [showActivityBar, setShowActivityBar] = React.useState(false);
  const [showPanel, setShowPanel] = React.useState(false);

  return (
    <Menu>
      <MenuTrigger render={<Button variant="outline" />}>
        View
      </MenuTrigger>
      <MenuPopup>
        <MenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          Status Bar
        </MenuCheckboxItem>
        <MenuCheckboxItem
          checked={showActivityBar}
          onCheckedChange={setShowActivityBar}
        >
          Activity Bar
        </MenuCheckboxItem>
        <MenuCheckboxItem
          checked={showPanel}
          onCheckedChange={setShowPanel}
        >
          Panel
        </MenuCheckboxItem>
      </MenuPopup>
    </Menu>
  );
}
