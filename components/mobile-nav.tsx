"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogPopup,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

import { docsRegistry } from "@/lib/docs-registry";
import { usePathname } from "next/navigation";

export function MobileNav() {
  const pathname = usePathname();

  return (
    <Dialog>
      <DialogTrigger
        render={<Button size="sm" variant="ghost" className="lg:hidden" />}
      >
        <MenuIcon />
        Menu
      </DialogTrigger>
      <DialogPopup className="h-screen w-screen grid lg:hidden max-w-screen rounded-none pr-12 *:data-[slot=dialog-close]:z-20">
        <div className="no-scrollbar flex min-h-0 flex-1 flex-col gap-2.5 overflow-x-hidden overflow-y-auto">
          <div className="from-background via-background/80 to-background/50 sticky -top-1 z-10 h-8 shrink-0 bg-linear-to-b blur-xs" />
          {docsRegistry.map(({ title, registry }) => {
            return (
              <div key={title} className="mb-6 space-y-2 px-2.5">
                <div className="text-muted-foreground text-sm font-medium">
                  {title}
                </div>
                <ul className="-mx-2.5 space-y-0.5">
                  {registry.map(({ label, href }) => (
                    <li key={href}>
                      <DialogClose
                        nativeButton={false}
                        render={
                          <Button
                            size="lg"
                            variant="ghost"
                            nativeButton={false}
                            render={<Link href={href} />}
                            data-active={pathname === href}
                            className="data-[active=true]:bg-accent w-full justify-start px-2.5 text-start"
                          />
                        }
                      >
                        {label}
                      </DialogClose>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
          <div className="from-background via-background/80 to-background/50 sticky -bottom-1 z-10 h-16 shrink-0 bg-linear-to-t blur-xs" />
        </div>
      </DialogPopup>
    </Dialog>
  );
}
