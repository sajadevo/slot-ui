import {
  Select,
  SelectItem,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const timezones = [
  { label: "Pacific/Midway", value: "pacific-midway" },
  { label: "Pacific/Honolulu", value: "pacific-honolulu" },
  { label: "America/Anchorage", value: "america-anchorage" },
  { label: "America/Los_Angeles", value: "america-los-angeles" },
  { label: "America/Denver", value: "america-denver" },
  { label: "America/Chicago", value: "america-chicago" },
  { label: "America/New_York", value: "america-new-york" },
  { label: "America/Halifax", value: "america-halifax" },
  { label: "America/Sao_Paulo", value: "america-sao-paulo" },
  { label: "Atlantic/Azores", value: "atlantic-azores" },
  { label: "Europe/London", value: "europe-london" },
  { label: "Europe/Paris", value: "europe-paris" },
  { label: "Europe/Helsinki", value: "europe-helsinki" },
  { label: "Europe/Moscow", value: "europe-moscow" },
  { label: "Asia/Dubai", value: "asia-dubai" },
  { label: "Asia/Kolkata", value: "asia-kolkata" },
  { label: "Asia/Bangkok", value: "asia-bangkok" },
  { label: "Asia/Shanghai", value: "asia-shanghai" },
  { label: "Asia/Tokyo", value: "asia-tokyo" },
  { label: "Australia/Sydney", value: "australia-sydney" },
  { label: "Pacific/Auckland", value: "pacific-auckland" },
];

export default function SelectScrollable() {
  return (
    <Select items={timezones}>
      <SelectTrigger>
        <SelectValue placeholder="Select timezone" />
      </SelectTrigger>
      <SelectPopup>
        {timezones.map(({ label, value }) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </SelectPopup>
    </Select>
  );
}
