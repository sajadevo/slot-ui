import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const frameworks = [
  { label: "Next.js", value: "next" },
  { label: "Vite", value: "vite" },
  { label: "Astro", value: "astro" },
  { label: "Remix", value: "remix" },
];

export default function SelectSm() {
  return (
    <Select items={frameworks}>
      <SelectTrigger size="sm">
        <SelectValue placeholder="Select Framework" />
      </SelectTrigger>
      <SelectPopup>
        {frameworks.map(({ label, value }) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </SelectPopup>
    </Select>
  );
}
