import { Tabs } from "expo-router";

export default function AdminTabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#1a7fe8" }}>
      <Tabs.Screen name="dashboard" options={{ title: "Dashboard" }} />
      <Tabs.Screen name="approvals" options={{ title: "Approvals" }} />
    </Tabs>
  );
}
