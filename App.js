import { StatusBar } from "expo-status-bar";
import React from "react";

import Admin from "./layout/Admin";
import Login from "./screen/Login/Login";

import useAuth from "./middleware/useAuth";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const { authIsLogin } = useAuth();

  return (
    <>
      <SafeAreaProvider>{authIsLogin ? <Admin /> : <Login />}</SafeAreaProvider>
    </>
  );
}
