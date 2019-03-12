import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import TraddleOTPInput from '../../components/TraddleTextInput/TraddleOTPInput';
import colors from '../../config/style/colors';
import TraddleButton from '../../components/TraddleButton/TraddleButton';
import RegistrationStackHeader from '../../components/TraddleHeader/RegistrationStackHeader';

class RegistrationConfirmationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNo1: '',
      mobileNo2: '',
      mobileNo3: '',
      mobileNo4: ''
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

  backButtonHandler = () => {
    this.props.navigation.pop();
  };

  resendCodeHandler = () => {
    this.setState({
      mobileNo1: '',
      mobileNo2: '',
      mobileNo3: '',
      mobileNo4: ''
    });
  };

  registerButtonHandler = () => {
    this.props.navigation.navigate('CommoditySelectionScreen', {
      navigation: this.props.navigation
    });
    // console.log('dd', this.props.navigation);
  };

  focusNextField(id) {
    this.inputs[id].focus();
  }

  render() {
    return (
      <View style={styles.container}>
        <RegistrationStackHeader />
        <ScrollView style={{ padding: 30 }}>
          <View style={styles.inputStyle}>
            <Text style={styles.pwdinput}>
              Please Enter Dynamic Access Code sent to your email address
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
            title="Verify"
            type="m"
            onPress={this.registerButtonHandler}
          />

          <View style={styles.footerContainer}>
            <TouchableOpacity
              style={styles.footerButtons}
              onPress={this.resendCodeHandler}
            >
              <Text style={styles.footerButtonsText}>Resend Code</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.footerButtons}
              onPress={this.backButtonHandler}
            >
              <Text style={styles.footerButtonsText}>Back</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default RegistrationConfirmationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  insertTokenContainer: {
    width: Dimensions.get('window').width - 60,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 40
  },
  inputStyle: {
    flexDirection: 'row',
    marginTop: 30
  },
  pwdinput: {
    color: colors.labelColor,
    marginRight: 10
  },
  footerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 60
  },
  footerButtonsText: {
    color: colors.shadows,
    fontSize: 18
  }
});
