import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

export default function ButtonIconSm() {
  return (
    <Button aria-label="Add" size="icon-sm">
      <PlusIcon aria-hidden="true" />
    </Button>
  );
}
