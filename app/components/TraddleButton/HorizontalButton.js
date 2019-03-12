import React from 'react';
import { View } from 'react-native';
import TraddleButton from './TraddleButton';
import colors from '../../config/style/colors';

const HorizontalButton = props => {
  return (
    <View
      style={{
        height: 100,
        flex: 1,
        marginTop: 30,
        marginHorizontal: 20,
        justifyContent: 'space-between'
      }}
    >
      <View
        style={{
          height: 80,
          flexDirection: 'row',
          justifyContent: 'space-around',
          paddingLeft: 10,
          paddingRight: 10
        }}
      >
        <TraddleButton
          styleContainer={{
            width: '50%',
            backgroundColor: colors.appColor,
            marginRight: 10
          }}
          title="Chat"
          type="m"
          onPress={props.firstbuttonPress}
        />
        <TraddleButton
          styleContainer={{
            width: '50%',
            marginLeft: 10,
            backgroundColor: 'green'
          }}
          title="Book"
          type="m"
          onPress={props.secondbuttonPress}
        />
      </View>
    </View>
  );
};

export default HorizontalButton;
