import { DocsSidebar } from "@/components/docs-sidebar";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container flex">
      <DocsSidebar />
      <div className="size-full flex-1">{children}</div>
    </div>
  );
}
