"use client";

import { Button } from "@/components/ui/button";
import { toastManager } from "@/components/ui/toast";

function fakeUpload() {
  return new Promise<{ name: string }>((resolve) =>
    setTimeout(() => resolve({ name: "report.pdf" }), 2000),
  );
}

export default function ToastPromise() {
  return (
    <Button
      variant="outline"
      onClick={() =>
        toastManager.promise(fakeUpload(), {
          loading: { title: "Uploading..." },
          success: (data) => ({
            title: "Upload complete",
            description: `${data.name} was uploaded successfully.`,
          }),
          error: { title: "Upload failed", description: "Please try again." },
        })
      }
    >
      Show Toast
    </Button>
  );
}
