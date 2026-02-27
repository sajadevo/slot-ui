import {
  Select,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectPopup,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const frontend = [
  { label: "Next.js", value: "next" },
  { label: "Remix", value: "remix" },
  { label: "Astro", value: "astro" },
];

const backend = [
  { label: "Hono", value: "hono" },
  { label: "Express", value: "express" },
  { label: "Fastify", value: "fastify" },
];

export default function SelectGroup_() {
  return (
    <Select items={[...frontend, ...backend]}>
      <SelectTrigger>
        <SelectValue placeholder="Select a framework" />
      </SelectTrigger>
      <SelectPopup>
        <SelectGroup>
          <SelectLabel>Frontend</SelectLabel>
          {frontend.map(({ label, value }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Backend</SelectLabel>
          {backend.map(({ label, value }) => (
            <SelectItem key={value} value={value}>
              {label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectPopup>
    </Select>
  );
}
