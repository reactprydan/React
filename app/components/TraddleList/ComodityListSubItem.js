import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import CheckBox from 'react-native-check-box';
import colors from '../../config/style/colors';
import {selectSubProduct} from '../../screens/RegistrationScreen/CommoditySelection/CommoditySelectionAction'
class ComodityListSubItem extends Component {
  render() {
    return (
      <View style={styles.headerStyles}>
        <CheckBox
          isChecked={this.props.product.isSelected}
          checkBoxColor={colors.shadows}
          onClick={() => this.props.selectSubProduct(this.props.product._id)}
        />
        <Text style={styles.text}>{this.props.product.name}</Text>
      </View>
    );
  }
}

export default ComodityListSubItem;

const styles = StyleSheet.create({
  headerStyles: {
    flexDirection: 'row',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  text: { fontSize: 12, marginLeft: 20 }
});
