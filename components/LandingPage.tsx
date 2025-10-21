import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderBar from './HeaderBar';
import BottomBar from './BottomBar';

const LandingPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar />
      <View style={styles.content}>
      </View>
      <BottomBar />
    </SafeAreaView>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center', // optional: centers content vertically
    alignItems: 'center', // optional: centers content horizontally
  },
});
