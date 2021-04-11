import React, { useEffect } from "react";

/**Navigation
 * https://reactnavigation.org/docs/getting-started
 * npm install @react-navigation/native
 * expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
 *
 * using stack nav
 * npm install @react-navigation/stack
 * https://reactnavigation.org/docs/stack-navigator#navigationoptions-used-by-stacknavigator
 *
 * using drawer (recommended)
 * npm install @react-navigation/drawer
 * https://reactnavigation.org/docs/drawer-navigator
 * https://reactnavigation.org/docs/drawer-based-navigation/
 *
 * using tab
 * npm install @react-navigation/bottom-tabs
 * https://reactnavigation.org/docs/bottom-tab-navigator/
 */
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();

import { navigationRef, isReadyRef } from "./RootNavigation";

/**screen */
import Login from "../screen/Login/Login";
import Dashboard from "../screen/Dashboard/Dashboard";

export default function NavMain() {
  const auth = false;

  useEffect(() => {
    return () => {
      isReadyRef.current = false;
    };
  }, []);
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}
    >
      <Drawer.Navigator initialRouteName="Login">
        {auth && <Drawer.Screen name="Login" component={Login} />}
        <Drawer.Screen name="Dashboard" component={Dashboard} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
