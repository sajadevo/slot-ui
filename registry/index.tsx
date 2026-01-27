import * as React from "react";

type RegistryItem = {
  name: string;
  component: React.LazyExoticComponent<React.ComponentType>;
  file: string;
};

const examples: Record<string, RegistryItem> = {
  button: {
    name: "button",
    component: React.lazy(() =>
      import("@/components/ui/button").then((mod) => ({ default: mod.Button })),
    ),
    file: "components/ui/button.tsx",
  },
  "button-demo": {
    name: "button-demo",
    component: React.lazy(
      () => import("@/registry/examples/button/button-demo"),
    ),
    file: "registry/examples/button/button-demo.tsx",
  },
  "button-secondary": {
    name: "button-secondary",
    component: React.lazy(
      () => import("@/registry/examples/button/button-secondary"),
    ),
    file: "registry/examples/button/button-secondary.tsx",
  },
  "button-outline": {
    name: "button-outline",
    component: React.lazy(
      () => import("@/registry/examples/button/button-outline"),
    ),
    file: "registry/examples/button/button-outline.tsx",
  },
  "button-ghost": {
    name: "button-ghost",
    component: React.lazy(
      () => import("@/registry/examples/button/button-ghost"),
    ),
    file: "registry/examples/button/button-ghost.tsx",
  },
  "button-destructive": {
    name: "button-destructive",
    component: React.lazy(
      () => import("@/registry/examples/button/button-destructive"),
    ),
    file: "registry/examples/button/button-destructive.tsx",
  },
  "button-with-icon": {
    name: "button-with-icon",
    component: React.lazy(
      () => import("@/registry/examples/button/button-with-icon"),
    ),
    file: "registry/examples/button/button-with-icon.tsx",
  },
};

export function getRegistryItem(name: string): RegistryItem | undefined {
  return examples[name];
}

export function getRegistryComponent(
  name: string,
): React.LazyExoticComponent<React.ComponentType> | undefined {
  return examples[name]?.component;
}

export { examples };
