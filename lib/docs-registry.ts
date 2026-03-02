export type RegistryItem = {
  label: string;
  href: string;
  tag?: "new" | "updated";
};

const overviewRegistry: RegistryItem[] = [
  {
    label: "Introduction",
    href: "/docs",
  },
  {
    label: "Get Started",
    href: "/docs/get-started",
  },
];

const componentsRegistry: RegistryItem[] = [
  {
    label: "Accordion",
    href: "/docs/components/accordion",
  },
  {
    label: "Alert",
    href: "/docs/components/alert",
  },
  {
    label: "Alert Dialog",
    href: "/docs/components/alert-dialog",
  },
  {
    label: "Avatar",
    href: "/docs/components/avatar",
  },
  {
    label: "Badge",
    href: "/docs/components/badge",
  },
  {
    label: "Button",
    href: "/docs/components/button",
  },
  {
    label: "Card",
    href: "/docs/components/card",
  },
  {
    label: "Checkbox",
    href: "/docs/components/checkbox",
  },
  {
    label: "Checkbox Group",
    href: "/docs/components/checkbox-group",
  },
  {
    label: "Collapsible",
    href: "/docs/components/collapsible",
  },
  {
    label: "Context Menu",
    href: "/docs/components/context-menu",
    tag: "new",
  },
  {
    label: "Dialog",
    href: "/docs/components/dialog",
  },
  {
    label: "Field",
    href: "/docs/components/field",
  },
  {
    label: "Fieldset",
    href: "/docs/components/fieldset",
  },
  {
    label: "Form",
    href: "/docs/components/form",
  },
  {
    label: "Input",
    href: "/docs/components/input",
  },
  {
    label: "Label",
    href: "/docs/components/label",
  },
  {
    label: "Menu",
    href: "/docs/components/menu",
    tag: "new",
  },
  {
    label: "Meter",
    href: "/docs/components/meter",
    tag: "new",
  },
  {
    label: "Number Field",
    href: "/docs/components/number-field",
    tag: "new",
  },
  {
    label: "Popover",
    href: "/docs/components/popover",
  },
  {
    label: "Progress",
    href: "/docs/components/progress",
  },
  {
    label: "Radio",
    href: "/docs/components/radio",
  },
  {
    label: "Select",
    href: "/docs/components/select",
    tag: "new",
  },
  {
    label: "Separator",
    href: "/docs/components/separator",
  },
  {
    label: "Skeleton",
    href: "/docs/components/skeleton",
  },
  {
    label: "Slider",
    href: "/docs/components/slider",
  },
  {
    label: "Switch",
    href: "/docs/components/switch",
  },
  {
    label: "Tabs",
    href: "/docs/components/tabs",
  },
  {
    label: "Textarea",
    href: "/docs/components/textarea",
  },
  {
    label: "Toast",
    href: "/docs/components/toast",
    tag: "new",
  },
  {
    label: "Toggle",
    href: "/docs/components/toggle",
  },
  {
    label: "Toggle Group",
    href: "/docs/components/toggle-group",
  },
  {
    label: "Tooltip",
    href: "/docs/components/tooltip",
  },
];

export const docsRegistry = [
  {
    title: "Overview",
    registry: overviewRegistry,
  },
  {
    title: "Components",
    registry: componentsRegistry,
  },
];
