import { Input } from "@/components/ui/input";

export function Inputs() {
  return (
    <section className="border-b p-12">
      <div className="mx-auto flex max-w-5xl items-end justify-center gap-8">
        <Input size="sm" placeholder="Name" />
        <Input placeholder="Name" />
        <Input size="lg" placeholder="Name" />
      </div>
    </section>
  );
}
