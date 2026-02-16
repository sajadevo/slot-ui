import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="py-10 text-center">
      <div className="container text-muted-foreground text-sm">
        Built by{" "}
        <Link
          href="https://x.com/sajadevo_"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground font-medium underline underline-offset-4"
        >
          Sajad
        </Link>
        . The source code is available on{" "}
        <Link
          href="https://github.com/sajadevo/slot-ui"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground font-medium underline underline-offset-4"
        >
          GitHub
        </Link>
        .
      </div>
    </footer>
  );
}
