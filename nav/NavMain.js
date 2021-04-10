import React from "react";

/**Navigation
 * https://reactnavigation.org/docs/getting-started
 * npm install @react-navigation/native
 * expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
 *
 * using stack nav
 * npm install @react-navigation/stack
 * https://reactnavigation.org/docs/stack-navigator#navigationoptions-used-by-stacknavigator
 *
 * using drawer
 * npm install @react-navigation/drawer
 * https://reactnavigation.org/docs/drawer-navigator
 */

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

/**screen */
import Login from "../screen/Login/Login";
import Dashboard from "../screen/Dashboard/Dashboard";

export default function NavMain() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        // headerMode="none"
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
