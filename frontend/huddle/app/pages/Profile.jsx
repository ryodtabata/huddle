import { View, Text } from "react-native";
import NavigationBar from "../components/NavigationBar";

export default function Profile() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationBar />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Profile screen</Text>
      </View>
    </View>
  );
}