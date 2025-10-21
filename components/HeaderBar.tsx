import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

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
    alignItems: 'center',
    backgroundColor: '#a54f4f',
    borderBottomWidth: 1,
    borderBottomColor: '#aa2828',
    flexDirection: 'row',
    justifyContent: 'space-around',  
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  item: {
    fontSize: 16,
    color: '#fff',
  },
})

export default HeaderBar
