"use client";

import { Button } from "@/components/ui/button";
import { toastManager } from "@/components/ui/toast";

export default function ToastDestructive() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toastManager.add({
          type: "destructive",
          title: "Something went wrong",
          description: "Your request could not be processed.",
        })
      }
    >
      Show Toast
    </Button>
  );
}
