import AuthProviders from '@/components/AuthProviders';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import "../global.css";

export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <AuthProviders>
        <Stack screenOptions={{ headerShown: false }} />
      </AuthProviders>
    </GestureHandlerRootView>
  );
}
