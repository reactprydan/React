// User page main
// contains:search , DrawerMenu , filter ,listing ,bottom

import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  ScrollView,
  Dimensions,
  TextInput
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import colors from '../../config/style/colors';
import * as BuyingOfferAction from './SellingOfferScreen';
import FILTER_ICON from '../../images/Icons/address-icon.png';
import SEARCH_ICON from '../../images/Icons/search-icon.png';
import TraddleButton from '../../components/TraddleButton/TraddleButton';

class OfferDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // const item = this.props.navigation.getParams('item', {});
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
        <View style={styles.filterRightSide}>
          <Image
            resizeMode="contain"
            resizeMethod="resize"
            style={styles.filterRightIcon}
            source={FILTER_ICON}
          />
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: 'white', alignSelf: 'center', height: 20 }}>
          {'Floated on 24/09/2019,hh:mm'}
        </Text>
        <View style={styles.containerAdjustment}>
          <View style={styles.itemContainer}>
            <View style={styles.itemContainerInner}>
              <ScrollView>
                <View style={styles.itemContainerWithBoarder}>
                  <ScrollView>
                    {/* row1 */}
                    <View
                      style={{
                        flexDirection: 'row',
                        height: 50
                      }}
                    >
                      <Text style={styles.textStyle}>product</Text>
                      <View style={styles.verticalView} />
                      <Text style={styles.textStyle2}>
                        {'<Details go here>'}
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        height: 50
                      }}
                    >
                      <Text style={styles.textStyle}>Origin</Text>
                      <View style={styles.verticalView} />
                      <Text style={styles.textStyle2}>
                        {'<Details go here>'}
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        height: 50
                      }}
                    >
                      <Text style={styles.textStyle}>
                        {'Main specification'}
                      </Text>
                      <View style={styles.verticalView} />
                      <Text style={styles.textStyle2}>
                        {'<Details go here>'}
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        height: 50
                      }}
                    >
                      <Text style={styles.textStyle}>Quality</Text>
                      <View style={styles.verticalView} />
                      <Text style={styles.textStyle2}>
                        {'<Details go here>'}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        height: 50
                      }}
                    >
                      <Text style={styles.textStyle}>Price</Text>
                      <View style={styles.verticalView} />
                      <Text style={styles.textStyle2}>
                        {'<Details go here>'}
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        height: 50
                      }}
                    >
                      <Text style={styles.textStyle}>Incoterm</Text>
                      <View style={styles.verticalView} />
                      <Text style={styles.textStyle2}>
                        {'<Details go here>'}
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        height: 50
                      }}
                    >
                      <Text style={styles.textStyle}>port</Text>
                      <View style={styles.verticalView} />
                      <Text style={styles.textStyle2}>
                        {'<Details go here>'}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        height: 50
                      }}
                    >
                      <Text style={styles.textStyle}>
                        {'Shipment/Delivery'}
                      </Text>
                      <View style={styles.verticalView} />
                      <Text style={styles.textStyle2}>
                        {'<Details go here>'}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        height: 50
                      }}
                    >
                      <Text style={styles.textStyle}>Packing</Text>
                      <View style={styles.verticalView} />
                      <Text style={styles.textStyle2}>
                        {'<Details go here>'}
                      </Text>
                    </View>
                  </ScrollView>
                </View>
              </ScrollView>
            </View>

            <View
              style={[
                styles.itemContainerWithBoarder,
                { height: 40, alignSelf: 'center' }
              ]}
            >
              <Text
                style={[
                  styles.textStyle2,
                  {
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }
                ]}
              >
                {'No Images'}
              </Text>
            </View>
          </View>

          <View
            style={{
              height: 80,
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingLeft: 10,
              paddingRight: 10
            }}
          >
            <TraddleButton
              styleContainer={{
                width: (Dimensions.get('window').width - 20) / 2,
                backgroundColor: colors.appColor
              }}
              title="Chat"
              type="m"
              onPress={this.registerButtonHandler}
            />
            <TraddleButton
              styleContainer={{
                width: (Dimensions.get('window').width - 20) / 2,
                backgroundColor: 'orange'
              }}
              title="Book"
              type="m"
              onPress={this.registerButtonHandler}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.listBackground
  },
  containerAdjustment: {
    height: Dimensions.get('window').height - 130 - 30,
    backgroundColor: colors.blue
  },

  itemContainer: {
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    justifyContent: 'center',
    marginBottom: 10,
    backgroundColor: '#FFF',
    borderRadius: 4,
    height: Dimensions.get('window').height - 130 - 30 - 80 + 10
  },
  itemContainerWithBoarder: {
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 0,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'flex-start',
    backgroundColor: '#FFF',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.shadows,
    width: Dimensions.get('window').width - 40,
    height: Dimensions.get('window').height - 130 - 30 - 80 - 20 - 40
  },
  itemContainerInner: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    width: Dimensions.get('window').width - 20,
    borderBottomWidth: 1,
    borderColor: colors.white
  },
  itemRight: {
    width: Dimensions.get('window').width - 200,
    justifyContent: 'flex-start'
  },
  itemLeft: {
    width: Dimensions.get('window').width - 220,
    justifyContent: 'flex-start'
  },
  itemRightIcon: {
    width: 10,
    height: 10,
    justifyContent: 'flex-end'
  },
  textStyle: {
    justifyContent: 'center',
    color: '#000',
    width: Dimensions.get('window').width / 3,
    marginTop: 10
  },
  textStyle2: {
    marginTop: 10,
    justifyContent: 'center',
    color: colors.shadows
  },
  verticalView: {
    backgroundColor: colors.shadows,
    width: 1,
    marginLeft: 10,
    marginRight: 10,
    height: 50
  }
});

const mapStateToProps = state => {
  return {
    buyingOffer: state.buyingOffer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    BuyingOfferAction: bindActionCreators(BuyingOfferAction, dispatch)
    // favaction: bindActionCreators(favaction, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OfferDetailScreen);
