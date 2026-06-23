import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useAuth } from "../../hooks/useAuth";

export default function DoctorDashboard() {
  const { user, logout } = useAuth();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Dr. {user?.name}</Text>
        <TouchableOpacity onPress={logout}><Text style={styles.logout}>Logout</Text></TouchableOpacity>
      </View>
      <View style={styles.card}><Text style={styles.cardText}>Patients: --</Text></View>
      <View style={styles.card}><Text style={styles.cardText}>Today's Appointments: --</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f8ff" },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: 20, backgroundColor: "#1a7fe8" },
  greeting: { fontSize: 20, fontWeight: "bold", color: "#fff" },
  logout: { color: "#fff" },
  card: { backgroundColor: "#fff", borderRadius: 12, padding: 16, margin: 16, elevation: 2 },
  cardText: { fontSize: 15, color: "#555" },
});
