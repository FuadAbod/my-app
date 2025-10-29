import React from 'react';
import { StyleSheet, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderBar from './HeaderBar';
import BottomBar from './BottomBar';

const LandingPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <HeaderBar />
      </View>

      <View style={styles.footer}>
        <BottomBar />
      </View>
      
    </SafeAreaView>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header:{

  },

  footer: {

  }
});
