import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

import { siteConfig } from "@/lib/config";

export default function Home() {
  return (
    <div className="container flex flex-1 flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        {siteConfig.name}
      </h1>
      <p className="text-muted-foreground mt-4 max-w-lg text-lg text-balance">
        {siteConfig.description}
      </p>
      <Button
        className="mt-8"
        size="lg"
        nativeButton={false}
        render={<Link href="/docs/get-started" />}
      >
        Get Started
        <ArrowRightIcon />
      </Button>
    </div>
  );
}
