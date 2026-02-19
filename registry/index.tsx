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
  "button-sm": {
    name: "button-sm",
    component: React.lazy(
      () => import("@/registry/examples/button/button-sm"),
    ),
    file: "registry/examples/button/button-sm.tsx",
  },
  "button-lg": {
    name: "button-lg",
    component: React.lazy(
      () => import("@/registry/examples/button/button-lg"),
    ),
    file: "registry/examples/button/button-lg.tsx",
  },
  "button-disabled": {
    name: "button-disabled",
    component: React.lazy(
      () => import("@/registry/examples/button/button-disabled"),
    ),
    file: "registry/examples/button/button-disabled.tsx",
  },
  "button-icon": {
    name: "button-icon",
    component: React.lazy(
      () => import("@/registry/examples/button/button-icon"),
    ),
    file: "registry/examples/button/button-icon.tsx",
  },
  "button-icon-sm": {
    name: "button-icon-sm",
    component: React.lazy(
      () => import("@/registry/examples/button/button-icon-sm"),
    ),
    file: "registry/examples/button/button-icon-sm.tsx",
  },
  "button-icon-lg": {
    name: "button-icon-lg",
    component: React.lazy(
      () => import("@/registry/examples/button/button-icon-lg"),
    ),
    file: "registry/examples/button/button-icon-lg.tsx",
  },
  "button-with-link": {
    name: "button-with-link",
    component: React.lazy(
      () => import("@/registry/examples/button/button-with-link"),
    ),
    file: "registry/examples/button/button-with-link.tsx",
  },
  "button-loading": {
    name: "button-loading",
    component: React.lazy(
      () => import("@/registry/examples/button/button-loading"),
    ),
    file: "registry/examples/button/button-loading.tsx",
  },
  // Badge
  badge: {
    name: "badge",
    component: React.lazy(() =>
      import("@/components/ui/badge").then((mod) => ({ default: mod.Badge })),
    ),
    file: "components/ui/badge.tsx",
  },
  "badge-demo": {
    name: "badge-demo",
    component: React.lazy(
      () => import("@/registry/examples/badge/badge-demo"),
    ),
    file: "registry/examples/badge/badge-demo.tsx",
  },
  "badge-secondary": {
    name: "badge-secondary",
    component: React.lazy(
      () => import("@/registry/examples/badge/badge-secondary"),
    ),
    file: "registry/examples/badge/badge-secondary.tsx",
  },
  "badge-destructive": {
    name: "badge-destructive",
    component: React.lazy(
      () => import("@/registry/examples/badge/badge-destructive"),
    ),
    file: "registry/examples/badge/badge-destructive.tsx",
  },
  "badge-success": {
    name: "badge-success",
    component: React.lazy(
      () => import("@/registry/examples/badge/badge-success"),
    ),
    file: "registry/examples/badge/badge-success.tsx",
  },
  "badge-info": {
    name: "badge-info",
    component: React.lazy(
      () => import("@/registry/examples/badge/badge-info"),
    ),
    file: "registry/examples/badge/badge-info.tsx",
  },
  "badge-warning": {
    name: "badge-warning",
    component: React.lazy(
      () => import("@/registry/examples/badge/badge-warning"),
    ),
    file: "registry/examples/badge/badge-warning.tsx",
  },
  "badge-outline": {
    name: "badge-outline",
    component: React.lazy(
      () => import("@/registry/examples/badge/badge-outline"),
    ),
    file: "registry/examples/badge/badge-outline.tsx",
  },
  "badge-ghost": {
    name: "badge-ghost",
    component: React.lazy(
      () => import("@/registry/examples/badge/badge-ghost"),
    ),
    file: "registry/examples/badge/badge-ghost.tsx",
  },
  "badge-with-icon": {
    name: "badge-with-icon",
    component: React.lazy(
      () => import("@/registry/examples/badge/badge-with-icon"),
    ),
    file: "registry/examples/badge/badge-with-icon.tsx",
  },
  "badge-with-link": {
    name: "badge-with-link",
    component: React.lazy(
      () => import("@/registry/examples/badge/badge-with-link"),
    ),
    file: "registry/examples/badge/badge-with-link.tsx",
  },
  "badge-loading": {
    name: "badge-loading",
    component: React.lazy(
      () => import("@/registry/examples/badge/badge-loading"),
    ),
    file: "registry/examples/badge/badge-loading.tsx",
  },
  "badge-disabled": {
    name: "badge-disabled",
    component: React.lazy(
      () => import("@/registry/examples/badge/badge-disabled"),
    ),
    file: "registry/examples/badge/badge-disabled.tsx",
  },
  // Alert
  alert: {
    name: "alert",
    component: React.lazy(() =>
      import("@/components/ui/alert").then((mod) => ({ default: mod.Alert })),
    ),
    file: "components/ui/alert.tsx",
  },
  "alert-demo": {
    name: "alert-demo",
    component: React.lazy(
      () => import("@/registry/examples/alert/alert-demo"),
    ),
    file: "registry/examples/alert/alert-demo.tsx",
  },
  "alert-destructive": {
    name: "alert-destructive",
    component: React.lazy(
      () => import("@/registry/examples/alert/alert-destructive"),
    ),
    file: "registry/examples/alert/alert-destructive.tsx",
  },
  "alert-success": {
    name: "alert-success",
    component: React.lazy(
      () => import("@/registry/examples/alert/alert-success"),
    ),
    file: "registry/examples/alert/alert-success.tsx",
  },
  "alert-info": {
    name: "alert-info",
    component: React.lazy(
      () => import("@/registry/examples/alert/alert-info"),
    ),
    file: "registry/examples/alert/alert-info.tsx",
  },
  "alert-warning": {
    name: "alert-warning",
    component: React.lazy(
      () => import("@/registry/examples/alert/alert-warning"),
    ),
    file: "registry/examples/alert/alert-warning.tsx",
  },
  "alert-outline": {
    name: "alert-outline",
    component: React.lazy(
      () => import("@/registry/examples/alert/alert-outline"),
    ),
    file: "registry/examples/alert/alert-outline.tsx",
  },
  // Accordion
  accordion: {
    name: "accordion",
    component: React.lazy(() =>
      import("@/components/ui/accordion").then((mod) => ({
        default: mod.Accordion,
      })),
    ),
    file: "components/ui/accordion.tsx",
  },
  "accordion-demo": {
    name: "accordion-demo",
    component: React.lazy(
      () => import("@/registry/examples/accordion/accordion-demo"),
    ),
    file: "registry/examples/accordion/accordion-demo.tsx",
  },
  "accordion-solid": {
    name: "accordion-solid",
    component: React.lazy(
      () => import("@/registry/examples/accordion/accordion-solid"),
    ),
    file: "registry/examples/accordion/accordion-solid.tsx",
  },
  "accordion-outline": {
    name: "accordion-outline",
    component: React.lazy(
      () => import("@/registry/examples/accordion/accordion-outline"),
    ),
    file: "registry/examples/accordion/accordion-outline.tsx",
  },
  // Alert Dialog
  "alert-dialog": {
    name: "alert-dialog",
    component: React.lazy(() =>
      import("@/components/ui/alert-dialog").then((mod) => ({
        default: mod.AlertDialog,
      })),
    ),
    file: "components/ui/alert-dialog.tsx",
  },
  "alert-dialog-demo": {
    name: "alert-dialog-demo",
    component: React.lazy(
      () => import("@/registry/examples/alert-dialog/alert-dialog-demo"),
    ),
    file: "registry/examples/alert-dialog/alert-dialog-demo.tsx",
  },
  // Avatar
  avatar: {
    name: "avatar",
    component: React.lazy(() =>
      import("@/components/ui/avatar").then((mod) => ({
        default: mod.Avatar,
      })),
    ),
    file: "components/ui/avatar.tsx",
  },
  "avatar-demo": {
    name: "avatar-demo",
    component: React.lazy(
      () => import("@/registry/examples/avatar/avatar-demo"),
    ),
    file: "registry/examples/avatar/avatar-demo.tsx",
  },
  "avatar-sm": {
    name: "avatar-sm",
    component: React.lazy(
      () => import("@/registry/examples/avatar/avatar-sm"),
    ),
    file: "registry/examples/avatar/avatar-sm.tsx",
  },
  "avatar-lg": {
    name: "avatar-lg",
    component: React.lazy(
      () => import("@/registry/examples/avatar/avatar-lg"),
    ),
    file: "registry/examples/avatar/avatar-lg.tsx",
  },
  // Checkbox
  checkbox: {
    name: "checkbox",
    component: React.lazy(() =>
      import("@/components/ui/checkbox").then((mod) => ({
        default: mod.Checkbox,
      })),
    ),
    file: "components/ui/checkbox.tsx",
  },
  "checkbox-demo": {
    name: "checkbox-demo",
    component: React.lazy(
      () => import("@/registry/examples/checkbox/checkbox-demo"),
    ),
    file: "registry/examples/checkbox/checkbox-demo.tsx",
  },
  "checkbox-group": {
    name: "checkbox-group",
    component: React.lazy(() =>
      import("@/components/ui/checkbox").then((mod) => ({
        default: mod.CheckboxGroup,
      })),
    ),
    file: "components/ui/checkbox.tsx",
  },
  "checkbox-group-demo": {
    name: "checkbox-group-demo",
    component: React.lazy(
      () => import("@/registry/examples/checkbox/checkbox-group"),
    ),
    file: "registry/examples/checkbox/checkbox-group.tsx",
  },
  // Collapsible
  collapsible: {
    name: "collapsible",
    component: React.lazy(() =>
      import("@/components/ui/collapsible").then((mod) => ({
        default: mod.Collapsible,
      })),
    ),
    file: "components/ui/collapsible.tsx",
  },
  "collapsible-demo": {
    name: "collapsible-demo",
    component: React.lazy(
      () => import("@/registry/examples/collapsible/collapsible-demo"),
    ),
    file: "registry/examples/collapsible/collapsible-demo.tsx",
  },
  // Dialog
  dialog: {
    name: "dialog",
    component: React.lazy(() =>
      import("@/components/ui/dialog").then((mod) => ({
        default: mod.Dialog,
      })),
    ),
    file: "components/ui/dialog.tsx",
  },
  "dialog-demo": {
    name: "dialog-demo",
    component: React.lazy(
      () => import("@/registry/examples/dialog/dialog-demo"),
    ),
    file: "registry/examples/dialog/dialog-demo.tsx",
  },
  // Input
  input: {
    name: "input",
    component: React.lazy(() =>
      import("@/components/ui/input").then((mod) => ({
        default: mod.Input,
      })),
    ),
    file: "components/ui/input.tsx",
  },
  "input-demo": {
    name: "input-demo",
    component: React.lazy(
      () => import("@/registry/examples/input/input-demo"),
    ),
    file: "registry/examples/input/input-demo.tsx",
  },
  "input-sm": {
    name: "input-sm",
    component: React.lazy(
      () => import("@/registry/examples/input/input-sm"),
    ),
    file: "registry/examples/input/input-sm.tsx",
  },
  "input-lg": {
    name: "input-lg",
    component: React.lazy(
      () => import("@/registry/examples/input/input-lg"),
    ),
    file: "registry/examples/input/input-lg.tsx",
  },
  // Label
  label: {
    name: "label",
    component: React.lazy(() =>
      import("@/components/ui/label").then((mod) => ({
        default: mod.Label,
      })),
    ),
    file: "components/ui/label.tsx",
  },
  "label-demo": {
    name: "label-demo",
    component: React.lazy(
      () => import("@/registry/examples/label/label-demo"),
    ),
    file: "registry/examples/label/label-demo.tsx",
  },
  // Popover
  popover: {
    name: "popover",
    component: React.lazy(() =>
      import("@/components/ui/popover").then((mod) => ({
        default: mod.Popover,
      })),
    ),
    file: "components/ui/popover.tsx",
  },
  "popover-demo": {
    name: "popover-demo",
    component: React.lazy(
      () => import("@/registry/examples/popover/popover-demo"),
    ),
    file: "registry/examples/popover/popover-demo.tsx",
  },
  // Progress
  progress: {
    name: "progress",
    component: React.lazy(() =>
      import("@/components/ui/progress").then((mod) => ({
        default: mod.Progress as React.ComponentType,
      })),
    ),
    file: "components/ui/progress.tsx",
  },
  "progress-demo": {
    name: "progress-demo",
    component: React.lazy(
      () => import("@/registry/examples/progress/progress-demo"),
    ),
    file: "registry/examples/progress/progress-demo.tsx",
  },
  // Radio
  radio: {
    name: "radio",
    component: React.lazy(() =>
      import("@/components/ui/radio").then((mod) => ({
        default: mod.RadioGroup,
      })),
    ),
    file: "components/ui/radio.tsx",
  },
  "radio-demo": {
    name: "radio-demo",
    component: React.lazy(
      () => import("@/registry/examples/radio/radio-demo"),
    ),
    file: "registry/examples/radio/radio-demo.tsx",
  },
  // Separator
  separator: {
    name: "separator",
    component: React.lazy(() =>
      import("@/components/ui/separator").then((mod) => ({
        default: mod.Separator,
      })),
    ),
    file: "components/ui/separator.tsx",
  },
  "separator-demo": {
    name: "separator-demo",
    component: React.lazy(
      () => import("@/registry/examples/separator/separator-demo"),
    ),
    file: "registry/examples/separator/separator-demo.tsx",
  },
  // Skeleton
  skeleton: {
    name: "skeleton",
    component: React.lazy(() =>
      import("@/components/ui/skeleton").then((mod) => ({
        default: mod.Skeleton,
      })),
    ),
    file: "components/ui/skeleton.tsx",
  },
  "skeleton-demo": {
    name: "skeleton-demo",
    component: React.lazy(
      () => import("@/registry/examples/skeleton/skeleton-demo"),
    ),
    file: "registry/examples/skeleton/skeleton-demo.tsx",
  },
  // Slider
  slider: {
    name: "slider",
    component: React.lazy(() =>
      import("@/components/ui/slider").then((mod) => ({
        default: mod.Slider,
      })),
    ),
    file: "components/ui/slider.tsx",
  },
  "slider-demo": {
    name: "slider-demo",
    component: React.lazy(
      () => import("@/registry/examples/slider/slider-demo"),
    ),
    file: "registry/examples/slider/slider-demo.tsx",
  },
  "slider-range": {
    name: "slider-range",
    component: React.lazy(
      () => import("@/registry/examples/slider/slider-range"),
    ),
    file: "registry/examples/slider/slider-range.tsx",
  },
  // Switch
  switch: {
    name: "switch",
    component: React.lazy(() =>
      import("@/components/ui/switch").then((mod) => ({
        default: mod.Switch,
      })),
    ),
    file: "components/ui/switch.tsx",
  },
  "switch-demo": {
    name: "switch-demo",
    component: React.lazy(
      () => import("@/registry/examples/switch/switch-demo"),
    ),
    file: "registry/examples/switch/switch-demo.tsx",
  },
  // Tabs
  tabs: {
    name: "tabs",
    component: React.lazy(() =>
      import("@/components/ui/tabs").then((mod) => ({
        default: mod.Tabs,
      })),
    ),
    file: "components/ui/tabs.tsx",
  },
  "tabs-demo": {
    name: "tabs-demo",
    component: React.lazy(
      () => import("@/registry/examples/tabs/tabs-demo"),
    ),
    file: "registry/examples/tabs/tabs-demo.tsx",
  },
  "tabs-vertical": {
    name: "tabs-vertical",
    component: React.lazy(
      () => import("@/registry/examples/tabs/tabs-vertical"),
    ),
    file: "registry/examples/tabs/tabs-vertical.tsx",
  },
  // Textarea
  textarea: {
    name: "textarea",
    component: React.lazy(() =>
      import("@/components/ui/textarea").then((mod) => ({
        default: mod.Textarea,
      })),
    ),
    file: "components/ui/textarea.tsx",
  },
  "textarea-demo": {
    name: "textarea-demo",
    component: React.lazy(
      () => import("@/registry/examples/textarea/textarea-demo"),
    ),
    file: "registry/examples/textarea/textarea-demo.tsx",
  },
  "textarea-sm": {
    name: "textarea-sm",
    component: React.lazy(
      () => import("@/registry/examples/textarea/textarea-sm"),
    ),
    file: "registry/examples/textarea/textarea-sm.tsx",
  },
  "textarea-lg": {
    name: "textarea-lg",
    component: React.lazy(
      () => import("@/registry/examples/textarea/textarea-lg"),
    ),
    file: "registry/examples/textarea/textarea-lg.tsx",
  },
  "textarea-disabled": {
    name: "textarea-disabled",
    component: React.lazy(
      () => import("@/registry/examples/textarea/textarea-disabled"),
    ),
    file: "registry/examples/textarea/textarea-disabled.tsx",
  },
  // Toggle
  toggle: {
    name: "toggle",
    component: React.lazy(() =>
      import("@/components/ui/toggle").then((mod) => ({
        default: mod.Toggle,
      })),
    ),
    file: "components/ui/toggle.tsx",
  },
  "toggle-demo": {
    name: "toggle-demo",
    component: React.lazy(
      () => import("@/registry/examples/toggle/toggle-demo"),
    ),
    file: "registry/examples/toggle/toggle-demo.tsx",
  },
  "toggle-outline": {
    name: "toggle-outline",
    component: React.lazy(
      () => import("@/registry/examples/toggle/toggle-outline"),
    ),
    file: "registry/examples/toggle/toggle-outline.tsx",
  },
  "toggle-sm": {
    name: "toggle-sm",
    component: React.lazy(
      () => import("@/registry/examples/toggle/toggle-sm"),
    ),
    file: "registry/examples/toggle/toggle-sm.tsx",
  },
  "toggle-lg": {
    name: "toggle-lg",
    component: React.lazy(
      () => import("@/registry/examples/toggle/toggle-lg"),
    ),
    file: "registry/examples/toggle/toggle-lg.tsx",
  },
  "toggle-with-icon": {
    name: "toggle-with-icon",
    component: React.lazy(
      () => import("@/registry/examples/toggle/toggle-with-icon"),
    ),
    file: "registry/examples/toggle/toggle-with-icon.tsx",
  },
  "toggle-disabled": {
    name: "toggle-disabled",
    component: React.lazy(
      () => import("@/registry/examples/toggle/toggle-disabled"),
    ),
    file: "registry/examples/toggle/toggle-disabled.tsx",
  },
  // Toggle Group
  "toggle-group": {
    name: "toggle-group",
    component: React.lazy(() =>
      import("@/components/ui/toggle-group").then((mod) => ({
        default: mod.ToggleGroup,
      })),
    ),
    file: "components/ui/toggle-group.tsx",
  },
  "toggle-group-demo": {
    name: "toggle-group-demo",
    component: React.lazy(
      () => import("@/registry/examples/toggle-group/toggle-group-demo"),
    ),
    file: "registry/examples/toggle-group/toggle-group-demo.tsx",
  },
  "toggle-group-outline": {
    name: "toggle-group-outline",
    component: React.lazy(
      () => import("@/registry/examples/toggle-group/toggle-group-outline"),
    ),
    file: "registry/examples/toggle-group/toggle-group-outline.tsx",
  },
  "toggle-group-sm": {
    name: "toggle-group-sm",
    component: React.lazy(
      () => import("@/registry/examples/toggle-group/toggle-group-sm"),
    ),
    file: "registry/examples/toggle-group/toggle-group-sm.tsx",
  },
  "toggle-group-lg": {
    name: "toggle-group-lg",
    component: React.lazy(
      () => import("@/registry/examples/toggle-group/toggle-group-lg"),
    ),
    file: "registry/examples/toggle-group/toggle-group-lg.tsx",
  },
  "toggle-group-vertical": {
    name: "toggle-group-vertical",
    component: React.lazy(
      () => import("@/registry/examples/toggle-group/toggle-group-vertical"),
    ),
    file: "registry/examples/toggle-group/toggle-group-vertical.tsx",
  },
  "toggle-group-disabled": {
    name: "toggle-group-disabled",
    component: React.lazy(
      () => import("@/registry/examples/toggle-group/toggle-group-disabled"),
    ),
    file: "registry/examples/toggle-group/toggle-group-disabled.tsx",
  },
  // Tooltip
  tooltip: {
    name: "tooltip",
    component: React.lazy(() =>
      import("@/components/ui/tooltip").then((mod) => ({
        default: mod.Tooltip,
      })),
    ),
    file: "components/ui/tooltip.tsx",
  },
  "tooltip-demo": {
    name: "tooltip-demo",
    component: React.lazy(
      () => import("@/registry/examples/tooltip/tooltip-demo"),
    ),
    file: "registry/examples/tooltip/tooltip-demo.tsx",
  },
  card: {
    name: "card",
    component: React.lazy(() =>
      import("@/components/ui/card").then((mod) => ({ default: mod.Card })),
    ),
    file: "components/ui/card.tsx",
  },
  "card-demo": {
    name: "card-demo",
    component: React.lazy(
      () => import("@/registry/examples/card/card-demo"),
    ),
    file: "registry/examples/card/card-demo.tsx",
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
