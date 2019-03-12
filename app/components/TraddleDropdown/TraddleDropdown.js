/**
 ** https://github.com/Gewgawrav/traddle-app/issues/4
 ** Traddle dropdown
 ** you can easily show error message at the bottom of dropdown
 ** data is dropdown items as list
 ** placeholder for hint of dropdownitem
 ** value selected value from dropdown
 * ! underline  is transparent for dropdown
 * Todo: we will make this as prop ( show underline if required using props)
 */

import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import PropTypes from 'prop-types';
import colors from '../../config/style/colors';
import CommonStyle from '../../config/style/common';

const TraddleDropdown = ({
  title,
  traddleRef,
  style,
  placeholder,
  placeholderTextColor,
  underlineColorAndroid,
  autoCapitalize,
  keyboardType,
  onChangeText,
  value,
  onSubmitEditing,
  secureTextEntry,
  error,
  editable,
  data,
  iconStyle,
  inputWrapperStyle,
  iconSource,
  labelStyle
}) => {
  const inputStyle = { ...CommonStyle.roundCornerDropStyles, ...style };
  return (
    <View style={{}}>
      <View style={inputWrapperStyle}>
        <Image resizeMode="contain" style={iconStyle} source={iconSource} />
        <Text style={labelStyle}>{title}</Text>
      </View>
      <Dropdown
        ref={input => traddleRef(input)}
        data={data}
        containerStyle={[
          inputStyle,
          {
            marginTop: 10,
            marginBottom: 10
          }
        ]}
        placeholder={placeholder}
        textColor={placeholderTextColor}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        onChangeText={text => onChangeText(text)}
        value={value}
        onSubmitEditing={() => onSubmitEditing()}
        baseColor={underlineColorAndroid}
        secureTextEntry={secureTextEntry}
        editable={editable}
      />

      {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  labelStyle: {
    color: colors.labelColor,
    marginLeft: 10,
    marginRight: 10
  },
  inputWrapperStyle: {
    flexDirection: 'row',
    margin: 10
  },
  iconStyle: {
    width: 20,
    height: 20
  },
  underLineStyle: {
    backgroundColor: colors.shadows,
    width: '100%',
    height: 1,
    marginBottom: 5
  }
});

TraddleDropdown.propTypes = {
  title: PropTypes.string,
  style: PropTypes.object,
  placeholder: PropTypes.string.isRequired,
  placeholderTextColor: PropTypes.string,
  underlineColorAndroid: PropTypes.string,
  autoCapitalize: PropTypes.string,
  keyboardType: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  inputWrapperStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  iconStyle: PropTypes.object,
  error: PropTypes.string,
  editable: PropTypes.bool
};

TraddleDropdown.defaultProps = {
  title: 'Enter title as title props',
  style: CommonStyle.roundCornerDropStyles,
  placeholderTextColor: colors.shadows,
  underlineColorAndroid: 'transparent',
  autoCapitalize: 'none',
  keyboardType: 'default',
  inputWrapperStyle: styles.inputWrapperStyle,
  labelStyle: styles.labelStyle,
  iconStyle: styles.iconStyle,
  error: '',
  editable: true
};
export default TraddleDropdown;
