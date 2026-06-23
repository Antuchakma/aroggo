import { View, Text, StyleSheet } from "react-native";
export default function DoctorPatients() {
  return <View style={styles.c}><Text style={styles.t}>Patients — coming soon</Text></View>;
}
const styles = StyleSheet.create({ c: { flex: 1, alignItems: "center", justifyContent: "center" }, t: { fontSize: 16, color: "#666" } });
