import { DocsTableOfContents } from "@/components/docs-toc";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

import { source } from "@/lib/source";
import { mdxComponents } from "@/mdx-components";
import { findNeighbour } from "fumadocs-core/page-tree";
import { notFound } from "next/navigation";

export default async function Page(props: {
  params: Promise<{ slug: string[] }>;
}) {
  const params = await props.params;

  const page = source.getPage(params.slug);

  if (!page) {
    notFound();
  }

  const doc = page.data;
  const MDX = doc.body;
  const neighbours = findNeighbour(source.pageTree, page.url);

  return (
    <div className="flex w-full items-stretch">
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="text-foreground mx-auto flex w-full max-w-2xl min-w-0 flex-1 flex-col gap-6 py-9">
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <div className="flex items-start justify-between">
                <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight sm:text-3xl xl:text-3xl">
                  {doc.title}
                </h1>
                <div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
                  {/* <DocsCopyPage page={raw} url={absoluteUrl(page.url)} /> */}
                  {neighbours.previous && (
                    <Button
                      variant="secondary"
                      size="icon"
                      className="extend-touch-target ml-auto size-8 shadow-none md:size-7"
                    >
                      <Link href={neighbours.previous.url}>
                        <ArrowLeftIcon />
                        <span className="sr-only">Previous</span>
                      </Link>
                    </Button>
                  )}
                  {neighbours.next && (
                    <Button
                      variant="secondary"
                      size="icon"
                      className="extend-touch-target size-8 shadow-none md:size-7"
                    >
                      <Link href={neighbours.next.url}>
                        <span className="sr-only">Next</span>
                        <ArrowRightIcon />
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
              {doc.description && (
                <p className="text-muted-foreground text-base text-balance">
                  {doc.description}
                </p>
              )}
            </div>
          </div>
          <div className="w-full flex-1 *:data-[slot=alert]:first:mt-0">
            <MDX components={mdxComponents} />
          </div>
        </div>
      </div>
      <div className="no-scrollbar sticky top-(--header-height) z-30 ml-auto hidden h-[calc(100svh-var(--header-height))] w-64 flex-col overflow-y-auto py-8 lg:flex">
        {doc.toc?.length ? <DocsTableOfContents toc={doc.toc} /> : null}
      </div>
    </div>
  );
}
