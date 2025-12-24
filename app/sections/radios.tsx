import { Radio, RadioGroup } from "@/components/ui/radio";

export function Radios() {
  return (
    <section className="flex justify-center border-b p-12">
      <RadioGroup defaultValue="fuji-apple">
        <div className="font-medium">Apples</div>
        <label className="flex items-center gap-2 text-sm">
          <Radio value="fuji-apple" />
          Fuji
        </label>
        <label className="flex items-center gap-2 text-sm">
          <Radio value="gala-apple" />
          Gala
        </label>
        <label className="flex items-center gap-2 text-sm">
          <Radio value="granny-smith-apple" />
          Granny Smith
        </label>
      </RadioGroup>
    </section>
  );
}
