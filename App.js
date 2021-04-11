import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import NavMain from "./nav/NavMain";
import Header from "./screen/Header";
import Admin from "./layout/Admin";
import Login from "./screen/Login/Login";

import useAuth from "./middleware/useAuth";

export default function App() {
  const { authIsLogin } = useAuth();
  return (
    <SafeAreaProvider>
      {authIsLogin ? (
        <Admin>
          <Header />
          <NavMain />
        </Admin>
      ) : (
        <Login />
      )}
    </SafeAreaProvider>
  );
}
