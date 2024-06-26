import React from "react";
import { View, StyleSheet, Button, TextInput } from "react-native";
import { NativeRouter } from "react-router-native";

const Login = ({ navigation }) => {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your email"
          keyboardType="ascii-capable"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your password"
          keyboardType="visible-password"
        />
        <Button
          onPress={() => {
            navigation.navigate("Home");
          }}
          title="Login"
          style={styles.button}
        ></Button>
        {/* Add margin between buttons */}
        <View style={{ marginBottom: 10 }}></View>
        <Button
          onPress={() => {
            navigation.navigate("Register");
          }}
          title="Sign up"
          style={styles.button}
        ></Button>
      </View>
    </NativeRouter>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  textInput: {
    fontSize: 18,
    marginVertical: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    width: "100%",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
  },
  button: {
    marginTop: 20,
    width: "35%",
    paddingVertical: 12,
    backgroundColor: "green",
  },
});

export default Login;
