import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderBar from './HeaderBar';
import FooterBar from './FooterBar';

const LandingPage = () => {
  return (
    <SafeAreaView style={styles.safe} edges={['top','bottom']}>
      <View style={styles.content}>
        <HeaderBar />
        <FooterBar />
      </View>
    </SafeAreaView>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: 'transparent', // ensures the whole screen is white
  },
  content: {
    flex: 1,
    justifyContent: 'space-between', // pushes footer to bottom
  },
});
