"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/config";

export function MainNav({ className, ...props }: React.ComponentProps<"nav">) {
  const pathname = usePathname();
  const navItems = siteConfig.navItems;

  return (
    <nav className={cn("hidden lg:flex items-center gap-px", className)} {...props}>
      {navItems.map(({ href, label }) => (
        <Button
          key={href}
          size="sm"
          variant="ghost"
          className="px-2.5"
          nativeButton={false}
          render={
            <Link
              href={href}
              data-active={pathname === href}
              className="relative items-center"
            />
          }
        >
          {label}
        </Button>
      ))}
    </nav>
  );
}
