import React from "react";
import { View, Text, Image } from "react-native";
import { Button, Avatar } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";

/**
 * Safe View Area
 * https://reactnavigation.org/docs/handling-safe-area/
 */
import { SafeAreaView } from "react-native-safe-area-context";

import {
  // navigateDrawerOpen,
  navigateDrawerToggle,
} from "../nav/RootNavigation";

export default function Header() {
  return (
    <SafeAreaView>
      <View
        style={{
          // position: "fixed",
          // top: 0,
          // left: 0,
          // zIndex: 1,
          display: "flex",
          flex: -1,
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          width: "100%",
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 5,
          paddingBottom: 5,
        }}
      >
        <Image
          style={{ width: 200, height: 50, resizeMode: "contain" }}
          source={require("../assets/logo-cpti.png")}
        />
        <Icon
          style={{ width: "auto", color: "#000" }}
          name="bars"
          size={30}
          color="#900"
          onPress={navigateDrawerToggle}
        />
      </View>
    </SafeAreaView>
  );
}
