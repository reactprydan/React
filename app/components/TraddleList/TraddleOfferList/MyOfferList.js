// User page main
// contains:search , DrawerMenu , filter ,listing ,bottom

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  TextInput,
  FlatList
} from 'react-native';

import colors from '../../../config/style/colors';

import SEARCH_ICON from '../../../images/Icons/search-icon.png';
import TraddleButton from '../../TraddleButton/TraddleButton';

class MyOfferList extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.renderItem = this.renderItem.bind(this);
    this.renderFilters = this.renderFilters.bind(this);
    console.log(this.props.myOffer);
  }

  onItemPress = item => {
    console.log('this', item, this.props.navigation);
    const { navigation } = this.props;

    navigation.navigate('BuyerOfferDetailScreen', { myoffer: true });
  };

  renderItem({ item }) {
    console.log('item', item);
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        // eslint-disable-next-line react/jsx-no-bind
        onPress={() => this.onItemPress(item)}
      >
        <View style={styles.itemContainerInner}>
          <View style={styles.itemLeft}>
            <Text style={{ color: 'white' }}>{item.mainSpecification}</Text>
            <Text style={{ color: 'white' }}>{item.mainSpecification}</Text>
            <Text style={{ color: 'white' }}>{item.mainSpecification}</Text>
          </View>
          <View style={styles.itemRight}>
            <TraddleButton
              titleStyle={{ color: 'black', textAlign: 'center', height: 20 }}
              styleContainer={{
                backgroundColor: 'yellow',
                height: 40,
                width: 80,
                marginBottom: 10
              }}
              title="Buying"
              type="n"
              onPress={this.registerButtonHandler}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  renderFilters = () => {
    return (
      <View style={styles.filterContainer}>
        <View style={styles.filterLeftSide}>
          <TextInput style={styles.filterSearchInput} />
          <View style={styles.filterLeftInside}>
            <Image
              resizeMode="contain"
              resizeMethod="resize"
              style={styles.filterLeftRightIcon}
              source={SEARCH_ICON}
            />
          </View>
        </View>
      </View>
    );
  };

  renderOfferData() {
    return <View>{this.renderFilters()}</View>;
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.myOffer}
          extraData={this.props}
          renderItem={item => {
            return this.renderItem(item);
          }}
          keyExtractor={(item, index) => index}
          onEndReachedThreshold={Platform.OS === 'ios' ? 0 : 0.5}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: colors.listBackground
  },
  containerAdjustment: {
    height: Dimensions.get('window').height - 130 - 65,
    // height: Dimensions.get('window').height - 130 - 10,
    backgroundColor: colors.blue
  },
  buttonContainer: { height: 50, paddingLeft: 10, paddingRight: 10 },
  filterContainer: {
    width: Dimensions.get('window').width - 10,
    height: 40,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 0,
    paddingBottom: 0
  },
  filterSearchInput: {
    width: Dimensions.get('window').width - 20 - 10 - 40,
    height: 30
  },
  filterLeftSide: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 3,
    height: 30,
    width: Dimensions.get('window').width - 20 - 10
  },
  filterLeftRightIcon: {
    width: 20,
    alignSelf: 'center',
    height: 30,
    justifyContent: 'center'
  },
  filterLeftInside: {
    width: 30,
    marginLeft: 10,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  filterRightSide: {
    width: 30,
    height: 30,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ffffff',
    borderRadius: 3,
    borderWidth: 1
  },
  filterRightIcon: {
    width: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

  itemContainer: {
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 0,
    paddingBottom: 10,
    width: Dimensions.get('window').width - 40
  },
  itemContainerInner: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    width: Dimensions.get('window').width - 40,
    borderBottomWidth: 1,
    borderColor: colors.white
  },
  itemRight: {
    width: 24,
    height: 50,
    borderRadius: 12,

    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  itemLeft: {
    width: Dimensions.get('window').width - 40 - 30
  },
  itemRightIcon: {
    width: 10,
    height: 10,
    justifyContent: 'flex-end'
  }
});

export default MyOfferList;
