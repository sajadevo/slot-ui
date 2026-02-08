import { Tabs, TabsList, TabsPanel, TabsTab } from "@/components/ui/tabs";

export default function TabsVertical() {
  return (
    <Tabs defaultValue="account" orientation="vertical">
      <TabsList>
        <TabsTab value="account">Account</TabsTab>
        <TabsTab value="password">Password</TabsTab>
      </TabsList>
      <TabsPanel value="account" className="p-1 w-40">Account Content</TabsPanel>
      <TabsPanel value="password" className="p-1 w-40">Password Content</TabsPanel>
    </Tabs>
  );
}
