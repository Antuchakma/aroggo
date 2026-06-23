import { useEffect } from "react";
import { Stack, useRouter, useSegments } from "expo-router";
import { useAuth } from "../hooks/useAuth";

export default function RootLayout() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    if (loading) return;
    const inAuth = segments[0] === "(auth)";
    if (!user && !inAuth) router.replace("/(auth)/login");
    else if (user && inAuth) {
      if (user.role === "DOCTOR") router.replace("/(doctor)/dashboard");
      else if (user.role === "ADMIN") router.replace("/(admin)/dashboard");
      else router.replace("/(tabs)/dashboard");
    }
  }, [user, loading, segments]);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="(doctor)" />
      <Stack.Screen name="(admin)" />
    </Stack>
  );
}
