import { StyleSheet, Text, Dimensions, View } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import TraddleAvatar from '../TraddleAvatar/TraddleAvatar';
import provinceIcon from '../../images/brokerLogo.png';

const RegistrationStackHeader = ({ title, subTitile }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#1B7690', '#887965', '#FF7500']}
        style={styles.linearGradient}
      >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitile}>{subTitile}</Text>
      </LinearGradient>
      <TraddleAvatar
        size="large"
        source={provinceIcon}
        style={{ position: 'absolute', bottom: 0, right: 20 }}
      />
    </View>
  );
};

export default RegistrationStackHeader;

const styles = StyleSheet.create({
  container: {
    height: (Dimensions.get('window').height * 20) / 100 + 35
  },
  linearGradient: {
    height: (Dimensions.get('window').height * 20) / 100,
    width: Dimensions.get('window').width
  },
  title: {
    fontSize: 24,
    fontFamily: 'Gill Sans',
    color: '#ffffff',
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 60,
    left: 30,
    fontWeight: '500'
  },
  subTitile: {
    fontSize: 20,
    fontFamily: 'Gill Sans',
    color: '#ffffff',
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 35,
    left: 30
  }
});

RegistrationStackHeader.propTypes = {
  title: PropTypes.string,
  subTitile: PropTypes.string
};

RegistrationStackHeader.defaultProps = {
  title: 'BROKER',
  subTitile: 'REGISTRATION FORM'
};
