import { Tooltip, TooltipTrigger, TooltipPopup } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

export function Tooltips() {
  return (
    <section className="flex items-center justify-around gap-8 border-b p-12">
      <Tooltip>
        <TooltipTrigger render={<Button />}>Open Tooltip</TooltipTrigger>
        <TooltipPopup>Slot UI</TooltipPopup>
      </Tooltip>
    </section>
  );
}
