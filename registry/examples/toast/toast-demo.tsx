"use client";

import { Button } from "@/components/ui/button";
import { toastManager } from "@/components/ui/toast";

export default function ToastDemo() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toastManager.add({
          title: "Event has been created",
          description: "Monday, January 3rd at 6:00pm",
        })
      }
    >
      Show Toast
    </Button>
  );
}
