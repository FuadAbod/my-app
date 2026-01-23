import { useAuth } from '@/components/AuthProviders';
import { FontAwesome5 } from '@expo/vector-icons';
import { Link, router, Stack } from 'expo-router';
import { default as React } from 'react';
import { ActivityIndicator, Pressable } from 'react-native';
import { ChannelList } from 'stream-chat-expo';

const ChannelListScreen = () => {
  const { user } = useAuth();


  if (!user){
    return <ActivityIndicator />
  }
  return (
  <>
      <Stack.Screen
          options={{
            headerRight: () => (
              <Link href={'/(tabs)/chat/users'} asChild>
                <Pressable hitSlop={10} style={{ marginHorizontal: 15 }}>
                  <FontAwesome5 name="users" size={22} color="gray" />
                </Pressable>
              </Link>
            ),
          }}
      />
    <ChannelList 
    filters={{members: {$in: [user.id]}}}
    onSelect={(channel) => router.push(`/chat/channel/${channel.cid}`)} />

  </>
  )};
export default ChannelListScreen;
