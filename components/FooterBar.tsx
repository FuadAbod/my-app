import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const FooterBar = () => {
  return (
    <View style={styles.container}>
        <Link href="./chat" style={styles.iconBox}>
        <Ionicons name="chatbubble-outline" size={28} color="#4EBF76" /> 
        </Link>

      <Link href="./connect" style={styles.iconBox}>
        <Ionicons name="people-outline" size={28} color="#4EBF76" />
      </Link>

      <Link href="./profile" style={styles.iconBox}>
        <Ionicons name="person-circle-outline" size={28} color="#4EBF76" />
      </Link>

      <Link href="./notification" style={styles.iconBox}>
        <Ionicons name="notifications-outline" size={28} color="#4EBF76" />
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 1400,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14
  },

  iconBox: {
    padding: 20,
    borderRadius: 8,
  },
})

export default FooterBar
