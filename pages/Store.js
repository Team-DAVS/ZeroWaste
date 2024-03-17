import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const FeatureCard = ({ title, description }) => (
  <View style={styles.card}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.description}>{description}</Text>
  </View>
);

const content = [
  {
    title: "Secure Storage on IPFS",
    description:
      "Your certificates and documents are stored securely on the InterPlanetary File System (IPFS), ensuring immutability and tamper-proof storage. This decentralized approach guarantees that your data is safe from unauthorized access and alterations.",
  },
  {
    title: "Blockchain-backed Verification",
    description:
      "We leverage blockchain technology to verify the authenticity of your certificates and badges. Through cryptographic hashing, your credentials are uniquely identified and easily verified, eliminating any doubts about their legitimacy.",
  },
  {
    title: "User-Friendly Interface",
    description:
      "Our user interface is designed with simplicity in mind. Navigating through the platform is intuitive, allowing you to easily upload, manage, and share your certificates. Claimers can seamlessly access their verified credentials through their personalized digital wallet.",
  },
  {
    title: "Decentralized Claiming Process",
    description:
      "Claimers can verify their identity securely, and once verified, they can claim their certificates hassle-free. Our decentralized claiming process ensures privacy and security, giving claimers full control over their digital credentials.",
  },
  {
    title: "Credential Wallet Integration",
    description:
      "We offer seamless integration with digital credential wallets, allowing users to store, manage, and share their verified certificates effortlessly. Compatible with popular digital wallet standards, our platform ensures compatibility and convenience.",
  },
  {
    title: "Customizable Badges and Certificates",
    description:
      "Issuers can create customizable, visually appealing badges and certificates tailored to their needs. With flexible templates and design options, you can represent your achievements in a way that reflects your unique identity. ",
  },
];

const Store = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Store</Text>
      {content.map((item, idx) => (
        <FeatureCard
          key={idx}
          title={item.title}
          description={item.description}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    paddingTop: 20,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#4CAF50",
    marginVertical: 10,
    padding: 20,
    width: "90%",
    borderRadius: 10,
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    color: "white",
    fontSize: 15,
    marginTop: 10,
  },
});

export default Store;
