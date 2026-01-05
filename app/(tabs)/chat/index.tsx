import { useAuth } from '@/components/AuthProviders';
import { FontAwesome5 } from '@expo/vector-icons';
import { Link, router, Stack } from 'expo-router';
import { default as React } from 'react';
import { ActivityIndicator } from 'react-native';
import { ChannelList } from 'stream-chat-expo';

const ChannelListScreen = () => {
  const { user } = useAuth();
  console.log("users",user)

  if (!user){
    return <ActivityIndicator />
  }
  return (
    <>
    <Stack.Screen
        options={{
          headerRight: () => (
            <Link href={'/(tabs)/chat/users'} asChild>
              <FontAwesome5
                name="users"
                size={22}
                color="gray"
                style={{ marginHorizontal: 15 }}
              />
            </Link>
          ),
        }}
      />
  <ChannelList 
  filters={{members: {$in: [user.id]}}}
  onSelect={(channel) => router.push(`/chat/channel/${channel.cid}`)} />;

</>
  )}
export default ChannelListScreen;
