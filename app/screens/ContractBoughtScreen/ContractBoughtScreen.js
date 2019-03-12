import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import TraddleSearchBox from '../../components/TraddleSearchBox/TraddleSearchBox';

import ContractCard from '../../components/TraddleCard/ContractCard';
import TraddleLoader from '../../components/TraddleLoader/TraddleLoader';
import colors from '../../config/style/colors';

class ContractBoughtScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchContractData();
  }

  render() {
    console.log(this.props.data.result, 'this.props.data.result');
    if (this.props.data.isFetching) {
      return <TraddleLoader />;
    }
    return (
      <View style={styles.container}>
        <View style={styles.searchboxcontainer}>
          <TraddleSearchBox />
        </View>
        <FlatList
          style={{ marginHorizontal: 10 }}
          data={this.props.data.result}
          renderItem={item => (
            <ContractCard data={item} navigation={this.props.navigation} />
          )}
        />
      </View>
    );
  }
}

export default ContractBoughtScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    backgroundColor: colors.listBackground
  },
  searchboxcontainer: {
    alignItems: 'center',
    marginHorizontal: 10
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  }
});
