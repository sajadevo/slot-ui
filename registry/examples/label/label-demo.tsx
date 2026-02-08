import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LabelDemo() {
  return (
    <div className="w-full max-w-xs space-y-2">
      <Label htmlFor="username">Username</Label>
      <Input id="username" placeholder="sajadevo" />
    </div>
  );
}
