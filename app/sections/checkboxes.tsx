import { Checkbox, CheckboxGroup } from "@/components/ui/checkbox";

export function Checkboxes() {
  return (
    <section className="flex items-start justify-around gap-8 border-b p-12">
      <label className="flex items-center gap-2 text-sm">
        <Checkbox />
        Enable notifications
      </label>

      <CheckboxGroup defaultValue={["fuji-apple"]}>
        <div className="font-medium">Apples</div>
        <label className="flex items-center gap-2 text-sm">
          <Checkbox name="apple" value="fuji-apple" />
          Fuji
        </label>
        <label className="flex items-center gap-2 text-sm">
          <Checkbox name="apple" value="gala-apple" />
          Gala
        </label>
        <label className="flex items-center gap-2 text-sm">
          <Checkbox name="apple" value="granny-smith-apple" />
          Granny Smith
        </label>
      </CheckboxGroup>
    </section>
  );
}
