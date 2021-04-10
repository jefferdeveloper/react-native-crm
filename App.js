import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import NavMain from "./nav/NavMain";
import Header from "./screen/Header";

export default function App() {
  return (
    <SafeAreaProvider>
      <Header />
      <NavMain />
    </SafeAreaProvider>
  );
}
