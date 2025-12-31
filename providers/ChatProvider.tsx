import { useAuth } from '@/components/AuthProviders';
import supabase from '@/lib/supabase';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { StreamChat } from "stream-chat";
import { Chat, OverlayProvider } from 'stream-chat-expo';

const client = StreamChat.getInstance("22d7e62472y2")
const ChatProvider = ({children}:PropsWithChildren) => {
const {profile} = useAuth();

const [isReady,setIsReady] = useState(false) 
  
  useEffect(() => {

    if (!profile){
      return;
    }
    const connect = async () => {
      await client.connectUser(
        {
          id: profile.id,
          name: profile.full_name,
          image: supabase.storage
            .from('avatars')
            .getPublicUrl(profile.avatar_url).data.publicUrl,
        },
        client.devToken(profile.id)
      );
    
      setIsReady(true)
      // const channel = client.channel('messaging','the_park',{name: 'The Park'})
      // await channel.watch();
    };
    connect();

    return () => {
      client.disconnectUser();
      setIsReady(false)
    }
  },[profile?.id,profile?.avatar_url])

  if (!isReady) {
    return <ActivityIndicator />
  }
  return (
    <OverlayProvider>
      <Chat client = {client}>
        {children}</Chat>
      </OverlayProvider>
          
  )
}

export default ChatProvider
