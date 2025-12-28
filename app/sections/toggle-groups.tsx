import { ToggleGroup, Toggle } from "@/components/ui/toggle-group";

import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";

export function ToggleGroups() {
  return (
    <section className="flex items-start justify-around gap-8 border-b p-12">
      <div className="flex items-end gap-4">
        <ToggleGroup size="sm" defaultValue={["bold"]}>
          <Toggle value="bold">
            <BoldIcon />
          </Toggle>
          <Toggle value="italic">
            <ItalicIcon />
          </Toggle>
          <Toggle value="underline">
            <UnderlineIcon />
          </Toggle>
        </ToggleGroup>
        <ToggleGroup defaultValue={["bold"]}>
          <Toggle value="bold">
            <BoldIcon />
          </Toggle>
          <Toggle value="italic">
            <ItalicIcon />
          </Toggle>
          <Toggle value="underline">
            <UnderlineIcon />
          </Toggle>
        </ToggleGroup>
        <ToggleGroup size="lg" defaultValue={["bold"]}>
          <Toggle value="bold">
            <BoldIcon />
          </Toggle>
          <Toggle value="italic">
            <ItalicIcon />
          </Toggle>
          <Toggle value="underline">
            <UnderlineIcon />
          </Toggle>
        </ToggleGroup>
      </div>
      <div className="flex items-end gap-4">
        <ToggleGroup variant="outline" size="sm" defaultValue={["bold"]}>
          <Toggle value="bold">
            <BoldIcon />
          </Toggle>
          <Toggle value="italic">
            <ItalicIcon />
          </Toggle>
          <Toggle value="underline">
            <UnderlineIcon />
          </Toggle>
        </ToggleGroup>
        <ToggleGroup variant="outline" defaultValue={["bold"]}>
          <Toggle value="bold">
            <BoldIcon />
          </Toggle>
          <Toggle value="italic">
            <ItalicIcon />
          </Toggle>
          <Toggle value="underline">
            <UnderlineIcon />
          </Toggle>
        </ToggleGroup>
        <ToggleGroup variant="outline" size="lg" defaultValue={["bold"]}>
          <Toggle value="bold">
            <BoldIcon />
          </Toggle>
          <Toggle value="italic" size="sm">
            <ItalicIcon />
          </Toggle>
          <Toggle value="underline">
            <UnderlineIcon />
          </Toggle>
        </ToggleGroup>
      </div>
    </section>
  );
}
