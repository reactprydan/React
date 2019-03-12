import React from 'react';
import moment from 'moment';
import { View, Text, StyleSheet } from 'react-native';
import TraddleButton from '../TraddleButton/TraddleButton';
import colors from '../../config/style/colors';

const ContractCard = props => {
  console.log(props.data.item);
  const { tradeId } = props.data.item;

  return (
    <View style={styles.cardcontainer}>
      <View style={styles.firstcontainer}>
        <Text style={{ paddingLeft: 5 }}>TR </Text>
        <Text>{moment(tradeId.createdAt).format('MMM Do YY')}</Text>
      </View>
      <View style={styles.textcontainer}>
        <Text style={{ textAlign: 'left' }}>{tradeId.product.name}</Text>
        <Text>({tradeId.origin.name})</Text>
        <Text style={{ paddingLeft: 10 }}>{tradeId.mainSpecification}</Text>
      </View>
      <View style={styles.textcontainer}>
        <Text style={{ textAlign: 'left' }}>{tradeId.quantity}</Text>
        <Text>{tradeId.quantityUnit}</Text>
        <Text style={{ paddingLeft: 10 }}>
          @{tradeId.price}/{tradeId.priceUnit}
        </Text>
        <Text style={{ marginLeft: 10 }}>
          {tradeId.incoterm}
          {tradeId.port}
        </Text>
      </View>
      <View style={styles.textcontainer}>
        <Text>{tradeId.shipmentOrDelivery}:</Text>
        <Text style={{ marginLeft: 5 }}>
          {tradeId.shipmentOrDeliveryPeriod}
        </Text>
      </View>
      <View style={styles.textcontainer}>
        <Text>Confirmed:</Text>
        <Text style={{ marginLeft: 5 }}>19-Feb-2019|20:31</Text>
      </View>
      <View style={styles.buttoncontainer}>
        <TraddleButton
          styleContainer={styles.callbutton}
          titleStyle={{ color: 'black', textAlign: 'center' }}
          title="Chat"
          type="n"
          onPress={() =>
            props.navigation.navigate('ChatScreen', {
              title: tradeId.product.name + '(' + tradeId.origin.name + ')'
            })
          }
        />
        <TraddleButton
          styleContainer={styles.callbutton}
          titleStyle={{ color: 'black', textAlign: 'center' }}
          title="Contract"
          type="n"
          onPress={() => props.navigation.navigate('Contract')}
        />
      </View>
      <View style={styles.hr} />
    </View>
  );
};

const styles = StyleSheet.create({
  cardcontainer: {
    width: '100%',
    height: '100%',
    paddingVertical: 10,
    backgroundColor: 'white'
  },
  firstcontainer: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 5
  },
  textcontainer: {
    flex: 0.5,
    alignItems: 'flex-start',
    padding: 5,
    paddingLeft: 10,
    flexDirection: 'row'
  },
  thirdcontainer: {
    flex: 0.8,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 5
  },
  buttoncontainer: {
    flex: 1.5,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  callbutton: {
    backgroundColor: 'white',
    borderWidth: 0.5,
    height: 30,
    width: '45%',
    borderColor: colors.grey
  },
  hr: {
    width: '95%',
    height: 1,
    backgroundColor: colors.grey,
    marginVertical: 15,
    marginHorizontal: 10
  }
});

export default ContractCard;
