import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions
} from 'react-native';
import colors from '../../config/style/colors';
import STAR_ICON from '../../images/Icons/my-offer-icon.png';

const OfferCard = ({ item, onPress }) => {
  const { tradeId } = item;
  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <View style={styles.itemContainerInner}>
        <View style={styles.itemLeft}>
          <View style={styles.textcontainer}>
            <Text style={styles.productname}>{tradeId.product.name}</Text>
            <Text style={styles.paddingten}>({tradeId.origin.name})</Text>
            <Text style={styles.paddingten}>{tradeId.mainSpecification}</Text>
          </View>

          <View style={styles.textcontainer}>
            <Text style={styles.productname}>{tradeId.quantity}</Text>
            <Text style={styles.paddingten}>{tradeId.quantityUnit}</Text>
            <Text style={styles.paddingten}>
              @{tradeId.price}/{tradeId.priceUnit}
            </Text>
            <Text style={styles.paddingten}>
              {tradeId.incoterm}
              {tradeId.port}
            </Text>
          </View>
          <View style={styles.textcontainer}>
            <Text style={styles.textStyle}>{tradeId.shipmentOrDelivery}:</Text>
            <Text style={{ marginLeft: 5, color: 'white' }}>
              {tradeId.shipmentOrDeliveryPeriod}
            </Text>
          </View>
        </View>
        <View style={styles.itemRight}>
          <Image
            resizeMode="contain"
            resizeMethod="resize"
            style={styles.itemRightIcon}
            source={STAR_ICON}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: 'white'
  },
  productname: {
    textAlign: 'left',
    color: 'white'
  },
  textcontainer: {
    flex: 0.5,
    alignItems: 'flex-start',
    padding: 5,
    paddingLeft: 10,
    flexDirection: 'row'
  },
  paddingten: {
    paddingLeft: 10,
    color: 'white'
  },
  itemContainer: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 0,
    paddingBottom: 10,
    width: Dimensions.get('window').width
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
    height: 24,
    borderRadius: 12,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  itemLeft: {
    width: Dimensions.get('window').width - 40 - 30
  },
  itemRightIcon: {
    width: 24,
    height: 24,
    marginTop: 5,
    justifyContent: 'flex-end'
  }
});

export default OfferCard;
