import { Checkbox, CheckboxGroup } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function CheckboxGroupDemo() {
  return (
    <CheckboxGroup>
      <div className="flex items-center gap-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="marketing" />
        <Label htmlFor="marketing">Receive marketing emails</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="updates" />
        <Label htmlFor="updates">Get product updates</Label>
      </div>
    </CheckboxGroup>
  );
}
