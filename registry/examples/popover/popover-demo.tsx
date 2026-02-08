import {
  Popover,
  PopoverTrigger,
  PopoverPopup,
  PopoverTitle,
  PopoverDescription,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export default function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger render={<Button variant="outline" />}>
        Open Popover
      </PopoverTrigger>
      <PopoverPopup>
        <PopoverTitle>Notifications</PopoverTitle>
        <PopoverDescription>You are all caught up. Good job!</PopoverDescription>
      </PopoverPopup>
    </Popover>
  );
}
