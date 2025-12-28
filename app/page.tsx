import { Buttons } from "@/app/sections/buttons";
import { Accordions } from "@/app/sections/accordions";
import { AlertDialogs } from "@/app/sections/alert-dialogs";
import { Avatars } from "@/app/sections/avatars";
import { Checkboxes } from "@/app/sections/checkboxes";
import { Collapsibles } from "@/app/sections/collapsibles";
import { Dialogs } from "@/app/sections/dialogs";
import { Inputs } from "@/app/sections/inputs";
import { Radios } from "@/app/sections/radios";
import { Switches } from "@/app/sections/switches";
import { Progresses } from "@/app/sections/progresses";
import { Popovers } from "@/app/sections/popovers";
import { Tooltips } from "@/app/sections/tooltips";
import { Sliders } from "@/app/sections/sliders";
import { TabsDemo } from "@/app/sections/tabs";
import { Toggles } from "@/app/sections/toggles";
import { ToggleGroups } from "@/app/sections/toggle-groups";

export default function Home() {
  return (
    <div className="container mx-auto min-h-screen border-x">
      <Accordions />
      <Buttons />
      <AlertDialogs />
      <Avatars />
      <Checkboxes />
      <Collapsibles />
      <Dialogs />
      <Inputs />
      <Radios />
      <Switches />
      <Progresses />
      <Popovers />
      <Tooltips />
      <Sliders />
      <TabsDemo />
      <Toggles />
      <ToggleGroups />
    </div>
  );
}
