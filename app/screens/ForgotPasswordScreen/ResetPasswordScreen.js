import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  ImageBackground
} from 'react-native';
import colors from '../../config/style/colors';

import TraddleButton from '../../components/TraddleButton/TraddleButton';
import BG_IMAGE from '../../images/background.png';
import LOGO_IMAGE from '../../images/landing1-logo.png';
import PASSWORD_ICON from '../../images/Icons/passowrd-icon.png';
import TraddleTextInput from '../../components/TraddleTextInput/TraddleTextInput';

class ResetPasswordScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Login Form Fields..
      email: '',
      password: '',
      // Login Form validation fields..
      checkEmail: [],
      checkPassword: []

      /**
       * TODO: future use
       */
      // disabled: true
    };
    this.inputs = {};
    this.focusNextField = this.focusNextField.bind(this);
  }

  setpassword = () => {
    this.props.navigation.navigate('LoginScreen');
  };

  focusNextField(id) {
    this.inputs[id].focus();
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
          <TraddleTextInput
            traddleRef={input => {
              this.inputs.input1 = input;
            }}
            title="Password*"
            placeholder="Enter your Password Here"
            autoFocus
            secureTextEntry
            keyboardType="email-address"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            onSubmitEditing={() => this.focusNextField('input2')}
            error={this.state.checkEmail}
            iconSource={PASSWORD_ICON}
            underLine={false}
          />

          <TraddleTextInput
            traddleRef={input => {
              this.inputs.input2 = input;
            }}
            title="Confirm Password*"
            placeholder="Enter your Password Here"
            secureTextEntry
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            onSubmitEditing={this.setpassword}
            error={this.state.checkPassword}
            iconSource={PASSWORD_ICON}
            underLine={false}
          />

          <TraddleButton
            title="Submit"
            type="m"
            onPress={this.setpassword}
            styleContainer={{ backgroundColor: colors.appColor }}
          />
        </View>
      </ImageBackground>
    );
  }
}

export default ResetPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 30
  },
  logoStyle: {
    width: Dimensions.get('window').width - 60,
    height: 100,
    alignSelf: 'center'
  }
});
