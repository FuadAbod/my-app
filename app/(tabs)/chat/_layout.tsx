import { ChatWrapper } from '@/components/ChatWrapper';
import { AppProvider } from '@/contexts/AppContext';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function ChatLayout() {
    return (
      <SafeAreaProvider>
        <GestureHandlerRootView>
        <ChatWrapper>
          <AppProvider>
            <Stack>
              <Stack.Screen name="index"  options={{headerShown:false}}/>
            </Stack>
          </AppProvider>
        </ChatWrapper>
      </GestureHandlerRootView>
      </SafeAreaProvider>
    );
}
