"use client";

import { Button } from "@/components/ui/button";
import { toastManager } from "@/components/ui/toast";

export default function ToastWarning() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toastManager.add({
          type: "warning",
          title: "Storage almost full",
          description: "You are using 90% of your storage.",
        })
      }
    >
      Show Toast
    </Button>
  );
}
