import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const BuyerOfferDetailCard = props => {
  return (
    <View style={styles.row}>
      <View style={styles.detailsLeft}>
        <Text>{props.lefttext}</Text>
      </View>
      <View style={styles.detailsRight}>
        <Text>
          Lorem ipsum dolor sit amet, virtute antiopam mea eu. Ius ei veniam
          repudiandae mediocritatem, vel ut veri melius. Esse omnium debitis duo
          no
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  lefttext: { fontSize: 14, color: 'black', textAlign: 'left' },
  detailsLeft: {
    flex: 1.5,
    alignItems: 'flex-start',

    paddingLeft: 8,
    justifyContent: 'space-around',

    borderRightWidth: 0.3,
    borderRightColor: 'grey'
  },
  detailsRight: {
    flex: 3,
    alignItems: 'center',
    paddingLeft: 5,
    flexWrap: 'wrap',
    textAlign: 'left',
    padding: 10,

    justifyContent: 'space-around'
  }
});
export default BuyerOfferDetailCard;
