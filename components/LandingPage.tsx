import React from 'react';
import { StyleSheet, View } from 'react-native';
import FooterBar from './FooterBar';
import HeaderBar from './HeaderBar';

const LandingPage = () => {
  return (
    <View style={styles.safe}>
      <View style={styles.content}>
        <HeaderBar />
        <FooterBar />
      </View>
    </View>
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
