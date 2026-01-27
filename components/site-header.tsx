import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MainNav } from "@/components/main-nav";
import { GitHubLink } from "@/components/github-link";
import { ModeSwitcher } from "@/components/mode-switcher";

import { siteConfig } from "@/lib/config";

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-50 w-full">
      <div className="container flex h-(--header-height) items-center">
        <Button
          size="icon-sm"
          variant="ghost"
          nativeButton={false}
          render={<Link href="/" />}
        >
          <span className="bg-primary size-5 rounded-sm [corner-shape:var(--shape)]" />
          <span className="sr-only">{siteConfig.name}</span>
        </Button>
        <Separator
          orientation="vertical"
          className="mr-1 ml-2 h-4 data-[orientation=vertical]:self-center"
        />
        <MainNav />
        <div className="ml-auto flex items-center justify-end gap-2">
          <GitHubLink />
          <Separator
            orientation="vertical"
            className="h-4 data-[orientation=vertical]:self-center"
          />
          <ModeSwitcher />
        </div>
      </div>
    </header>
  );
}
