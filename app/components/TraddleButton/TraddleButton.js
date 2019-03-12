import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import color2 from '../../config/style/colors';

/**
 * title: to set button title
 * onPress :function on button press navigation
 * disabled : Set button enable or disable
 * type: button type small, medium ,large
 * styleContainer: container style for button
 * titleStyle:style of button text only
 * !syntax : <TraddleButton ...args />
 */

const TraddleButton = ({ title, onPress, size, titleStyle, style }) => {
  let buttonStyle = style;
  switch (size) {
    case 'small':
      buttonStyle = { ...style, ...styles.smallButton };
      break;
    case 'medium':
      buttonStyle = { ...style, ...styles.mediumButton };
      break;
    case 'large':
      buttonStyle = { ...style, ...styles.largeButton };
      break;
    default:
      buttonStyle = { ...style };
      break;
  }
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={titleStyle}>{title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonStyle: {
    height: 50,
    width: 100,
    borderColor: color2.mainbackground,
    borderWidth: 2,
    borderRadius: 8,
    justifyContent: 'center',
    backgroundColor: color2.appColor
  },
  smallButton: {
    height: 50,
    width: '40%',
    borderColor: color2.mainbackground,
    borderWidth: 2,
    borderRadius: 8,
    justifyContent: 'center',
    backgroundColor: color2.appColor
  },
  mediumButton: {
    height: 50,
    width: '60%',
    borderColor: color2.mainbackground,
    borderWidth: 2,
    borderRadius: 8,
    justifyContent: 'center',
    backgroundColor: color2.appColor
  },
  largeButton: {
    height: 50,
    width: '100%',
    borderColor: color2.mainbackground,
    borderWidth: 2,
    borderRadius: 8,
    justifyContent: 'center',
    backgroundColor: color2.appColor
  },
  titleStyle: {
    color: '#FFFFFF',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

TraddleButton.propTypes = {
  title: PropTypes.string,
  titleStyle: PropTypes.object,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.object,
  size: PropTypes.string
};

TraddleButton.defaultProps = {
  title: 'Enter title',
  titleStyle: styles.titleStyle,
  style: styles.buttonStyle,
  size: 'small'
};
export default TraddleButton;
