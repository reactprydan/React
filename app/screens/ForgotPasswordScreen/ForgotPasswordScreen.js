import React from 'react';
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
import EMAIL_ICON from '../../images/Icons/email_address_icon.png';

import TraddleTextInput from '../../components/TraddleTextInput/TraddleTextInput';

class ForgotPasswordScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Login Form Fields..
      email: '',
      // Login Form validation fields..
      checkEmail: []
      // navigation: null

      /**
       * TODO: future use
       */
      // disabled: true
    };
    this.inputs = {};
    this.onOtp = this.onOtp.bind(this);
  }

  onOtp() {
    console.log('Yehhh', this);
  }

  forgotButtonHandler = () => {
    this.props.navigation.navigate('CheckOtpScreen');
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
            title="Email Address*"
            autoFocus
            placeholder="Enter your Email Address Here"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
            tEditing={this.forgotButtonHandler}
            error={this.state.checkEmail}
            iconSource={EMAIL_ICON}
            underLine={false}
          />

          {/* login button */}
          <TraddleButton
            styleContainer={{ backgroundColor: colors.appColor }}
            title="Submit"
            type="m"
            onPress={this.forgotButtonHandler}
          />
        </View>
      </ImageBackground>
    );
  }
}

export default ForgotPasswordScreen;

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
