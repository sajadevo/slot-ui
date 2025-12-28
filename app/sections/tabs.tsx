import { Tabs, TabsList, TabsTab, TabsPanel } from "@/components/ui/tabs";
import { CircleUserIcon, HeartIcon, HouseIcon } from "lucide-react";

export function TabsDemo() {
  return (
    <section className="flex items-start justify-around gap-8 border-b p-12">
      <Tabs defaultValue="home">
        <TabsList>
          <TabsTab value="home">Home</TabsTab>
          <TabsTab value="profile">Profile</TabsTab>
          <TabsTab value="favorites">Favorites</TabsTab>
        </TabsList>
        <TabsPanel value="home">
          <p className="p-2 text-sm">Home content</p>
        </TabsPanel>
        <TabsPanel value="profile">
          <p className="p-2 text-sm">Profile content</p>
        </TabsPanel>
        <TabsPanel value="favorites">
          <p className="p-2 text-sm">Favorites content</p>
        </TabsPanel>
      </Tabs>
      <Tabs defaultValue="home">
        <TabsList>
          <TabsTab value="home">
            <HouseIcon />
            Home
          </TabsTab>
          <TabsTab value="profile">
            <CircleUserIcon />
            Profile
          </TabsTab>
          <TabsTab value="favorites">
            <HeartIcon />
            Favorites
          </TabsTab>
        </TabsList>
        <TabsPanel value="home">
          <p className="p-2 text-sm">Home content</p>
        </TabsPanel>
        <TabsPanel value="profile">
          <p className="p-2 text-sm">Profile content</p>
        </TabsPanel>
        <TabsPanel value="favorites">
          <p className="p-2 text-sm">Favorites content</p>
        </TabsPanel>
      </Tabs>
      <Tabs orientation="vertical" defaultValue="home">
        <TabsList>
          <TabsTab value="home">Home</TabsTab>
          <TabsTab value="profile">Profile</TabsTab>
          <TabsTab value="favorites">Favorites</TabsTab>
        </TabsList>
        <TabsPanel value="home">
          <p className="p-2 text-sm">Home content</p>
        </TabsPanel>
        <TabsPanel value="profile">
          <p className="p-2 text-sm">Profile content</p>
        </TabsPanel>
        <TabsPanel value="favorites">
          <p className="p-2 text-sm">Favorites content</p>
        </TabsPanel>
      </Tabs>
      <Tabs orientation="vertical" defaultValue="home">
        <TabsList>
          <TabsTab value="home">
            <HouseIcon />
            Home
          </TabsTab>
          <TabsTab value="profile">
            <CircleUserIcon />
            Profile
          </TabsTab>
          <TabsTab value="favorites">
            <HeartIcon />
            Favorites
          </TabsTab>
        </TabsList>
        <TabsPanel value="home">
          <p className="p-2 text-sm">Home content</p>
        </TabsPanel>
        <TabsPanel value="profile">
          <p className="p-2 text-sm">Profile content</p>
        </TabsPanel>
        <TabsPanel value="favorites">
          <p className="p-2 text-sm">Favorites content</p>
        </TabsPanel>
      </Tabs>
    </section>
  );
}
