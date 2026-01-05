import { Profile } from '@/types/Profile'
import React from 'react'
import { Text, View } from 'react-native'


type Props = {
  user: Profile
}

const UserListItem = ({ user }: Props) => {
  return (
    <View>
      <Text>{user.full_name}</Text>
    </View>
  )
}

export default UserListItem
