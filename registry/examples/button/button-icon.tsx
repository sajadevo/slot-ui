import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

export default function ButtonIcon() {
  return (
    <Button aria-label="Add" size="icon">
      <PlusIcon aria-hidden="true" />
    </Button>
  );
}
