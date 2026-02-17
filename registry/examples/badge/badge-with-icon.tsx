import { Badge } from "@/components/ui/badge";
import { CircleUserRoundIcon } from "lucide-react";

export default function BadgeWithIcon() {
  return (
    <Badge>
      <CircleUserRoundIcon />
      Badge
    </Badge>
  );
}
