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
                <div className="flex items-center gap-2">
                  {neighbours.previous && (
                    <Button
                      size="icon-sm"
                      variant="secondary"
                      className="ml-auto"
                      nativeButton={false}
                      render={<Link href={neighbours.previous.url} />}
                    >
                      <ArrowLeftIcon />
                      <span className="sr-only">Previous</span>
                    </Button>
                  )}
                  {neighbours.next && (
                    <Button
                      size="icon-sm"
                      variant="secondary"
                      className="ml-auto"
                      nativeButton={false}
                      render={<Link href={neighbours.next.url} />}
                    >
                      <span className="sr-only">Next</span>
                      <ArrowRightIcon />
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
          <div className="w-full flex-1 *:data-[slot=alert]:first:mt-0 sm:pb-0 pb-24">
            <MDX components={mdxComponents} />
          </div>
          <div className="hidden sm:flex items-center justify-between py-10">
            {neighbours.previous && (
              <Button
                variant="secondary"
                nativeButton={false}
                render={<Link href={neighbours.previous.url} />}
              >
                <ArrowLeftIcon />
                {neighbours.previous.name}
              </Button>
            )}
            {neighbours.next && (
              <Button
                variant="secondary"
                nativeButton={false}
                className="ml-auto"
                render={<Link href={neighbours.next.url} />}
              >
                {neighbours.next.name}
                <ArrowRightIcon />
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="no-scrollbar sticky top-(--header-height) z-30 ml-auto hidden h-[calc(100svh-var(--header-height))] w-64 flex-col overflow-y-auto py-8 xl:flex">
        {doc.toc?.length ? <DocsTableOfContents toc={doc.toc} /> : null}
      </div>
    </div>
  );
}
