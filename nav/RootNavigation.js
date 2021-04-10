/**
 * Navigate outside navigator container
 * https://reactnavigation.org/docs/navigating-without-navigation-prop/
 */

import * as React from "react";

export const isReadyRef = React.createRef();
export const navigationRef = React.createRef();

import { DrawerActions } from "@react-navigation/native";

export function navigate(name, params) {
  if (isReadyRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.navigate(name, params);
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}

export function navigateDrawerOpen() {
  navigationRef.current?.dispatch(DrawerActions.openDrawer());
}
