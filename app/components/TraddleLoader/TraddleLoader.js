import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

const TraddleLoader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="small" color="#00ff00" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default TraddleLoader;
