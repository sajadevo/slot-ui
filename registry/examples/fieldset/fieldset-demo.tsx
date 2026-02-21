import {
  Field,
  FieldLabel,
  FieldDescription,
} from "@/components/ui/field";
import { Fieldset, FieldsetLegend } from "@/components/ui/fieldset";
import { Input } from "@/components/ui/input";

export default function FieldsetDemo() {
  return (
    <Fieldset className="max-w-64">
      <FieldsetLegend>Billing Details</FieldsetLegend>
      <Field>
        <FieldLabel>Company</FieldLabel>
        <Input placeholder="Enter company name" type="text" />
        <FieldDescription>
          The name that will appear on invoices.
        </FieldDescription>
      </Field>

      <Field>
        <FieldLabel>Tax ID</FieldLabel>
        <Input placeholder="Enter tax identification number" type="text" />
        <FieldDescription>
          Your business tax identification number.
        </FieldDescription>
      </Field>
    </Fieldset>
  );
}
