import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const FooterBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text>Chat</Text>
      </View>
      <View style={styles.box}>
        <Text>Connect</Text>
      </View>
      <View style={styles.box}>
        <Text>Profile</Text>
      </View>

      <View style={styles.box}>
        <Text>Notifications</Text>
      </View>
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
  },
  box: {
    width: 80,       
    height: 70,
    backgroundColor: '#E8F5E9',
    borderRadius: 8, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    fontSize: 14,
    color: '#4EBF76',
    fontWeight: '500',
    textAlign: 'center',
  },
  })
  
export default FooterBar
