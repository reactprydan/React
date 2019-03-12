import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import provinceIcon from '../../images/brokerLogo.png';

const TraddleAvatar = ({ source, style, size, imageStyle, onPress }) => {
  let avatarStyle = null;
  switch (size) {
    case 'xlarge':
      avatarStyle = { ...style, ...styles.avatarXLarge };
      break;
    case 'large':
      avatarStyle = { ...style, ...styles.avatarLarge };
      break;
    case 'medium':
      avatarStyle = { ...style, ...styles.avatarMedium };
      break;
    case 'small':
      avatarStyle = { ...style, ...styles.avatarSmall };
      break;
    default:
      avatarStyle = { ...style, ...styles.avatarLarge };
      break;
  }
  return (
    <TouchableOpacity style={avatarStyle} onPress={() => onPress()}>
      <Image
        source={source}
        style={imageStyle}
        resizeMethod="resize"
        resizeMode="center"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  avatarSmall: {
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: '#FFFFFF'
  },
  avatarMedium: {
    height: 60,
    width: 60,
    borderRadius: 50,
    backgroundColor: '#FFFFFF'
  },
  avatarLarge: {
    height: 80,
    width: 80,
    borderRadius: 50,
    backgroundColor: '#FFFFFF'
  },
  avatarXLarge: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: '#FFFFFF'
  },
  imageStyle: {
    width: '100%',
    height: '100%'
  }
});
TraddleAvatar.prototype = {
  style: PropTypes.object,
  source: PropTypes.string,
  size: PropTypes.string,
  imageStyle: PropTypes.object,
  onPress: PropTypes.func
};

TraddleAvatar.defaultProps = {
  style: styles.avatarStyle,
  source: provinceIcon,
  size: 'large',
  imageStyle: styles.imageStyle,
  onPress: myPress
};

export default TraddleAvatar;

function myPress() {}
