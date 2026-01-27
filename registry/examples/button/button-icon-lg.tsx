import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";

export default function ButtonIconLg() {
  return (
    <Button aria-label="Add" size="icon-lg">
      <PlusIcon aria-hidden="true" />
    </Button>
  );
}
