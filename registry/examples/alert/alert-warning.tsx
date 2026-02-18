import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { TriangleAlertIcon } from "lucide-react";

export default function AlertWarning() {
  return (
    <Alert variant="warning">
      <TriangleAlertIcon />
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>
        Your account is nearing its storage limit.
      </AlertDescription>
    </Alert>
  );
}
