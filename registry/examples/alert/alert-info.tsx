import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";

export default function AlertInfo() {
  return (
    <Alert variant="info">
      <InfoIcon />
      <AlertTitle>Did you know?</AlertTitle>
      <AlertDescription>
        You can use keyboard shortcuts to navigate faster.
      </AlertDescription>
    </Alert>
  );
}
