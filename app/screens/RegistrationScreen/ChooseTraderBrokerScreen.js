// https://github.com/Gewgawrav/traddle-app/issues/6
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground
} from 'react-native';
import colors from '../../config/style/colors';
import TraddleButton from '../../components/TraddleButton/TraddleButton';
import BG_IMAGE from '../../images/background.png';
import LOGO_IMAGE from '../../images/landing1-logo.png';
import TRADER_IMAGE from '../../images/traderLogo.png';
import BROKER_IMAGE from '../../images/brokerLogo.png';
import TraddleAvatar from '../../components/TraddleAvatar/TraddleAvatar';

class ChooseTraderBrokerScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ImageBackground
        resizeMethod="scale"
        resizeMode="cover"
        source={BG_IMAGE}
        style={{ width: '100%', height: '100%' }}
      >
        <View style={styles.container}>
          <Image
            resizeMode="contain"
            resizeMethod="resize"
            style={styles.logoStyle}
            source={LOGO_IMAGE}
          />
          <Text style={styles.logoText}>We Ensure Trade</Text>
          <View style={styles.categoryContainer}>
            <View style={styles.categorySubContainer}>
              <TraddleAvatar
                source={TRADER_IMAGE}
                size="xlarge"
                onPress={() =>
                  this.props.navigation.navigate('RegistrationScreen')
                }
              />
              <TraddleButton
                styleContainer={{ backgroundColor: colors.appColor }}
                title="Trader"
                size="large"
                onPress={() => {
                  this.props.navigation.navigate('RegistrationScreen');
                }}
                titleStyle={styles.titleStyle}
              />
            </View>
            <View style={styles.categorySubContainer}>
              <TraddleAvatar
                source={BROKER_IMAGE}
                size="xlarge"
                onPress={() =>
                  this.props.navigation.navigate('RegistrationScreen')
                }
              />
              <TraddleButton
                styleContainer={{ backgroundColor: colors.appColor }}
                title="Broker"
                size="large"
                onPress={() => {
                  this.props.navigation.navigate('RegistrationScreen');
                }}
                titleStyle={styles.titleStyle}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default ChooseTraderBrokerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 30,
    alignItems: 'center',
    marginBottom: (Dimensions.get('window').width / 100) * 10
  },

  logoStyle: {
    width: (Dimensions.get('window').width / 100) * 60,
    height: 40,
    alignSelf: 'center',
    marginBottom: (Dimensions.get('window').width / 100) * 15
  },
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 20
  },
  categorySubContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
    marginTop: (Dimensions.get('window').width / 100) * 10
  },
  personLogoStyle: {
    width: (Dimensions.get('window').width / 100) * 35,
    height: (Dimensions.get('window').width / 100) * 27,
    marginBottom: 20
  },
  logoText: {
    fontSize: 28,
    fontStyle: 'italic'
  },
  titleStyle: {
    color: '#FFFFFF',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 18
  }
});
