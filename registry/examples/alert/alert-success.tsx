import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CircleCheckIcon } from "lucide-react";

export default function AlertSuccess() {
  return (
    <Alert variant="success">
      <CircleCheckIcon />
      <AlertTitle>Success</AlertTitle>
      <AlertDescription>
        Your changes have been saved successfully.
      </AlertDescription>
    </Alert>
  );
}
