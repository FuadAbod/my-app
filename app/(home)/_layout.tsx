import { useAuth } from '@/components/AuthProviders';
import { Redirect, Stack } from 'expo-router';

export default function HomeLayout() {
  const {user} = useAuth();
  if (!user) {
    return <Redirect href='/(auth)/login' />
      }
  return (
    <Stack screenOptions={{ headerShown: false }} />
    
  
  );
}
