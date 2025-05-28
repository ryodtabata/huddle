
import { useRouter } from "expo-router";
import { Button, View, Text } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home screen</Text>
      <Button title="Go to Profile" onPress={() => console.log('lol u pressed a lil button')} />
    </View>
  );
}