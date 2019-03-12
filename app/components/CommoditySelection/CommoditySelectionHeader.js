import {
    StyleSheet,
    Text,
    Dimensions,
    View
  } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types'

const CommoditySelectionHeader = ({title,subTitle})=>{
    return(
      <View style={styles.container}>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#1B7690', '#887965', '#FF7500']} style={styles.linearGradient}>
          <Text style={styles.title}>
            {title}
          </Text>
          <Text style={styles.subTitle}>
            {subTitle}
          </Text>
        </LinearGradient>
      </View>
    )
}

export default CommoditySelectionHeader;

const styles = StyleSheet.create({
    container:{
        height:Dimensions.get('window').height * 20 /100 +35,
    },
    linearGradient: {
      height:Dimensions.get('window').height * 20 /100,
      width:Dimensions.get('window').width
    },
    title: {
      fontSize: 24,
      fontFamily: 'Gill Sans',
      color: '#ffffff',
      backgroundColor: 'transparent',
      position:"absolute",
      bottom:60,
      left:10
    },
    subTitle: {
        fontSize: 20,
        fontFamily: 'Gill Sans',
        color: '#ffffff',
        backgroundColor: 'transparent',
        position:"absolute",
        bottom:35,
        left:10
      },
})  

CommoditySelectionHeader.propTypes ={
    title:PropTypes.string,
    subTitle:PropTypes.string,
};

CommoditySelectionHeader.defaultProps ={
    title:"",
    subTitle:"",
}