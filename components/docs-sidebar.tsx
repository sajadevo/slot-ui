"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import { usePathname } from "next/navigation";
import { docsRegistry, type RegistryItem } from "@/lib/docs-registry";

const tagConfig = {
  new: { label: "New", variant: "info" as const },
  updated: { label: "Updated", variant: "warning" as const },
};

function SidebarTag({ tag }: { tag: NonNullable<RegistryItem["tag"]> }) {
  const { label, variant } = tagConfig[tag];
  return (
    <Badge variant={variant} className="ml-auto">
      {label}
    </Badge>
  );
}

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <div className="sticky top-(--header-height) z-30 hidden lg:flex h-[calc(100svh-var(--header-height))] basis-(--sidebar-width) flex-col overscroll-none bg-transparent">
      <div className="no-scrollbar flex min-h-0 flex-1 flex-col gap-2.5 overflow-x-hidden overflow-y-auto">
        <div className="from-background via-background/80 to-background/50 sticky -top-1 z-10 h-8 shrink-0 bg-linear-to-b blur-xs" />
        {docsRegistry.map(({ title, registry }) => {
          return (
            <div key={title} className="mb-6 space-y-2 px-2.5">
              <div className="text-muted-foreground text-sm font-medium">
                {title}
              </div>
              <ul className="-mx-2.5 space-y-0.5">
                {registry.map(({ label, href, tag }) => (
                  <li key={href}>
                    <Button
                      size="sm"
                      variant="ghost"
                      nativeButton={false}
                      render={<Link href={href} />}
                      data-active={pathname === href}
                      className="data-[active=true]:bg-accent w-full justify-start px-2.5 text-start"
                    >
                      {label}
                      {tag && <SidebarTag tag={tag} />}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
        <div className="from-background via-background/80 to-background/50 sticky -bottom-1 z-10 h-16 shrink-0 bg-linear-to-t blur-xs" />
      </div>
    </div>
  );
}
