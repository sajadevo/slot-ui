"use client";

import { useState, type FormEvent } from "react";

import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";

export default function FormDemo() {
  const [loading, setLoading] = useState(false);

  async function onFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 500));

    setLoading(false);

    alert(`Email: ${formData.get("email") || ""}`)
  };

  return (
    <Form className="max-w-64" onSubmit={onFormSubmit}>
      <Field name="email">
        <FieldLabel>Email</FieldLabel>
        <Input
          disabled={loading}
          placeholder="someone@example.com"
          required
          type="email"
        />
        <FieldError>Please enter a valid email.</FieldError>
      </Field>
      <Button disabled={loading} type="submit">
        Submit
      </Button>
    </Form>
  );
}
