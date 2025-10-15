import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen name="index"  options={{headerShown:false}}/>
      <Stack.Screen name="profile_creation"  options={{headerShown:false}}/>
      <Stack.Screen name="kids_profile"  options={{headerShown:false}}/>
    </Stack>
  );
}
