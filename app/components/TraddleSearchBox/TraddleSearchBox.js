import React from 'react';
import { View, Image, TextInput, StyleSheet } from 'react-native';

import SEARCH_ICON from '../../images/Icons/search-icon.png';

const TraddleSearchBox = () => {
  return (
    <View style={styles.bg}>
      <View style={styles.input}>
        <TextInput style={styles.textInput} />
      </View>
      <View style={styles.icon}>
        <Image
          resizeMode="contain"
          resizeMethod="resize"
          style={styles.Icon}
          source={SEARCH_ICON}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    backgroundColor: 'white',

    margin: 10
  },
  textInput: {
    padding: 10
  },
  icon: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  input: {
    flex: 9,
    justifyContent: 'center'
  },
  Icon: {
    width: 25,
    height: 25,
    margin: 5
  }
});

export default TraddleSearchBox;
