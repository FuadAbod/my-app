import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const BottomBar = () => {
  return (
    <View style={styles.container}>
      <Text>Chat</Text>
      <Text>Connect</Text>
      <Text>Profile</Text>
      <Text>Notifications</Text>
    </View>
  )
}

const styles=StyleSheet.create({
  container: {
    height: 1400,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24
  }
  })
  
export default BottomBar
