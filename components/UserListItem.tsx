import { Profile } from '@/types/Profile'
import { useRouter } from 'expo-router'
import React from 'react'
import { Pressable, Text } from 'react-native'
import { useChatContext } from 'stream-chat-expo'
import { useAuth } from './AuthProviders'


type Props = {
  user: Profile
}

const UserListItem = ({ user }: Props) => {
  const router=useRouter()
  const {client}= useChatContext();
  const {user:me} = useAuth()

  console.log("ME",me)
  console.log("current user",user)
  const onPress = async () => {
    //start a chat with him
    const channel = client.channel('messaging',{
      members:[me!.id,user.id],
    });
    await channel.watch();
    router.push(`/(tabs)/chat/channel/${channel.cid}`);
  }
  return (
    <Pressable onPress={onPress}>
        <Text>{user.full_name}</Text>
    </Pressable>

  )
}

export default UserListItem
