import React from "react";
import { View, StyleSheet, Button, TextInput } from "react-native";
import { NativeRouter } from "react-router-native";

const Register = ({ navigation }) => {
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
          title="Sign up"
          style={styles.button}
        />
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
  },
});

export default Register;
