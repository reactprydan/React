import React from 'react';
import { View, Image, TextInput, StyleSheet, Text } from 'react-native';

import SEARCH_ICON from '../../images/Icons/search-icon.png';
import colors from '../../config/style/colors';

const TraddleFilter = () => {
  return (
    <View style={styles.conatiner}>
      <View style={styles.subContainerLeft}>
        <TextInput style={styles.textInput} />
        <Image
          resizeMode="contain"
          resizeMethod="resize"
          style={styles.imageStyle}
          source={SEARCH_ICON}
        />
      </View>
      <View style={styles.subConatinerRight}>
        <View style={styles.filterIcon}>
          <View style={styles.filterButton}>
            <Text style={styles.text}>C</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingLeft: 20,
    backgroundColor: colors.listBackground
  },
  textInput: {
    flex: 1,
    paddingLeft: 5
  },
  subContainerLeft: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 3,
    flex: 6,
    borderWidth: 1,
    minHeight: 40,

    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontWeight: 'normal',
    fontSize: 24
  },
  subConatinerRight: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ffffff',
    borderRadius: 3,
    flex: 1
  },
  imageStyle: {
    width: 22,
    height: 22,
    margin: 5
  },
  filterIcon: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    padding: 2
  },
  filterButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1
  }
});

export default TraddleFilter;
