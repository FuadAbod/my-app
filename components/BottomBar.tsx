import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const BottomBar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.item}>Chat</Text>
      <Text style={styles.item}>Connect</Text>
      <Text style={styles.item}>Profile</Text>
      <Text style={styles.item}>Notifications</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#a54f4f',
    borderTopWidth: 1,
    borderTopColor: '#aa2828',},
  item: {
    fontSize: 16,
    color: '#fff',
  },
})

export default BottomBar
