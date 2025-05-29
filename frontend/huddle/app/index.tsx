import { View, Text } from "react-native";
import NavigationBar from "./components/NavigationBar";

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationBar />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home screen</Text>
      </View>
    </View>
  );
}