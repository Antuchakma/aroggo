import { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useAuth } from "../../hooks/useAuth";
import { api } from "../../lib/api";

interface Stats { doctors: number; patients: number; pendingApprovals: number }

export default function AdminDashboard() {
  const { user, logout } = useAuth();
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    api.get<Stats>("/api/admin/dashboard").then(setStats).catch(() => {});
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Admin: {user?.name}</Text>
        <TouchableOpacity onPress={logout}><Text style={styles.logout}>Logout</Text></TouchableOpacity>
      </View>
      <View style={styles.card}><Text style={styles.cardText}>Doctors: {stats?.doctors ?? "--"}</Text></View>
      <View style={styles.card}><Text style={styles.cardText}>Patients: {stats?.patients ?? "--"}</Text></View>
      <View style={[styles.card, styles.cardAlert]}>
        <Text style={styles.cardText}>Pending Approvals: {stats?.pendingApprovals ?? "--"}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f8ff" },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 20, backgroundColor: "#1a7fe8" },
  greeting: { fontSize: 20, fontWeight: "bold", color: "#fff" },
  logout: { color: "#fff" },
  card: { backgroundColor: "#fff", borderRadius: 12, padding: 16, margin: 16, elevation: 2 },
  cardAlert: { borderLeftWidth: 4, borderLeftColor: "#f59e0b" },
  cardText: { fontSize: 15, color: "#555" },
});
