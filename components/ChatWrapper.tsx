import React, { ReactNode } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Chat, OverlayProvider, useCreateChatClient } from "stream-chat-expo";
import {
    chatApiKey,
    chatUserId,
    chatUserName,
    chatUserToken,
} from "../chatConfig";


interface ChatWrapperProps {
    children: ReactNode;
}


const user = {
    id: chatUserId,
    name: chatUserName,
};


export const ChatWrapper: React.FC<ChatWrapperProps> = ({ children }) => {
    const chatClient = useCreateChatClient({
    apiKey: chatApiKey,
    userData: user,
    tokenOrProvider: chatUserToken,
});

if (!chatClient) {
    return (
    <SafeAreaView>
        <Text>Loading chat ...</Text>
    </SafeAreaView>
    );
}

return <OverlayProvider>
    <Chat client={chatClient}>{children}</Chat>
    </OverlayProvider>;
};