import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function AvatarSm() {
  return (
    <Avatar size="sm">
      <AvatarImage src="https://github.com/sajadevo.png" alt="@sajadevo" />
      <AvatarFallback>SA</AvatarFallback>
    </Avatar>
  );
}
