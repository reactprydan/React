import React from 'react';
import { View,Image ,StyleSheet } from 'react-native';
import LOGO_IMAGE from '../../images/landing1-logo.png';

const TraddleLogo = ()=>{
    return(
      <View>

        <Image
          resizeMode="contain"
          resizeMethod="resize"
          style={styles.logoStyle}
          source={LOGO_IMAGE}
        />
      </View>
    )
}

const styles = StyleSheet.create({
    logoStyle: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginLeft:10,
      }
    })      

export default TraddleLogo