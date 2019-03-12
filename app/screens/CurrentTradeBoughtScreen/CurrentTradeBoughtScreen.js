import React from 'react';
import { StyleSheet, View, Dimensions, FlatList } from 'react-native';
import TraddleSearchBox from '../../components/TraddleSearchBox/TraddleSearchBox';
import TraddleLoader from '../../components/TraddleLoader/TraddleLoader';
import colors from '../../config/style/colors';
import CurrentTradeCard from '../../components/TraddleCard/CurrentTradeCard';

const { width } = Dimensions.get('window');
class CurrentTradeBoughtScreen extends React.Component {
  componentDidMount() {
    this.props.fetchingCurrentTadeBroght();
  }

  render() {
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

export default CurrentTradeBoughtScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,

    backgroundColor: colors.listBackground
  },
  align: {
    alignItems: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  bg: {
    width: width - 20,
    minHeight: 130,
    marginHorizontal: 10,

    backgroundColor: 'white'
  },
  first: {
    flex: 1,
    paddingLeft: 10,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  second: { flex: 3, flexDirection: 'row' },
  text: { color: 'black', fontSize: 12 },
  secondLeft: {
    flex: 7,

    padding: 10,
    justifyContent: 'space-evenly'
  },
  secondRight: { flex: 3, alignItems: 'center', justifyContent: 'center' },
  icon: { height: 180, width: 120 },
  hr: {
    width: '95%',
    height: 1,
    marginHorizontal: 10,
    backgroundColor: colors.grey
  }
});
