import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDownIcon } from "lucide-react";

export default function CollapsibleDemo() {
  return (
    <Collapsible>
      <CollapsibleTrigger className="bg-accent inline-flex items-center gap-2 rounded-md py-1.5 pr-3 pl-2 text-sm font-medium corner-shape data-panel-open:[&_svg]:rotate-180">
        <ChevronDownIcon className="size-4" />
        View system requirements
      </CollapsibleTrigger>
      <CollapsiblePanel>
        <ul className="[&>li]:bg-accent mt-1 space-y-1 [&>li]:w-full [&>li]:rounded-md [&>li]:p-1.5 [&>li]:pl-8 [&>li]:text-sm [&>li]:corner-shape">
          <li>Node.js 18.x or higher</li>
          <li>React 18 or higher</li>
          <li>Tailwind CSS 4.x</li>
        </ul>
      </CollapsiblePanel>
    </Collapsible>
  );
}
