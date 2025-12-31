import { useAuth } from '@/components/AuthProviders';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { StreamChat } from "stream-chat";
import { Chat, OverlayProvider } from 'stream-chat-expo';

const client = StreamChat.getInstance("22d7e62472y2")
const ChatProvider = ({children}:PropsWithChildren) => {
const {profile} = useAuth();
// console.log("user",user)
const [isReady,setIsReady] = useState(false) 
  
  useEffect(() => {
    console.log("Usee effect",profile)

    if (!profile){
      return;
    }
    const connect = async () => {
      await client.connectUser(
        {
          id: profile.id,
          name: profile.full_name,
          image: "https://i.imgur.com/fR9Jz14.png",
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
  },[profile?.id])

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
