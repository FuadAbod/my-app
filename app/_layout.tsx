import AuthProviders from '@/components/AuthProviders';
import { Stack } from 'expo-router';
import "../global.css";


export default function RootLayout() {
  return (
    <AuthProviders>
      <Stack screenOptions={{ headerShown: false }} />
    </AuthProviders>
  );
}
