import * as React from "react";

import { CopyButton } from "@/components/copy-button";

import { highlightCode } from "@/lib/highlight-code";
import { cn } from "@/lib/utils";
import { getRegistryItem } from "@/registry";
import { promises as fs } from "fs";
import path from "path";

interface ComponentSourceProps extends React.ComponentProps<"figure"> {
  name?: string;
  src?: string;
  title?: string;
  withHeader?: boolean;
}

export async function ComponentSource({
  name,
  src,
  title,
  withHeader,
  className,
  ...props
}: ComponentSourceProps) {
  let code = "";
  let filePath = "";

  if (name) {
    const item = getRegistryItem(name);
    if (item) {
      filePath = item.file;
    }
  } else if (src) {
    filePath = src;
  }

  if (filePath) {
    const absolutePath = path.join(process.cwd(), filePath);
    try {
      code = await fs.readFile(absolutePath, "utf-8");
    } catch {
      code = `// Could not load source file: ${filePath}`;
    }
  }

  const ext = filePath.split(".").pop() || "tsx";
  const highlightedCode = await highlightCode(code, ext);

  return (
    <figure
      data-slot="component-source"
      data-rehype-pretty-code-figure=""
      className={cn(
        "overflow-hidden",
        {
          "relative my-4 rounded-[if(style(--shape:squircle):1.75rem;else:var(--radius-xl))] border [corner-shape:var(--shape)]":
            withHeader,
        },
        className,
      )}
      {...props}
    >
      {withHeader && (
        <div className="flex items-center justify-between gap-4 border-b p-1.5">
          <div className="text-foreground px-2.5 font-mono text-sm">
            {title}
          </div>
          <CopyButton value={code} className="relative top-0 right-0" />
        </div>
      )}
      {!withHeader && <CopyButton value={code} />}
      <div
        className={cn({
          "no-scrollbar max-h-120 overflow-auto": withHeader,
        })}
      >
        <div dangerouslySetInnerHTML={{ __html: highlightedCode }} />
      </div>
    </figure>
  );
}
