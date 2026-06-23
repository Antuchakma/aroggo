import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useAuth } from "../../hooks/useAuth";

export default function PatientDashboard() {
  const { user, logout } = useAuth();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello, {user?.name}</Text>
        <TouchableOpacity onPress={logout}>
          <Text style={styles.logout}>Logout</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.sectionTitle}>Your Health Summary</Text>
      <View style={styles.card}>
        <Text style={styles.cardText}>Appointments: --</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardText}>Active Prescriptions: --</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.cardText}>Recent Reports: --</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f8ff" },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 20, backgroundColor: "#1a7fe8" },
  greeting: { fontSize: 20, fontWeight: "bold", color: "#fff" },
  logout: { color: "#fff", fontSize: 14 },
  sectionTitle: { fontSize: 18, fontWeight: "600", margin: 16, color: "#333" },
  card: { backgroundColor: "#fff", borderRadius: 12, padding: 16, marginHorizontal: 16, marginBottom: 12, elevation: 2 },
  cardText: { fontSize: 15, color: "#555" },
});
