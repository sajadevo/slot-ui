import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui/tabs";

export default function TabsDemo() {
  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTab value="account">Account</TabsTab>
        <TabsTab value="password">Password</TabsTab>
      </TabsList>
      <TabsPanel value="account">Account Content</TabsPanel>
      <TabsPanel value="password">Password Content</TabsPanel>
    </Tabs>
  );
}
