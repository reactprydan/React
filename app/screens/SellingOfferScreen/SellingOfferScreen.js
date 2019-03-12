import React from 'react';
import { StyleSheet, View } from 'react-native';
import TraddleLoader from '../../components/TraddleLoader/TraddleLoader';
import TraddleOfferList from '../../components/TraddleList/TraddleOfferList/OfferList';
import TraddleFilter from '../../components/TraddleFilter/TraddleFilter';

class SellingOfferScreen extends React.Component {
  componentDidMount() {
    this.props.fetchSellingOffer();
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
      </View>
    );
  }
}

export default SellingOfferScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
