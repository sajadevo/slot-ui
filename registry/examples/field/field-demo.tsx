"use client";

import {
  Field,
  FieldLabel,
  FieldDescription,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function FieldDemo() {
  return (
    <Field className="w-full max-w-56">
      <FieldLabel>Email</FieldLabel>
      <Input placeholder="someone@example.com" />
      <FieldDescription>We&apos;ll never share your email.</FieldDescription>
    </Field>
  );
}
