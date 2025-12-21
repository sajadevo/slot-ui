"use client";

import { Button } from "@/components/ui/button";

import { CircleDotIcon } from "lucide-react";

export function Buttons() {
  return (
    <section className="divide-y divide-dashed border-b">
      <div className="space-y-8 p-12">
        <div className="flex items-center gap-2">
          <Button aria-invalid>Button</Button>
          <Button variant="secondary">Button</Button>
          <Button variant="outline">Button</Button>
          <Button variant="ghost">Button</Button>
          <Button disabled>Button</Button>
          <Button disabled variant="secondary">
            Button
          </Button>
          <Button disabled variant="outline">
            Button
          </Button>
          <Button disabled variant="ghost">
            Button
          </Button>
        </div>
        <div className="flex items-end gap-6">
          <div className="flex items-end gap-2">
            <Button size="sm">Button</Button>
            <Button>Button</Button>
            <Button size="lg">Button</Button>
          </div>
          <div className="flex items-end gap-2">
            <Button size="sm" variant="secondary">
              Button
            </Button>
            <Button variant="secondary">Button</Button>
            <Button size="lg" variant="secondary">
              Button
            </Button>
          </div>
          <div className="flex items-end gap-2">
            <Button size="sm" variant="outline">
              Button
            </Button>
            <Button variant="outline">Button</Button>
            <Button size="lg" variant="outline">
              Button
            </Button>
          </div>
          <div className="flex items-end gap-2">
            <Button size="sm" variant="ghost">
              Button
            </Button>
            <Button variant="ghost">Button</Button>
            <Button size="lg" variant="ghost">
              Button
            </Button>
          </div>
        </div>
        <div className="flex items-end gap-6">
          <div className="flex items-end gap-2">
            <Button size="sm">
              <CircleDotIcon />
              Button
            </Button>
            <Button>
              <CircleDotIcon />
              Button
            </Button>
            <Button size="lg">
              <CircleDotIcon />
              Button
            </Button>
          </div>
          <div className="flex items-end gap-2">
            <Button size="sm" variant="secondary">
              <CircleDotIcon />
              Button
            </Button>
            <Button variant="secondary">
              <CircleDotIcon />
              Button
            </Button>
            <Button size="lg" variant="secondary">
              <CircleDotIcon />
              Button
            </Button>
          </div>
          <div className="flex items-end gap-2">
            <Button size="sm" variant="outline">
              <CircleDotIcon />
              Button
            </Button>
            <Button variant="outline">
              <CircleDotIcon />
              Button
            </Button>
            <Button size="lg" variant="outline">
              <CircleDotIcon />
              Button
            </Button>
          </div>
          <div className="flex items-end gap-2">
            <Button size="sm" variant="ghost">
              <CircleDotIcon />
              Button
            </Button>
            <Button variant="ghost">
              <CircleDotIcon />
              Button
            </Button>
            <Button size="lg" variant="ghost">
              <CircleDotIcon />
              Button
            </Button>
          </div>
        </div>
        <div className="flex items-end gap-6">
          <div className="flex items-end gap-2">
            <Button size="icon-sm">
              <CircleDotIcon />
            </Button>
            <Button size="icon">
              <CircleDotIcon />
            </Button>
            <Button size="icon-lg">
              <CircleDotIcon />
            </Button>
          </div>
          <div className="flex items-end gap-2">
            <Button size="icon-sm" variant="secondary">
              <CircleDotIcon />
            </Button>
            <Button size="icon" variant="secondary">
              <CircleDotIcon />
            </Button>
            <Button size="icon-lg" variant="secondary">
              <CircleDotIcon />
            </Button>
          </div>
          <div className="flex items-end gap-2">
            <Button size="icon-sm" variant="outline">
              <CircleDotIcon />
            </Button>
            <Button size="icon" variant="outline">
              <CircleDotIcon />
            </Button>
            <Button size="icon-lg" variant="outline">
              <CircleDotIcon />
            </Button>
          </div>
          <div className="flex items-end gap-2">
            <Button size="icon-sm" variant="ghost">
              <CircleDotIcon />
            </Button>
            <Button size="icon" variant="ghost">
              <CircleDotIcon />
            </Button>
            <Button size="icon-lg" variant="ghost">
              <CircleDotIcon />
            </Button>
          </div>
        </div>
      </div>
      <div className="space-y-8 p-12">
        <div className="flex items-center gap-2">
          <Button shape="squircle">Button</Button>
          <Button shape="squircle" variant="secondary">
            Button
          </Button>
          <Button shape="squircle" variant="outline">
            Button
          </Button>
          <Button shape="squircle" variant="ghost">
            Button
          </Button>
        </div>
        <div className="flex items-end gap-6">
          <div className="flex items-end gap-2">
            <Button shape="squircle" size="sm">
              Button
            </Button>
            <Button shape="squircle">Button</Button>
            <Button shape="squircle" size="lg">
              Button
            </Button>
          </div>
          <div className="flex items-end gap-2">
            <Button shape="squircle" size="sm" variant="secondary">
              Button
            </Button>
            <Button shape="squircle" variant="secondary">
              Button
            </Button>
            <Button shape="squircle" size="lg" variant="secondary">
              Button
            </Button>
          </div>
          <div className="flex items-end gap-2">
            <Button shape="squircle" size="sm" variant="outline">
              Button
            </Button>
            <Button shape="squircle" variant="outline">
              Button
            </Button>
            <Button shape="squircle" size="lg" variant="outline">
              Button
            </Button>
          </div>
          <div className="flex items-end gap-2">
            <Button shape="squircle" size="sm" variant="ghost">
              Button
            </Button>
            <Button shape="squircle" variant="ghost">
              Button
            </Button>
            <Button shape="squircle" size="lg" variant="ghost">
              Button
            </Button>
          </div>
        </div>
        <div className="flex items-end gap-6">
          <div className="flex items-end gap-2">
            <Button shape="squircle" size="sm">
              <CircleDotIcon />
              Button
            </Button>
            <Button shape="squircle">
              <CircleDotIcon />
              Button
            </Button>
            <Button shape="squircle" size="lg">
              <CircleDotIcon />
              Button
            </Button>
          </div>
          <div className="flex items-end gap-2">
            <Button shape="squircle" size="sm" variant="secondary">
              <CircleDotIcon />
              Button
            </Button>
            <Button shape="squircle" variant="secondary">
              <CircleDotIcon />
              Button
            </Button>
            <Button shape="squircle" size="lg" variant="secondary">
              <CircleDotIcon />
              Button
            </Button>
          </div>
          <div className="flex items-end gap-2">
            <Button shape="squircle" size="sm" variant="outline">
              <CircleDotIcon />
              Button
            </Button>
            <Button shape="squircle" variant="outline">
              <CircleDotIcon />
              Button
            </Button>
            <Button shape="squircle" size="lg" variant="outline">
              <CircleDotIcon />
              Button
            </Button>
          </div>
          <div className="flex items-end gap-2">
            <Button shape="squircle" size="sm" variant="ghost">
              <CircleDotIcon />
              Button
            </Button>
            <Button shape="squircle" variant="ghost">
              <CircleDotIcon />
              Button
            </Button>
            <Button shape="squircle" size="lg" variant="ghost">
              <CircleDotIcon />
              Button
            </Button>
          </div>
        </div>
        <div className="flex items-end gap-6">
          <div className="flex items-end gap-2">
            <Button shape="squircle" size="icon-sm">
              <CircleDotIcon />
            </Button>
            <Button shape="squircle" size="icon">
              <CircleDotIcon />
            </Button>
            <Button shape="squircle" size="icon-lg">
              <CircleDotIcon />
            </Button>
          </div>
          <div className="flex items-end gap-2">
            <Button shape="squircle" size="icon-sm" variant="secondary">
              <CircleDotIcon />
            </Button>
            <Button shape="squircle" size="icon" variant="secondary">
              <CircleDotIcon />
            </Button>
            <Button shape="squircle" size="icon-lg" variant="secondary">
              <CircleDotIcon />
            </Button>
          </div>
          <div className="flex items-end gap-2">
            <Button shape="squircle" size="icon-sm" variant="outline">
              <CircleDotIcon />
            </Button>
            <Button shape="squircle" size="icon" variant="outline">
              <CircleDotIcon />
            </Button>
            <Button shape="squircle" size="icon-lg" variant="outline">
              <CircleDotIcon />
            </Button>
          </div>
          <div className="flex items-end gap-2">
            <Button shape="squircle" size="icon-sm" variant="ghost">
              <CircleDotIcon />
            </Button>
            <Button shape="squircle" size="icon" variant="ghost">
              <CircleDotIcon />
            </Button>
            <Button shape="squircle" size="icon-lg" variant="ghost">
              <CircleDotIcon />
            </Button>
          </div>
        </div>
      </div>
      <div className="space-y-8 p-12">
        <div className="flex items-center gap-2">
          <Button shape="pill">Button</Button>
          <Button shape="pill" variant="secondary">
            Button
          </Button>
          <Button shape="pill" variant="outline">
            Button
          </Button>
          <Button shape="pill" variant="ghost">
            Button
          </Button>
        </div>
        <div className="flex items-end gap-6">
          <div className="flex items-end gap-2">
            <Button shape="pill" size="sm">
              Button
            </Button>
            <Button shape="pill">Button</Button>
            <Button shape="pill" size="lg">
              Button
            </Button>
          </div>
          <div className="flex items-end gap-2">
            <Button shape="pill" size="sm" variant="secondary">
              Button
            </Button>
            <Button shape="pill" variant="secondary">
              Button
            </Button>
            <Button shape="pill" size="lg" variant="secondary">
              Button
            </Button>
          </div>
          <div className="flex items-end gap-2">
            <Button shape="pill" size="sm" variant="outline">
              Button
            </Button>
            <Button shape="pill" variant="outline">
              Button
            </Button>
            <Button shape="pill" size="lg" variant="outline">
              Button
            </Button>
          </div>
          <div className="flex items-end gap-2">
            <Button shape="pill" size="sm" variant="ghost">
              Button
            </Button>
            <Button shape="pill" variant="ghost">
              Button
            </Button>
            <Button shape="pill" size="lg" variant="ghost">
              Button
            </Button>
          </div>
        </div>
        <div className="flex items-end gap-6">
          <div className="flex items-end gap-2">
            <Button shape="pill" size="sm">
              <CircleDotIcon />
              Button
            </Button>
            <Button shape="pill">
              <CircleDotIcon />
              Button
            </Button>
            <Button shape="pill" size="lg">
              <CircleDotIcon />
              Button
            </Button>
          </div>
          <div className="flex items-end gap-2">
            <Button shape="pill" size="sm" variant="secondary">
              <CircleDotIcon />
              Button
            </Button>
            <Button shape="pill" variant="secondary">
              <CircleDotIcon />
              Button
            </Button>
            <Button shape="pill" size="lg" variant="secondary">
              <CircleDotIcon />
              Button
            </Button>
          </div>
          <div className="flex items-end gap-2">
            <Button shape="pill" size="sm" variant="outline">
              <CircleDotIcon />
              Button
            </Button>
            <Button shape="pill" variant="outline">
              <CircleDotIcon />
              Button
            </Button>
            <Button shape="pill" size="lg" variant="outline">
              <CircleDotIcon />
              Button
            </Button>
          </div>
          <div className="flex items-end gap-2">
            <Button shape="pill" size="sm" variant="ghost">
              <CircleDotIcon />
              Button
            </Button>
            <Button shape="pill" variant="ghost">
              <CircleDotIcon />
              Button
            </Button>
            <Button shape="pill" size="lg" variant="ghost">
              <CircleDotIcon />
              Button
            </Button>
          </div>
        </div>
        <div className="flex items-end gap-6">
          <div className="flex items-end gap-2">
            <Button shape="pill" size="icon-sm">
              <CircleDotIcon />
            </Button>
            <Button shape="pill" size="icon">
              <CircleDotIcon />
            </Button>
            <Button shape="pill" size="icon-lg">
              <CircleDotIcon />
            </Button>
          </div>
          <div className="flex items-end gap-2">
            <Button shape="pill" size="icon-sm" variant="secondary">
              <CircleDotIcon />
            </Button>
            <Button shape="pill" size="icon" variant="secondary">
              <CircleDotIcon />
            </Button>
            <Button shape="pill" size="icon-lg" variant="secondary">
              <CircleDotIcon />
            </Button>
          </div>
          <div className="flex items-end gap-2">
            <Button shape="pill" size="icon-sm" variant="outline">
              <CircleDotIcon />
            </Button>
            <Button shape="pill" size="icon" variant="outline">
              <CircleDotIcon />
            </Button>
            <Button shape="pill" size="icon-lg" variant="outline">
              <CircleDotIcon />
            </Button>
          </div>
          <div className="flex items-end gap-2">
            <Button shape="pill" size="icon-sm" variant="ghost">
              <CircleDotIcon />
            </Button>
            <Button shape="pill" size="icon" variant="ghost">
              <CircleDotIcon />
            </Button>
            <Button shape="pill" size="icon-lg" variant="ghost">
              <CircleDotIcon />
            </Button>
          </div>
        </div>
      </div>
      <div className="space-y-8 p-12">
        <div className="flex items-center gap-2">
          <Button shape="square">Button</Button>
          <Button shape="square" variant="secondary">
            Button
          </Button>
          <Button shape="square" variant="outline">
            Button
          </Button>
          <Button shape="square" variant="ghost">
            Button
          </Button>
        </div>
        <div className="flex items-end gap-6">
          <div className="flex items-end gap-2">
            <Button shape="square" size="sm">
              Button
            </Button>
            <Button shape="square">Button</Button>
            <Button shape="square" size="lg">
              Button
            </Button>
          </div>
          <div className="flex items-end gap-2">
            <Button shape="square" size="sm" variant="secondary">
              Button
            </Button>
            <Button shape="square" variant="secondary">
              Button
            </Button>
            <Button shape="square" size="lg" variant="secondary">
              Button
            </Button>
          </div>
          <div className="flex items-end gap-2">
            <Button shape="square" size="sm" variant="outline">
              Button
            </Button>
            <Button shape="square" variant="outline">
              Button
            </Button>
            <Button shape="square" size="lg" variant="outline">
              Button
            </Button>
          </div>
          <div className="flex items-end gap-2">
            <Button shape="square" size="sm" variant="ghost">
              Button
            </Button>
            <Button shape="square" variant="ghost">
              Button
            </Button>
            <Button shape="square" size="lg" variant="ghost">
              Button
            </Button>
          </div>
        </div>
        <div className="flex items-end gap-6">
          <div className="flex items-end gap-2">
            <Button shape="square" size="sm">
              <CircleDotIcon />
              Button
            </Button>
            <Button shape="square">
              <CircleDotIcon />
              Button
            </Button>
            <Button shape="square" size="lg">
              <CircleDotIcon />
              Button
            </Button>
          </div>
          <div className="flex items-end gap-2">
            <Button shape="square" size="sm" variant="secondary">
              <CircleDotIcon />
              Button
            </Button>
            <Button shape="square" variant="secondary">
              <CircleDotIcon />
              Button
            </Button>
            <Button shape="square" size="lg" variant="secondary">
              <CircleDotIcon />
              Button
            </Button>
          </div>
          <div className="flex items-end gap-2">
            <Button shape="square" size="sm" variant="outline">
              <CircleDotIcon />
              Button
            </Button>
            <Button shape="square" variant="outline">
              <CircleDotIcon />
              Button
            </Button>
            <Button shape="square" size="lg" variant="outline">
              <CircleDotIcon />
              Button
            </Button>
          </div>
          <div className="flex items-end gap-2">
            <Button shape="square" size="sm" variant="ghost">
              <CircleDotIcon />
              Button
            </Button>
            <Button shape="square" variant="ghost">
              <CircleDotIcon />
              Button
            </Button>
            <Button shape="square" size="lg" variant="ghost">
              <CircleDotIcon />
              Button
            </Button>
          </div>
        </div>
        <div className="flex items-end gap-6">
          <div className="flex items-end gap-2">
            <Button shape="square" size="icon-sm">
              <CircleDotIcon />
            </Button>
            <Button shape="square" size="icon">
              <CircleDotIcon />
            </Button>
            <Button shape="square" size="icon-lg">
              <CircleDotIcon />
            </Button>
          </div>
          <div className="flex items-end gap-2">
            <Button shape="square" size="icon-sm" variant="secondary">
              <CircleDotIcon />
            </Button>
            <Button shape="square" size="icon" variant="secondary">
              <CircleDotIcon />
            </Button>
            <Button shape="square" size="icon-lg" variant="secondary">
              <CircleDotIcon />
            </Button>
          </div>
          <div className="flex items-end gap-2">
            <Button shape="square" size="icon-sm" variant="outline">
              <CircleDotIcon />
            </Button>
            <Button shape="square" size="icon" variant="outline">
              <CircleDotIcon />
            </Button>
            <Button shape="square" size="icon-lg" variant="outline">
              <CircleDotIcon />
            </Button>
          </div>
          <div className="flex items-end gap-2">
            <Button shape="square" size="icon-sm" variant="ghost">
              <CircleDotIcon />
            </Button>
            <Button shape="square" size="icon" variant="ghost">
              <CircleDotIcon />
            </Button>
            <Button shape="square" size="icon-lg" variant="ghost">
              <CircleDotIcon />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
