import { codeToHtml } from "shiki";

export async function highlightCode(code: string, lang: string = "tsx") {
  const html = await codeToHtml(code.trimEnd(), {
    lang,
    themes: {
      light: "github-light-default",
      dark: "github-dark",
    },
    defaultColor: false,
    transformers: [
      {
        pre(node) {
          node.properties["class"] =
            "no-scrollbar overflow-x-auto py-4 text-sm leading-relaxed";
        },
        code(node) {
          node.properties["class"] = "grid";
          node.properties["data-line-numbers"] = "";
        },
        line(node) {
          node.properties["class"] = "min-h-[1lh] px-4";
        },
      },
    ],
  });

  return html;
}
