import React from "react";
import { View, StyleSheet, ImageBackground, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, Button } from "react-native-paper";
import { Formik } from "formik";

export default function Login() {
  return (
    <SafeAreaView style={st.container}>
      <ImageBackground
        source={require("../../assets/bg-login.jpg")}
        style={st.image}
      >
        <Formik
          initialValues={{ username: "admin", password: "admin" }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View style={st.form}>
              <Image
                style={st.logo}
                source={require("../../assets/logo-cpti.png")}
              />
              <TextInput
                label="Username"
                mode="outlined"
                value={values.username}
                onChangeText={handleChange("username")}
              />
              <TextInput
                label="Password"
                mode="outlined"
                value={values.password}
                onChangeText={handleChange("password")}
              />
              <View style={st.btn__wrap}>
                <Button
                  style={st.btn}
                  // icon="signin"
                  mode="contained"
                  onPress={handleSubmit}
                >
                  Login
                </Button>
              </View>
            </View>
          )}
        </Formik>
      </ImageBackground>
    </SafeAreaView>
  );
}

const st = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  form: {
    padding: 10,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  logo: {
    alignSelf: "center",
    width: 200,
    height: 50,
    resizeMode: "contain",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0",
  },
  btn__wrap: {
    flexDirection: "row",
    justifyContent: "center",
  },
  btn: {
    width: 200,
    marginTop: 15,
    justifyContent: "center",
    backgroundColor: "blue",
  },
});
