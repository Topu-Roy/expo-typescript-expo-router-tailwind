import { Text, View } from "react-native";

export default function Page() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <View className="text-center justify-center items-center">
        <Text className="text-blue-600 text-4xl">Hello World</Text>
        <Text>This is the first page of your app.</Text>
      </View>
    </View>
  );
}
