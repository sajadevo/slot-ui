"use client";

import { Button } from "@/components/ui/button";
import { toastManager } from "@/components/ui/toast";

export default function ToastSuccess() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toastManager.add({
          type: "success",
          title: "Changes saved",
          description: "Your changes have been saved.",
        })
      }
    >
      Show Toast
    </Button>
  );
}
