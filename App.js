import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import NavMain from "./nav/NavMain";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavMain />
    </SafeAreaProvider>
  );
}
