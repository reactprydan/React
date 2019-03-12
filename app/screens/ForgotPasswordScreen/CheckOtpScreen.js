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
import TraddleOTPInput from '../../components/TraddleTextInput/TraddleOTPInput';

class CheckOtpScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // OTP Form Fields..
      mobileNo1: '',
      mobileNo2: '',
      mobileNo3: '',
      mobileNo4: ''
      /**
       * TODO: future use
       */
      // disabled: true
    };
    this.focusNextField = this.focusNextField.bind(this);
    this.inputs = {};
    this.onChangeText = this.onChangeText.bind(this);
  }

  onChangeText(mobileNo1) {
    if (mobileNo1.length > 0) {
      this.focusNextField('mobileNo2');
    }
    this.setState({ mobileNo1 });
  }

  otpButtonHandler = () => {
    this.props.navigation.navigate('ResetPasswordScreen');
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
          <View style={styles.inputStyle}>
            <Text style={styles.pwdinput}>
              Email OTP sent to your Email address*
            </Text>
          </View>
          <View style={styles.insertTokenContainer}>
            <TraddleOTPInput
              value={this.state.mobileNo1}
              traddleRef={input => {
                this.inputs.mobileNo1 = input;
              }}
              onChangeText={mobileNo1 => this.onChangeText(mobileNo1)}
              onSubmitEditing={() => this.focusNextField('mobileNo2')}
            />
            <TraddleOTPInput
              value={this.state.mobileNo2}
              traddleRef={input => {
                this.inputs.mobileNo2 = input;
              }}
              onChangeText={mobileNo2 => {
                if (mobileNo2.length > 0) {
                  this.focusNextField('mobileNo3');
                }
                if (this.state.mobileNo2 && mobileNo2.length === 0) {
                  this.focusNextField('mobileNo3');
                }
                this.setState({ mobileNo2 });
              }}
              onSubmitEditing={() => this.focusNextField('mobileNo3')}
            />
            <TraddleOTPInput
              value={this.state.mobileNo3}
              traddleRef={input => {
                this.inputs.mobileNo3 = input;
              }}
              onChangeText={mobileNo3 => {
                if (mobileNo3.length > 0) {
                  this.focusNextField('mobileNo4');
                }
                if (this.state.mobileNo3 && mobileNo3.length === 0) {
                  this.focusNextField('mobileNo2');
                }
                this.setState({ mobileNo3 });
              }}
              onSubmitEditing={() => this.focusNextField('mobileNo4')}
            />
            <TraddleOTPInput
              value={this.state.mobileNo4}
              textAlign="center"
              returnKeyType="next"
              traddleRef={input => {
                this.inputs.mobileNo4 = input;
              }}
              onChangeText={mobileNo4 => this.setState({ mobileNo4 })}
              onSubmitEditing={() => {}}
            />
          </View>
          <TraddleButton
            styleContainer={{ backgroundColor: colors.appColor }}
            title="Submit"
            type="m"
            onPress={this.otpButtonHandler}
          />
        </View>
      </ImageBackground>
    );
  }
}

export default CheckOtpScreen;

const styles = StyleSheet.create({
  insertTokenContainer: {
    width: Dimensions.get('window').width - 60,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 40
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 30
  },
  inputStyle: {
    flexDirection: 'row'
  },
  pwdinput: {
    color: colors.labelColor,
    marginLeft: 10,
    marginRight: 10
  },
  logoStyle: {
    width: Dimensions.get('window').width - 60,
    height: 100,
    alignSelf: 'center'
  }
});
