import { Button } from "@/components/ui/button";
import { MailIcon } from "lucide-react";

export default function ButtonWithIcon() {
  return (
    <Button size='lg'>
      <MailIcon />
      Login with Email
    </Button>
  );
}
