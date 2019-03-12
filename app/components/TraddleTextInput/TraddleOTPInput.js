import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import colors from '../../config/style/colors';

const TraddleOTPInput = ({
  traddleRef,
  maxLength,
  keyboardType,
  placeholder,
  placeholderTextColor,
  underlineColorAndroid,
  value,
  style,
  textAlign,
  returnKeyType,
  onChangeText,
  onSubmitEditing,
  inputWrapperStyle
}) => {
  return (
    <View style={inputWrapperStyle}>
      <TextInput
        ref={input => traddleRef(input)}
        maxLength={maxLength}
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        underlineColorAndroid={underlineColorAndroid}
        value={value}
        style={style}
        textAlign={textAlign}
        returnKeyType={returnKeyType}
        onChangeText={text => onChangeText(text)}
        onSubmitEditing={() => onSubmitEditing()}
      />
      <View style={styles.underLine} />
    </View>
  );
};

export default TraddleOTPInput;

const styles = StyleSheet.create({
  underLineStyle: {
    backgroundColor: colors.shadows,
    width: '100%',
    height: 1,
    marginBottom: 5
  },
  otpInputStyle: {
    fontSize: 32,
    color: colors.placeholderUnderlineColor,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  inputWrapperStyle: {
    marginTop: 10,
    width: 50,
    height: 40,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  }
});

TraddleOTPInput.propTypes = {
  maxLength: PropTypes.number,
  keyboardType: PropTypes.string,
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  underlineColorAndroid: PropTypes.string,
  value: PropTypes.string.isRequired,
  style: PropTypes.object,
  textAlign: PropTypes.string,
  returnKeyType: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  inputWrapperStyle: PropTypes.object
};

TraddleOTPInput.defaultProps = {
  maxLength: 1,
  style: styles.otpInputStyle,
  placeholderTextColor: colors.shadows,
  underlineColorAndroid: colors.placeholderUnderlineColor,
  keyboardType: 'numeric',
  inputWrapperStyle: styles.inputWrapperStyle,
  textAlign: 'center',
  returnKeyType: 'next',
  placeholder: 'X'
};
