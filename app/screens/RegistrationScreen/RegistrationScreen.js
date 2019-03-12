/**
 * https://github.com/Gewgawrav/traddle-app/issues/7
 * Registration Screen for Trader And Broker
 * * error props in Traddle TextInput is of type string. null for now
 * * if you provide any string erorr message will show below the text input
 */
import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import TraddleTextInput from '../../components/TraddleTextInput/TraddleTextInput';
import PASSWORD_ICON from '../../images/Icons/passowrd-icon.png';
import EMAIL_ICON from '../../images/Icons/email_address_icon.png';
import TraddleButton from '../../components/TraddleButton/TraddleButton';
import RegistrationStackHeader from '../../components/TraddleHeader/RegistrationStackHeader';
import colors from '../../config/style/colors';

class RegistrationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      checkEmail: null,
      checkPassword: null
    };
    this.inputs = {};
    this.focusNextField = this.focusNextField.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  onLogin() {
    console.log('Yeh', this);
  }

  underLine = () => {
    return <View style={styles.underLine} />;
  };

  registerButtonHandler = () => {
    this.props.navigation.navigate('RegistrationConfirmationScreen', {
      navigation: this.props.navigation
    });
  };

  focusNextField(id) {
    this.inputs[id].focus();
  }

  render() {
    return (
      <View style={styles.container}>
        <RegistrationStackHeader />
        <ScrollView contentContainerStyle={styles.contentContainerStyle}>
          <TraddleTextInput
            traddleRef={input => {
              this.inputs.input1 = input;
            }}
            title="Email Address*"
            iconSource={EMAIL_ICON}
            placeholder="Enter your Email Address Here"
            autoFocus
            keyboardType="email-address"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            onSubmitEditing={() => this.focusNextField('input2')}
            error={this.state.checkEmail}
            underLine={false}
          />
          {/* <Text style={styles.inputTextBottomDescription}>
            ( This will be your permament user id for traddle. Hence, Make sure
            to enter your primary email address )
          </Text> */}
          <TraddleTextInput
            traddleRef={input => {
              this.inputs.input2 = input;
            }}
            title="Password*"
            placeholder="Enter your Password Here"
            secureTextEntry
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            iconSource={PASSWORD_ICON}
            onSubmitEditing={() => this.focusNextField('input3')}
            error={this.state.checkPassword}
            underLine={false}
          />
          <TraddleTextInput
            traddleRef={input => {
              this.inputs.input3 = input;
            }}
            title="Confirm Password*"
            placeholder="Re-Enter your Password Here"
            secureTextEntry
            onChangeText={confirmPassword => this.setState({ confirmPassword })}
            value={this.state.confirmPassword}
            iconSource={PASSWORD_ICON}
            onSubmitEditing={this.registerButtonHandler}
            error={this.state.che}
            underLine={false}
          />
          <TraddleButton
            title="Register"
            onPress={this.registerButtonHandler}
            size="large"
            style={{ marginTop: 20 }}
          />
        </ScrollView>
      </View>
    );
  }
}

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainerStyle: {
    flex: 1,
    padding: 30,
    alignItems: 'center'
  },
  inputTextBottomDescription: {
    color: colors.shadows,
    fontSize: 11
  }
});
