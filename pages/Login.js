import React from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";

const Login = () => {
  return (
    <View style={styles.screenContainer}>
      <TouchableOpacity style={styles.buttonContainer}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://blog.hubspot.com/hs-fs/hubfs/image8-2.jpg?width=600&name=image8-2.jpg",
          }}
        />
        <Text style={styles.buttonText}>SignIn with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "blue",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  tinyLogo: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Login;
