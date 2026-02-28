"use client";

import { Button } from "@/components/ui/button";
import { toastManager } from "@/components/ui/toast";

export default function ToastLoading() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toastManager.add({
          type: "loading",
          title: "Uploading file",
          description: "Please wait this will take some time.",
        })
      }
    >
      Show Toast
    </Button>
  );
}
