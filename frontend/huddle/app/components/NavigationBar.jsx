import React from "react";
import { View, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const NavigationBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Button title="Messages" onPress={() => navigation.navigate("Messages")} />
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Profile" onPress={() => navigation.navigate("Profile")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: "lightgray",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default NavigationBar;