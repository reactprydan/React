import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import TraddleLoader from '../../components/TraddleLoader/TraddleLoader';
import TraddleSearchBox from '../../components/TraddleSearchBox/TraddleSearchBox';
import MyOfferCard from '../../components/TraddleCard/MyOfferCard';
import colors from '../../config/style/colors';

class TraddleOfferScreen extends React.Component {
  componentDidMount() {
    this.props.fetchTraddleOffer();
  }

  render() {
    const { navigate } = this.props.navigation;
    if (this.props.data.isFetching) {
      return <TraddleLoader />;
    }
    return (
      <View style={styles.container}>
        <View style={styles.searchboxcontainer}>
          <TraddleSearchBox />
        </View>
        <FlatList
          data={this.props.data.result}
          renderItem={({ item }) => (
            <MyOfferCard
              item={item}
              buyingButtonPress={() => console.log('in Progress')}
              cardPress={() =>
                navigate('BuyerOfferDetailScreen', { myoffer: true })
              }
            />
          )}
        />
      </View>
    );
  }
}

export default TraddleOfferScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.listBackground
  },
  searchboxcontainer: {
    alignItems: 'center',
    marginHorizontal: 15
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});
