import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function AvatarLg() {
  return (
    <Avatar size="lg">
      <AvatarImage src="https://github.com/sajadevo.png" alt="@sajadevo" />
      <AvatarFallback>SA</AvatarFallback>
    </Avatar>
  );
}
