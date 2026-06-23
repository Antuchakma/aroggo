import { Tabs } from "expo-router";

export default function PatientTabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#1a7fe8" }}>
      <Tabs.Screen name="dashboard" options={{ title: "Dashboard" }} />
      <Tabs.Screen name="appointments" options={{ title: "Appointments" }} />
      <Tabs.Screen name="prescriptions" options={{ title: "Prescriptions" }} />
      <Tabs.Screen name="reports" options={{ title: "Reports" }} />
      <Tabs.Screen name="chat" options={{ title: "Assistant" }} />
    </Tabs>
  );
}
