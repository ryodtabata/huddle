import { View, Text } from "react-native";
import NavigationBar from "../components/NavigationBar";

export default function Messages() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationBar />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Messages screen</Text>
      </View>
    </View>
  );
}