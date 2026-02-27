"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  MenuPopup,
  MenuRadioGroup,
  MenuRadioItem,
  MenuTrigger,
} from "@/components/ui/menu";

export default function MenuRadio() {
  const [position, setPosition] = React.useState("bottom");

  return (
    <Menu>
      <MenuTrigger render={<Button variant="outline" />}>
        Panel Position
      </MenuTrigger>
      <MenuPopup>
        <MenuRadioGroup value={position} onValueChange={setPosition}>
          <MenuRadioItem value="top">Top</MenuRadioItem>
          <MenuRadioItem value="bottom">Bottom</MenuRadioItem>
          <MenuRadioItem value="right">Right</MenuRadioItem>
        </MenuRadioGroup>
      </MenuPopup>
    </Menu>
  );
}
