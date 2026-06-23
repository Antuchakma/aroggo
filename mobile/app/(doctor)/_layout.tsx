import { Tabs } from "expo-router";

export default function DoctorTabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#1a7fe8" }}>
      <Tabs.Screen name="dashboard" options={{ title: "Dashboard" }} />
      <Tabs.Screen name="patients" options={{ title: "Patients" }} />
      <Tabs.Screen name="appointments" options={{ title: "Appointments" }} />
      <Tabs.Screen name="prescriptions" options={{ title: "Prescribe" }} />
    </Tabs>
  );
}
