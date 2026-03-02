import { Button } from "@/components/ui/button";
import {
  PreviewCard,
  PreviewCardPopup,
  PreviewCardTrigger,
} from "@/components/ui/preview-card";

import { CornerUpLeftIcon, StarIcon } from "lucide-react";

export default function PreviewCardDemo() {
  return (
    <PreviewCard>
      <PreviewCardTrigger render={<Button variant="ghost" />}>
        Slot UI
      </PreviewCardTrigger>
      <PreviewCardPopup className="w-64">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h4 className="text-sm font-medium">Slot UI</h4>
            <p className="text-muted-foreground text-sm">
              Beautifully designed components built on Base UI and Tailwind CSS.
            </p>
          </div>
          <div className="text-muted-foreground flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1">
              <span
                aria-hidden="true"
                className="size-2 rounded-full bg-blue-500"
              />
              <span>TypeScript</span>
            </div>
            <div className="flex items-center gap-1">
              <StarIcon className="size-3" />
              <span>1.5k</span>
            </div>
            <div className="flex items-center gap-1">
              <CornerUpLeftIcon className="size-3" />
              <span>85</span>
            </div>
          </div>
        </div>
      </PreviewCardPopup>
    </PreviewCard>
  );
}
