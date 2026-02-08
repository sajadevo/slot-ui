import { RadioGroup, Radio } from "@/components/ui/radio";
import { Label } from "@/components/ui/label";

export default function RadioDemo() {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center gap-2">
        <Radio value="default" id="default" />
        <Label htmlFor="default">Default</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio value="comfortable" id="comfortable" />
        <Label htmlFor="comfortable">Comfortable</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio value="compact" id="compact" />
        <Label htmlFor="compact">Compact</Label>
      </div>
    </RadioGroup>
  );
}
