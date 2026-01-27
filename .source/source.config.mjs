// source.config.ts
import rehypePrettyCode from "rehype-pretty-code";
import { defineConfig, defineDocs } from "fumadocs-mdx/config";
var docs = defineDocs({
  dir: "content/docs"
});
var source_config_default = defineConfig({
  mdxOptions: {
    rehypePlugins: (plugins) => {
      plugins.shift();
      plugins.push([
        rehypePrettyCode,
        {
          theme: {
            dark: "github-dark",
            light: "github-light-default"
          }
        }
      ]);
      return plugins;
    }
  }
});
export {
  source_config_default as default,
  docs
};
