import UserRegistration from '@/components/UserRegistration';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex justify-center items-center h-full w-full">
      <Text>Welcome, you are logged in ✅</Text>
      <UserRegistration />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
