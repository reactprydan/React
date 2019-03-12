import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import CheckBox from 'react-native-check-box';
import Collapsible from 'react-native-collapsible';
import colors from '../../../config/style/colors';
import TYPE1 from '../../../images/Icons/city-town-village-icon.png';
import DOWN_ARROW from '../../../images/Icons/ic_arr_down.png';
import IC_ARR_UP from '../../../images/Icons/ic_arr_up.png';
import ComodityListSubItem from '../ComodityListSubItem';
import {selectProduct, selectSubProduct} from '../../../screens/RegistrationScreen/CommoditySelection/CommoditySelectionAction'

class ComodityListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      isChecked: false
    };
  }

  render() {
    return (
      <View style={{ padding: '2%' }}>
        <View style={styles.headerStyles}>
          <CheckBox
            isChecked={this.state.isChecked}
            style={{ alignSelf: 'center' }}
            onClick={() => {
              this.props.selectProduct(this.props.product.name),this.setState({isChecked:!this.state.isChecked});
            }}
            checkBoxColor={colors.shadows}
          />

          <View style={styles.headerCommodity}>
            <Image source={TYPE1} style={styles.imageStyle} />
            <View style={styles.contentWrapperStyle}>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.contentTextStyle}
              >
                {this.props.product.name}
              </Text>
            </View>
            <View style={styles.arrowStyle}>
              <TouchableOpacity
                onPress={() =>
                  this.setState({ collapsed: !this.state.collapsed })
                }
              >
                <Image
                  source={
                    this.props.product.isOpen === true ? IC_ARR_UP : DOWN_ARROW
                  }
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <Collapsible
            style={styles.collapsedContainer}
            collapsed={this.state.collapsed}
          >
            {this.props.product.productListItem.payload.data.map(
              (prlistItem, i) => (
                <ComodityListSubItem  product={prlistItem} key={i} selectSubProduct={(id) => alert(id) || this.props.selectSubProduct(this.props.product._id,id)} />
              )
            )}
          </Collapsible>
        </View>
      </View>
    );
  }
}

 
 

const mapDispatchToProps = dispatch => {
  return {
    selectProduct: (item) => dispatch(selectProduct(item)),
    selectSubProduct: (item) => dispatch(selectSubProduct(item))
  };
};

export default connect(null,
  mapDispatchToProps
)(ComodityListItem);

const styles = StyleSheet.create({
  conatiner: {
    width: Dimensions.get('window').width,
    borderWidth: 1
  },
  imageStyle: {
    height: 20,
    width: 20,
    marginRight: 10
  },
  contentWrapperStyle: {
    justifyContent: 'flex-start'
  },
  contentTextStyle: {
    color: 'black',
    padding: 10,
    fontSize: 12,
    marginLeft: 5,
    width: 200
  },
  arrowStyle: {
    alignItems: 'flex-end',
    width: 20
  },
  headerCommodity: {
    backgroundColor: 'transparent',
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: colors.shadows,
    borderWidth: 0.6,
    borderRadius: 8,
    justifyContent: 'space-between',
    width: Dimensions.get('window').width - 100,
    marginLeft: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerStyles: {
    flexDirection: 'row'
    // alignItems: 'center'
    // justifyContent: 'center'
  },
  collapsedContainer: {
    borderColor: colors.shadows,
    borderWidth: 1,
    marginLeft: 30,
    marginRight: 20,
    marginTop: -2,
    zIndex: 2
  }
});