"use client";

import { Button } from "@/components/ui/button";
import { toastManager } from "@/components/ui/toast";

export default function ToastInfo() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toastManager.add({
          type: "info",
          title: "Update available",
          description: "A new version is ready to install.",
        })
      }
    >
      Show Toast
    </Button>
  );
}
