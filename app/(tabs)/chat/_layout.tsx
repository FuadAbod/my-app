
import { useAuth } from '@/components/AuthProviders';
import ChatProvider from '@/providers/ChatProvider';
import { Redirect, Stack } from 'expo-router';
export default function ChatLayout() {

  const { user } = useAuth();

  if (!user) {
    return <Redirect href="/(auth)/login" />;
  }
    return (
      <ChatProvider>
          <Stack />   
      </ChatProvider>

 
    );
}
