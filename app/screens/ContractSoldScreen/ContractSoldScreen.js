import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import TraddleLoader from '../../components/TraddleLoader/TraddleLoader';
import colors from '../../config/style/colors';
import TraddleSearchBox from '../../components/TraddleSearchBox/TraddleSearchBox';

import ContractCard from '../../components/TraddleCard/ContractCard';

class ContractSoldScreen extends React.Component {
  componentDidMount() {
    this.props.fetchSoldContract();
  }

  render() {
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
          renderItem={item => (
            <ContractCard data={item} navigation={this.props.navigation} />
          )}
        />
      </View>
    );
  }
}

export default ContractSoldScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,

    backgroundColor: colors.listBackground
  },
  searchboxcontainer: {
    alignItems: 'center'
  }
});
