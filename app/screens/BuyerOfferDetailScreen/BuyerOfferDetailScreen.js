// User page main
// contains:search , DrawerMenu , filter ,listing ,bottom

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import colors from '../../config/style/colors';

import BuyerOfferDetailCard from '../../components/BuyerOfferDetailCard/BuyerOfferDetailCard';
import TraddleLoader from '../../components/TraddleLoader/TraddleLoader';

import RemoveButton from '../../components/TraddleButton/RemoveButton';
import HorizontalButton from '../../components/TraddleButton/HorizontalButton';

class BuyerOfferDetailScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myoffer: false
    };
  }

  componentDidMount() {
    this.props.fetchBuyingOfferDetail();
    const { params } = this.props.navigation.state;

    if (params && params.myoffer) {
      this.setState({ myoffer: params.myoffer });
    }
  }

  render() {
    const { myoffer } = this.state;
    if (this.props.data.isFetching) {
      return <TraddleLoader />;
    }
    return (
      <View style={styles.container}>
        <ScrollView style={styles.subcontainer}>
          <View>
            <View style={styles.detailBox}>
              <BuyerOfferDetailCard lefttext="Prodcut" />
              <BuyerOfferDetailCard lefttext="Origin" />
              <BuyerOfferDetailCard lefttext="Main Specification" />
              <BuyerOfferDetailCard lefttext="Quality" />

              <BuyerOfferDetailCard lefttext="Price" />
              <BuyerOfferDetailCard lefttext="Shipment/Delivery" />
              <BuyerOfferDetailCard lefttext="Packging" />
              <BuyerOfferDetailCard lefttext="Payment terms" />
              <BuyerOfferDetailCard lefttext="Port of Discharge" />
              <BuyerOfferDetailCard lefttext="Further specification" />
              <BuyerOfferDetailCard lefttext="Other conditions" />
            </View>
            <View style={styles.noImage}>
              <View style={styles.noImage} />
              <TouchableOpacity style={styles.imageButton}>
                <Text> No Images</Text>
              </TouchableOpacity>
              <View style={styles.noImage} />
            </View>
          </View>
        </ScrollView>
        <View style={styles.buttoncontiner}>
          {myoffer ? <RemoveButton /> : <HorizontalButton />}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: colors.blue
  },
  subcontainer: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white'
  },
  buttoncontiner: {
    height: '15%',
    paddingBottom: 90,
    backgroundColor: '#001331'
  },
  detailBox: {
    flex: 9,
    height: '100%',
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 0.3
  },
  noImage: {
    flex: 1
  },

  imageButton: {
    flex: 2,
    minHeight: 40,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 10,
    borderColor: 'grey',
    borderWidth: 0.3
  }
});

export default BuyerOfferDetailScreen;
