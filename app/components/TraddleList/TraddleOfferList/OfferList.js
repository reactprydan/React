// User page main
// contains:search , DrawerMenu , filter ,listing ,bottom

import React from 'react';
import { Platform, StyleSheet, View, FlatList } from 'react-native';
import OffersCard from '../../TraddleCard/OffersCard';
import colors from '../../../config/style/colors';

const OfferList = props => {
  return (
    <View style={styles.container}>
      <FlatList
        data={props.offer}
        renderItem={item => (
          <OffersCard
            item={item.item}
            onPress={() => props.navigation.navigate('BuyerOfferDetailScreen')}
          />
        )}
        keyExtractor={(item, index) => index}
        onEndReachedThreshold={Platform.OS === 'ios' ? 0 : 0.5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.listBackground,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default OfferList;
