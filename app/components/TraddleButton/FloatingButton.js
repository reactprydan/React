import React from 'react';
import { View, Dimensions, Text } from 'react-native';
import colors from '../../config/style/colors';

const { width } = Dimensions.get('window');

const FloatingButton = () => (
  <View
    style={{
      width: width - 40,
      height: 60,
      backgroundColor: colors.primarygreen,
      borderRadius: 10,
      position: 'absolute',
      bottom: 10,
      marginHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <Text style={{ color: colors.white, fontSize: 20 }}>
      FLOAT OFFER in the Market
    </Text>
  </View>
);
export default FloatingButton;
