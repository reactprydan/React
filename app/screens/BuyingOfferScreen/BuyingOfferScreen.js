import React from 'react';
import { StyleSheet, View } from 'react-native';
import TraddleLoader from '../../components/TraddleLoader/TraddleLoader';
import TraddleOfferList from '../../components/TraddleList/TraddleOfferList/OfferList';
import FloatingButton from '../../components/TraddleButton/FloatingButton';
import TraddleFilter from '../../components/TraddleFilter/TraddleFilter';

class BuyingOfferScreen extends React.Component {
  componentDidMount() {
    this.props.fetchBuyingOffer();
  }

  render() {
    if (this.props.data.isFetching) {
      return <TraddleLoader />;
    }
    return (
      <View style={styles.container}>
        <TraddleFilter />
        <TraddleOfferList
          navigation={this.props.navigation}
          offer={this.props.data.result}
        />

        <FloatingButton />
      </View>
    );
  }
}

export default BuyingOfferScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
