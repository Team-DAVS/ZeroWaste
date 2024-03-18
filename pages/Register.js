import React, { useState } from "react";
import { View, StyleSheet, Button, TextInput, Text } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { NativeRouter } from "react-router-native";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVendor, setIsVendor] = useState(false);
  const register = async () => {
    const url = "http://localhost:3000/users/";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      if (result.token) {
        navigation.navigate("Home");
      }
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <NativeRouter>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your email"
          keyboardType="ascii-capable"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your password"
          keyboardType="visible-password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Button onPress={register} title="Sign up" style={styles.button} />
        <View style={styles.checkboxContainer}>
          <BouncyCheckbox
            size={25}
            fillColor="blue"
            unfillColor="#FFFFFF"
            text="Sign up as a vendor"
            isChecked={isVendor}
            iconStyle={{ borderColor: "blue" }}
            innerIconStyle={{ borderWidth: 2 }}
            onPress={(isVendor) => {
              setIsVendor(!isVendor);
            }}
          />
          <BouncyCheckbox
            size={25}
            fillColor="green"
            unfillColor="#FFFFFF"
            text="Sign up as a user"
            isChecked={!isVendor}
            iconStyle={{ borderColor: "green" }}
            innerIconStyle={{ borderWidth: 2 }}
            onPress={(isVendor) => {
              setIsVendor(isVendor);
            }}
          />
        </View>
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
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
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
