import { useAuth } from '@/components/AuthProviders';
import { Redirect, Stack } from 'expo-router';
import { ChatProvider } from 'stream-chat-expo';
export default function HomeLayout() {
  
  const {user} = useAuth();
  if (!user) {
    return <Redirect href='/(auth)/login' />
      }
  return (
        <ChatProvider>
          <Stack screenOptions={{ headerShown: false }} />
        </ChatProvider>

    

  );
}
