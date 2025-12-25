import {
  Collapsible,
  CollapsibleTrigger,
  CollapsiblePanel,
} from "@/components/ui/collapsible";

import { ChevronDownIcon } from "lucide-react";

export function Collapsibles() {
  return (
    <section className="flex items-center justify-center gap-8 border-b p-12">
      <Collapsible>
        <CollapsibleTrigger className="bg-accent inline-flex items-center gap-2 rounded-md py-2 pr-4 pl-3 text-sm font-medium data-panel-open:[&_svg]:rotate-180">
          <ChevronDownIcon className="size-4" />
          Show recovery keys
        </CollapsibleTrigger>
        <CollapsiblePanel>
          <ul className="bg-accent mt-1 space-y-2 rounded-lg py-2 pr-4 pl-7 text-sm">
            <li>alien-bean-pasta</li>
            <li>wild-irish-burrito</li>
            <li>horse-battery-staple</li>
          </ul>
        </CollapsiblePanel>
      </Collapsible>
    </section>
  );
}
