import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CircleAlertIcon } from "lucide-react";

export default function AlertDestructive() {
  return (
    <Alert variant="destructive">
      <CircleAlertIcon />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  );
}
