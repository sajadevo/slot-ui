import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/config";
import { source } from "@/lib/source";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = source.getPages();

  const docRoutes = pages.map((page) => ({
    url: `${siteConfig.url}${page.url}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
    },
    ...docRoutes,
  ];
}
