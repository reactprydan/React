import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import TraddleSearchBox from '../../components/TraddleSearchBox/TraddleSearchBox';
import TraddleLoader from '../../components/TraddleLoader/TraddleLoader';
import CurrentTradeCard from '../../components/TraddleCard/CurrentTradeCard';
import colors from '../../config/style/colors';

class CurrentTradeSoldScreen extends React.Component {
  componentDidMount() {
    this.props.fetchingCurrentTadeSold();
  }

  render() {
    if (this.props.data.isFetching) {
      return <TraddleLoader />;
    }
    return (
      <View style={styles.container}>
        <View style={{ alignItems: 'center' }}>
          <TraddleSearchBox />
        </View>

        <FlatList
          data={this.props.data.result}
          renderItem={item => (
            <CurrentTradeCard
              navigation={this.props.navigation}
              item={item.item}
            />
          )}
        />
      </View>
    );
  }
}

export default CurrentTradeSoldScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,

    backgroundColor: colors.listBackground
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});
