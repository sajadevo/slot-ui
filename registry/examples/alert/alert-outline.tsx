import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { InfoIcon } from "lucide-react";

export default function AlertOutline() {
  return (
    <Alert variant="outline">
      <InfoIcon />
      <AlertTitle>Note</AlertTitle>
      <AlertDescription>
        This is an outline alert for general information.
      </AlertDescription>
    </Alert>
  );
}
