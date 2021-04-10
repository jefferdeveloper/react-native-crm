import React from "react";
import { View, Text, Button } from "react-native";

import { navigateDrawerOpen } from "../nav/RootNavigation";

export default function Header() {
  return (
    <View
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1,
      }}
    >
      <Text>Header</Text>
      <Button
        onPress={() =>
          //   RootNavigation.navigate("Dashboard", { userName: "Lucy" })
          //   navigationRef.current?.dispatch(
          //     StackActions.push(DrawerActions.openDrawer())
          //   )
          navigateDrawerOpen()
        }
        title="Drawer Open"
      />
    </View>
  );
}
