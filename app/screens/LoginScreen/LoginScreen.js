import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import colors from '../../config/style/colors';
import TraddleButton from '../../components/TraddleButton/TraddleButton';
import TraddleTextInput from '../../components/TraddleTextInput/TraddleTextInput';
import PASSWORD_ICON from '../../images/Icons/passowrd-icon.png';
import BG_IMAGE from '../../images/background.png';
import LOGO_IMAGE from '../../images/landing1-logo.png';
import EMAIL_ICON from '../../images/Icons/email_address_icon.png';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Login Form Fields..
      email: '',
      password: '',
      // Login Form validation fields..
      checkEmail: null,
      checkPassword: null

      /**
       * TODO: future use
       */
      // disabled: true
    };
    this.inputs = {};
    this.focusNextField = this.focusNextField.bind(this);
  }

  componentDidMount() {
    // this.props.navigation.navigate('HomeScreen');
  }

  loginButtonHandler = () => {
    this.props.navigation.navigate('HomeStack');
  };

  regButtonHandler = () => {
    this.props.navigation.navigate('ChooseTraderBrokerScreen');
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
            onSubmitEditing={() => this.focusNextField('input2')}
            error={this.state.checkEmail}
            iconSource={EMAIL_ICON}
            underLine={false}
          />

          <TraddleTextInput
            traddleRef={input => {
              this.inputs.input2 = input;
            }}
            secureTextEntry
            title="Password*"
            placeholder="Enter your Password Here"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            onSubmitEditing={this.loginButtonHandler}
            error={this.state.checkPassword}
            iconSource={PASSWORD_ICON}
            underLine={false}
          />

          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('ForgotpasswordScreen')
            }
            style={styles.forgotContainer}
          >
            <Text style={styles.textStyle}>Forgot Password?</Text>
          </TouchableOpacity>
          <TraddleButton
            title="Login"
            onPress={this.loginButtonHandler}
            size="large"
          />
          <Text style={[styles.registerButton, { color: colors.hintText }]}>
            or
          </Text>
          <Text onPress={this.regButtonHandler} style={styles.registerButton}>
            Register
          </Text>
        </View>
      </ImageBackground>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 30
  },
  registerButton: {
    fontSize: 20,
    color: colors.primaryColor,
    textAlign: 'center',
    margin: 10,
    alignSelf: 'center'
  },
  textStyle: {
    fontSize: 14,
    color: colors.linkColor
  },
  forgotContainer: {
    flexDirection: 'row',
    marginBottom: 30,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  logoStyle: {
    width: '60%',
    height: 100,
    alignSelf: 'center'
  }
});
