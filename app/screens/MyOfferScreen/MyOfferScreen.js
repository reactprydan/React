import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import colors from '../../config/style/colors';
import TraddleLoader from '../../components/TraddleLoader/TraddleLoader';
import TraddleSearchBox from '../../components/TraddleSearchBox/TraddleSearchBox';
import MyOfferCard from '../../components/TraddleCard/MyOfferCard';

class MyOfferScreen extends React.Component {
  componentDidMount() {
    this.props.fetchMyOffer();
  }

  render() {
    const { navigate } = this.props.navigation;
    if (this.props.data.isFetching) {
      return <TraddleLoader />;
    }

    return (
      <View style={styles.container}>
        <View style={styles.align}>
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

export default MyOfferScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.listBackground
  },
  align: {
    alignItems: 'center',
    marginHorizontal: 15
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});
