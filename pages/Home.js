import React from "react";
import { StatusBar, ScrollView, StyleSheet, View } from "react-native";
import Hero from "../components/home-page/hero";
import Divider from "../components/home-page/divider";
import Features from "../components/home-page/features";
import OurMoto from "../components/home-page/our-moto";
import Rewards from "../components/home-page/rewards";
import WhyUs from "../components/home-page/why-us";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const Home = () => {
  return (
    <ScrollView>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Hero />
        <Divider />
        <Features />
        <Divider />
        <OurMoto />
        <Divider />
        <Rewards />
        <Divider />
        <WhyUs />
      </View>
    </ScrollView>
  );
};
export default Home;
