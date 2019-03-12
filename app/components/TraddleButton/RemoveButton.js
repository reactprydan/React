import React from 'react';
import { View, Dimensions, Image, StyleSheet } from 'react-native';
import TraddleButton from './TraddleButton';
import colors from '../../config/style/colors';
import MESSAGE_ICON from '../../images/Icons/chat-icon.png';

const RemoveButton = props => {
  return (
    <View style={styles.container}>
      <View style={styles.buttoncontainer}>
        <TraddleButton
          styleContainer={{
            width: (Dimensions.get('window').width - 20) / 2,
            backgroundColor: colors.red
          }}
          title="Remove Intrest"
          type="m"
          onPress={props.firstbuttonPress}
        />
        <View
          style={{
            width: (Dimensions.get('window').width - 20) / 2,
            alignItems: 'flex-end',
            justifyContent: 'center'
          }}
        >
          <Image
            resizeMode="contain"
            resizeMethod="resize"
            style={styles.image}
            source={MESSAGE_ICON}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    flex: 1,
    marginTop: 30,
    marginHorizontal: 20,
    justifyContent: 'space-between',
    paddingBottom: 30
  },
  buttoncontainer: {
    height: 80,
    flexDirection: 'row',

    paddingLeft: 10,
    paddingRight: 10
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 30,
    marginRight: 30
  }
});

export default RemoveButton;
