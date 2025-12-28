import { Toggle } from "@/components/ui/toggle";

export function Toggles() {
  return (
    <section className="flex items-start justify-around gap-8 border-b p-12">
      <div className="flex items-end gap-2">
        <Toggle size="sm">Toggle</Toggle>
        <Toggle>Toggle</Toggle>
        <Toggle size="lg">Toggle</Toggle>
      </div>
      <div className="flex items-end gap-2">
        <Toggle size="sm">T</Toggle>
        <Toggle>T</Toggle>
        <Toggle size="lg">T</Toggle>
      </div>
      <div className="flex items-end gap-2">
        <Toggle variant="outline" size="sm">
          Toggle
        </Toggle>
        <Toggle variant="outline">Toggle</Toggle>
        <Toggle variant="outline" size="lg">
          Toggle
        </Toggle>
      </div>
      <div className="flex items-end gap-2">
        <Toggle variant="outline" size="sm">
          T
        </Toggle>
        <Toggle variant="outline">T</Toggle>
        <Toggle variant="outline" size="lg">
          T
        </Toggle>
      </div>
    </section>
  );
}
