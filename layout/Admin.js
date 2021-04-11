import React from "react";
import NavMain from "../nav/NavMain";
import Header from "./Header";

export default function Admin({ children }) {
  return (
    <>
      <Header />
      <NavMain />
    </>
  );
}
