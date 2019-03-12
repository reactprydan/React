import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

import colors from '../../config/style/colors';
import CONTRACT_ICON from '../../images/Icons/contract-icon.png';

const CurrentTradeCard = props => {
  return (
    <TouchableOpacity
      style={styles.bg}
      onPress={() => props.navigation.navigate('ContractPDFView')}
    >
      <View style={styles.first}>
        <Text style={styles.text}>TR 19/2019</Text>
      </View>
      <View style={styles.second}>
        <View style={styles.secondLeft}>
          <Text style={styles.text}>
            Commodity Name(Country) Specification{' '}
          </Text>
          <Text style={styles.text}>Quantity @ Rate Unit incorten port</Text>
          <Text style={styles.text}>Shipment/Delivery Condition </Text>
        </View>
        <View style={styles.secondRight}>
          <Image
            source={CONTRACT_ICON}
            resizeMethod="resize"
            resizeMode="contain"
            style={{ width: 20, height: 35 }}
          />
        </View>
      </View>
      <View style={styles.hr} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: colors.listBackground
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  bg: {
    width: '100%',
    minHeight: 130,
    paddingVertical: 10,
    backgroundColor: 'white'
  },
  first: {
    flex: 1,
    paddingLeft: 10,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  second: { flex: 3, flexDirection: 'row' },
  text: { color: 'black', fontSize: 12 },
  secondLeft: {
    flex: 7,

    padding: 10,
    justifyContent: 'space-evenly'
  },
  secondRight: { flex: 3, alignItems: 'center', justifyContent: 'center' },
  icon: { height: 180, width: 120 },
  hr: {
    width: '95%',
    height: 1,
    marginHorizontal: 10,
    backgroundColor: colors.grey
  }
});

export default CurrentTradeCard;
