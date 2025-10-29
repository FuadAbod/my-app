import React from 'react'
import { Text, StyleSheet, View } from 'react-native'


const HeaderBar = () => {
  return (
      <View style={styles.container}>
        <Text style={styles.item}>Squad</Text>
        <Text style={styles.item}>EventFinder</Text>
        <Text style={styles.item}>Support</Text>
      </View>

  )
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  item: {
    fontSize: 16,
    color: '#4EBF76',
    fontWeight: '500',
  },
})

export default HeaderBar
