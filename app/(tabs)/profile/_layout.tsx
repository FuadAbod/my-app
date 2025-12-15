import { useAuth } from '@/components/AuthProviders';
import { Redirect, Stack } from 'expo-router';

export default function ProfileLayout() {
const {user} = useAuth();
      if (!user) {
        return <Redirect href='/(auth)/login' />
          }
    return (
    <Stack>
        <Stack.Screen name="index"  options={{headerShown:false}}/>

    </Stack>
    );
}
