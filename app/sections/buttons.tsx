"use client";

import { Button } from "@/components/ui/button";

import { CircleDotIcon } from "lucide-react";

export function Buttons() {
  return (
    <section className="divide-y divide-dashed border-b">
      <div className="space-y-8 p-12">
        <div className="flex items-center gap-2">
          <Button>Button</Button>
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
    </section>
  );
}
