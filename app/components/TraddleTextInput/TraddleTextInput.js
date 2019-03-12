/**
 ** https://github.com/Gewgawrav/traddle-app/issues/4
 ** Traddle Text input fetures
 ** you can easily show error message at the bottom of text input
 ** underline option below text input
 * ! underline feture is for every text input
 * Todo: we will make this as prop ( show underline if required using props)
 */

import React from 'react';
import { Text, View, Image, TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import colors from '../../config/style/colors';
import CommonStyle from '../../config/style/common';

const TraddleTextInput = ({
  title,
  traddleRef,
  style,
  placeholder,
  autoFocus,
  placeholderTextColor,
  underlineColorAndroid,
  autoCapitalize,
  keyboardType,
  onChangeText,
  value,
  onSubmitEditing,
  inputWrapperStyle,
  labelStyle,
  iconStyle,
  iconSource,
  secureTextEntry,
  error,
  underLine,
  editable,
  ContainerStyle
}) => {
  const inputStyle = { ...CommonStyle.textInputStyle, ...style };
  const container = { ...styles.ContainerStyle, ...ContainerStyle };
  return (
    <View style={container}>
      <View style={inputWrapperStyle}>
        <Image resizeMode="stretch" style={iconStyle} source={iconSource} />
        <Text style={labelStyle}>{title}</Text>
      </View>
      <TextInput
        ref={input => traddleRef(input)}
        style={inputStyle}
        placeholder={placeholder}
        autoFocus={autoFocus}
        placeholderTextColor={placeholderTextColor}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        onChangeText={text => onChangeText(text)}
        value={value}
        onSubmitEditing={() => onSubmitEditing()}
        underlineColorAndroid={underlineColorAndroid}
        secureTextEntry={secureTextEntry}
        editable={editable}
      />
      {underLine ? <View style={styles.underLineStyle} /> : null}
      {error ? <Text style={{ color: 'red' }}>{error}</Text> : null}
    </View>
  );
};

export default TraddleTextInput;

const styles = StyleSheet.create({
  labelStyle: {
    color: colors.labelColor,
    marginLeft: 10,
    marginRight: 10
  },
  ContainerStyle: {
    width: '100%',
    margin: 10
  },
  inputWrapperStyle: {
    flexDirection: 'row'
  },
  iconStyle: {
    width: 20,
    height: 17
  },
  underLineStyle: {
    backgroundColor: colors.shadows,
    width: '100%',
    height: 1,
    marginBottom: 5
  }
});

TraddleTextInput.propTypes = {
  title: PropTypes.string,
  style: PropTypes.object,
  placeholder: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool,
  placeholderTextColor: PropTypes.string,
  underlineColorAndroid: PropTypes.string,
  autoCapitalize: PropTypes.string,
  keyboardType: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  inputWrapperStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  iconStyle: PropTypes.object,
  secureTextEntry: PropTypes.bool,
  error: PropTypes.string,
  underLine: PropTypes.bool,
  editable: PropTypes.bool,
  ContainerStyle: PropTypes.object
};

TraddleTextInput.defaultProps = {
  title: 'Enter title as title props',
  style: CommonStyle.textInputStyle,
  autoFocus: false,
  placeholderTextColor: colors.shadows,
  underlineColorAndroid: colors.placeholderUnderlineColor,
  autoCapitalize: 'none',
  keyboardType: 'default',
  inputWrapperStyle: styles.inputWrapperStyle,
  labelStyle: styles.labelStyle,
  iconStyle: styles.iconStyle,
  secureTextEntry: false,
  error: '',
  underLine: false,
  editable: true,
  ContainerStyle: styles.ContainerStyle
};
