import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HeaderBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.item}>Squad</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.item}>EventFinder</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.item}>Support</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    
  },
  box: {
    width: 75,       
    height: 70,
    backgroundColor: '#E8F5E9',
    borderRadius: 8, 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 130,

  },
  item: {
    fontSize: 14,
    color: '#4EBF76',
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default HeaderBar;
