import { Buttons } from "@/app/sections/buttons";
import { Accordions } from "@/app/sections/accordions";
import { AlertDialogs } from "@/app/sections/alert-dialogs";

export default function Home() {
  return (
    <div className="container mx-auto min-h-screen border-x">
      <Accordions />
      <Buttons />
      <AlertDialogs />
    </div>
  );
}
