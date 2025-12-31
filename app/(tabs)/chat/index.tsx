import { useAuth } from '@/components/AuthProviders';
import { router } from 'expo-router';
import { default as React } from 'react';
import { ChannelList } from 'stream-chat-expo';

const ChannelListScreen = () => {
  const { user } = useAuth();


  return (
  <ChannelList 
  filters={{members: {$in: [user.id]}}}
  onSelect={(channel) => router.push(`/chat/channel/${channel.cid}`)} />);
}

export default ChannelListScreen
