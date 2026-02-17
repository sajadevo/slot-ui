import { Badge } from "@/components/ui/badge";
import { LoaderIcon } from "lucide-react";

export default function BadgeLoading() {
  return (
    <Badge>
      <LoaderIcon className="animate-spin" />
      Loading...
    </Badge>
  );
}
