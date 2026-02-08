import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/sajadevo.png" alt="@sajadevo" />
      <AvatarFallback>SA</AvatarFallback>
    </Avatar>
  );
}
