import { router } from 'expo-router';
import { default as React } from 'react';
import { ChannelList } from 'stream-chat-expo';

const ChannelListScreen = () => {
  return (
  <ChannelList 
  onSelect={(channel) => router.push(`/chat/channel/${channel.cid}`)} />);
}

export default ChannelListScreen
