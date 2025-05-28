import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
const Settings = () => {
  const router = useRouter();
  return (
    <View>
      <Text>friends</Text>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "flex-end",
          gap: 16,
        }}
      >
        <TouchableOpacity onPress={() => router.push("/Friends")}>
          <Text>Friends</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/")}>
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Settings