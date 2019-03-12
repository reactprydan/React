import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native';

import TraddleButton from '../TraddleButton/TraddleButton';
import colors from '../../config/style/colors';

const MyOfferCard = ({ item, cardPress, buyingButtonPress }) => (
  <TouchableOpacity
    style={styles.itemContainer}
    // eslint-disable-next-line react/jsx-no-bind
    onPress={cardPress}
  >
    <View style={styles.itemContainerInner}>
      <View style={styles.itemLeft}>
        <Text style={{ color: 'white' }}>{item.mainSpecification}</Text>
        <Text style={{ color: 'white' }}>{item.mainSpecification}</Text>
        <Text style={{ color: 'white' }}>{item.mainSpecification}</Text>
      </View>
      <View style={styles.itemRight}>
        <TraddleButton
          titleStyle={{ color: 'black', textAlign: 'center', height: 20 }}
          styleContainer={{
            backgroundColor: 'yellow',
            height: 40,
            width: 80,
            marginBottom: 10
          }}
          title="Buying"
          type="n"
          onPress={buyingButtonPress}
        />
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 0,
    paddingBottom: 10,
    width: Dimensions.get('window').width - 40
  },
  itemContainerInner: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    width: Dimensions.get('window').width - 40,
    borderBottomWidth: 1,
    borderColor: colors.white
  },
  itemRight: {
    width: 24,
    height: 50,
    borderRadius: 12,

    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  itemLeft: {
    width: Dimensions.get('window').width - 40 - 30
  },
  itemRightIcon: {
    width: 10,
    height: 10,
    justifyContent: 'flex-end'
  }
});

export default MyOfferCard;
