import {
  Popover,
  PopoverTrigger,
  PopoverPopup,
  PopoverTitle,
  PopoverDescription,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export function Popovers() {
  return (
    <section className="flex items-center justify-around gap-8 p-12">
      <Popover>
        <PopoverTrigger render={<Button />}>Open Popover</PopoverTrigger>
        <PopoverPopup>
          <div className="space-y-1">
            <PopoverTitle>Notifications</PopoverTitle>
            <PopoverDescription>
              You are all caught up. Good job!
            </PopoverDescription>
          </div>
        </PopoverPopup>
      </Popover>
    </section>
  );
}
