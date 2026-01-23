import { useAuth } from '@/components/AuthProviders';
import supabase from '@/lib/supabase';
import { tokenProvider } from '@/utils/tokenProvider';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { ActivityIndicator, Text, View, } from 'react-native';
import { StreamChat } from "stream-chat";
import { Chat, OverlayProvider } from 'stream-chat-expo';

const client = StreamChat.getInstance("22d7e62472y2")

const ChatProvider = ({ children }: PropsWithChildren) => {
  const { profile } = useAuth();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!profile) {
      return;
    }

    const connect = async () => {
  
      const image = profile.avatar_url
        ? supabase.storage
            .from('avatars')
            .getPublicUrl(profile.avatar_url).data.publicUrl
        : undefined;

      await client.connectUser(
        {
          id: profile.id,
          name: profile.full_name,
          ...(image ? { image } : {}), // only include if it exists
        },
        tokenProvider
      );

      setIsReady(true);
    };

    connect();

    return () => {
      client.disconnectUser();
      setIsReady(false);
    };
  }, [profile?.id, profile?.avatar_url]);

  if (!isReady) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator />
      <Text style={{ marginTop: 8 }}>Loading chat…</Text>
    </View>
  );
}

  return (
    <OverlayProvider>
      <Chat client={client}>{children}</Chat>
    </OverlayProvider>
  );
};

export default ChatProvider;
