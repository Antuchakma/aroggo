import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "../lib/api";

interface User {
  id: string;
  email: string;
  name: string;
  role: "PATIENT" | "DOCTOR" | "ADMIN";
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem("token").then((token) => {
      if (!token) { setLoading(false); return; }
      api.get<{ user: User }>("/api/auth/me")
        .then((data) => setUser(data.user))
        .catch(() => AsyncStorage.removeItem("token"))
        .finally(() => setLoading(false));
    });
  }, []);

  async function login(email: string, password: string) {
    const data = await api.post<{ token: string; user: User }>("/api/auth/login", { email, password });
    await AsyncStorage.setItem("token", data.token);
    setUser(data.user);
    return data.user;
  }

  async function logout() {
    await AsyncStorage.removeItem("token");
    setUser(null);
  }

  return { user, loading, login, logout };
}
