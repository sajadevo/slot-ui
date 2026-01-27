import { Button } from "@/components/ui/button";
import { LoaderIcon } from "lucide-react";

export default function ButtonLoading() {
  return (
    <Button disabled>
      <LoaderIcon className="animate-spin" />
      Loading...
    </Button>
  );
}
