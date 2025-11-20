import { AppContext } from "@/contexts/AppContext";
import { useHeaderHeight } from "@react-navigation/elements";
import { Stack } from "expo-router";
import React, { useContext } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Channel, MessageInput, MessageList } from "stream-chat-expo";

export default function ChannelScreen() {
  const { channel } = useContext(AppContext);
  const headerHeight = useHeaderHeight();

  if (!channel) {
    return (
      <SafeAreaView>
        <Text>Loading chat ...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Channel Screen" }} />
      <Channel channel={channel} keyboardVerticalOffset={headerHeight}>
        <MessageList />
        <MessageInput />
      </Channel>
    </SafeAreaView>
  );
}