/**
 * https://github.com/Gewgawrav/traddle-app/issues/7
 * Registration Screen for Trader And Broker
 * * error props in Traddle TextInput is of type string. null for now
 * * if you provide any string erorr message will show below the text input
 */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  Dimensions
} from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import CommonStyle from '../../config/style/common';
import colors from '../../config/style/colors';
import TraddleButton from '../../components/TraddleButton/TraddleButton';
import TraddleTextInput from '../../components/TraddleTextInput/TraddleTextInput';
import RegistrationStackHeader from '../../components/TraddleHeader/RegistrationStackHeader';
import step3 from '../../images/Icons/step-3-icon.png';
import nmIcon from '../../images/Icons/name-icon.png';
import mobIcon from '../../images/Icons/mobile-icon.png';
import desgIcon from '../../images/Icons/designation-icon.png';

class RegistrationScreeenStep3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      countryCode: '',
      mobileNo: '',
      // eslint-disable-next-line react/no-unused-state
      checkregcategory: [],
      designation: '',
      regcategory3: [{ value: 'Mr.' }, { value: 'Mrs.' }, { value: 'Ms.' }],
      value3: 'Mr.'
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
    this.props.navigation.navigate('CommoditySelectionScreen');
  };

  focusNextField(id) {
    this.inputs[id].focus();
  }

  render() {
    return (
      <View style={styles.container}>
        <RegistrationStackHeader />
        <ScrollView style={{}}>
          <View style={styles.containerMain}>
            <View style={[styles.inputStyle, { marginLeft: 10 }]}>
              <Image resizeMode="contain" style={styles.icon} source={nmIcon} />
              <Text style={styles.pwdinput}>Name*</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                justifyContent: 'center',
                marginBottom: 20
              }}
            >
              <Dropdown
                data={this.state.regcategory3}
                selectedItemColor={colors.shadows}
                baseColor={this.state.isErrorCategory ? 'red' : 'transparent'}
                textColor={
                  this.state.regcategory ? colors.shadows : colors.shadows
                }
                containerStyle={[
                  CommonStyle.roundCornerDropStyles,
                  { width: 60, marginLeft: 25 }
                ]}
                value={this.state.value3}
                onChangeText={value => {
                  this.setState({
                    value3: value,
                    // eslint-disable-next-line react/no-unused-state
                    checkregcategory: []
                  });
                }}
              />

              <TextInput
                ref={input => {
                  this.inputs.inname = input;
                }}
                style={[
                  CommonStyle.textInputStyle,
                  {
                    paddingLeft: 10,
                    width: Dimensions.get('window').width - 120,
                    justifyContent: 'center'
                  }
                ]}
                placeholder="Name (Main Traddler)"
                autoFocus
                placeholderTextcolors={colors.shadows}
                underlineColorAndroid={colors.placeholderUnderlineColor}
                autoCapitalize="none"
                keyboardType="email-address"
                onChangeText={name => this.setState({ name })}
                value={this.state.name}
                onSubmitEditing={() => this.focusNextField('inmob')}
              />
            </View>

            <View style={[styles.inputStyle, { marginLeft: 10 }]}>
              <Image
                style={styles.icon}
                resizeMode="contain"
                source={mobIcon}
              />
              <Text style={styles.pwdinput}>Mobile Number*</Text>
            </View>
            <View style={{ flexDirection: 'row', paddingBottom: 15 }}>
              <TextInput
                ref={input => {
                  this.inputs.inmob = input;
                }}
                style={[
                  CommonStyle.textInputStyle,
                  { width: 50, marginLeft: 10 }
                ]}
                placeholder=" +XXX"
                keyboardType="phone-pad"
                placeholderTextColor={colors.shadows}
                underlineColorAndroid={colors.placeholderUnderlineColor}
                autoCapitalize="none"
                onChangeText={countryCode => this.setState({ countryCode })}
                value={this.state.countryCode}
                onSubmitEditing={() => this.focusNextField('inMObile')}
              />

              <TextInput
                ref={input => {
                  this.inputs.inMObile = input;
                }}
                style={[
                  CommonStyle.textInputStyle,
                  {
                    marginLeft: 15,
                    width: Dimensions.get('window').width - 125
                  }
                ]}
                placeholder="Enter your Mobile Number"
                keyboardType="phone-pad"
                placeholderTextColor={colors.shadows}
                underlineColorAndroid={colors.placeholderUnderlineColor}
                autoCapitalize="none"
                onChangeText={mobileNo => this.setState({ mobileNo })}
                value={this.state.mobileNo}
                onSubmitEditing={() => this.focusNextField('inDesgi')}
              />
            </View>

            <TraddleTextInput
              style={{ marginBottom: 10 }}
              traddleRef={input => {
                this.inputs.inDesgi = input;
              }}
              iconSource={desgIcon}
              title="Designation/Position"
              placeholder="Enter your Designation/Position"
              onChangeText={designation => this.setState({ designation })}
              value={this.state.designation}
              underLine={false}
              keyboardType="email-address"
              onSubmitEditing={() => {}}
            />

            {/* Next  button */}
            <TraddleButton
              styleContainer={{ backgroundColor: colors.appColor }}
              title="Next"
              onPress={this.registerButtonHandler}
              size="large"
            />
          </View>
        </ScrollView>
        <View style={styles.progressBar}>
          <Image style={[CommonStyle.navigation]} source={step3} />
        </View>
      </View>
    );
  }
}

export default RegistrationScreeenStep3;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerMain: {
    padding: 30
  },
  inputTextBottomDescription: {
    color: colors.shadows,
    fontSize: 11
  },
  icon: {
    width: 20,
    height: 20
  },
  inputStyle: {
    flexDirection: 'row'
  },
  pwdinput: {
    color: colors.labelColor,
    marginLeft: 10,
    marginRight: 10
  },
  progressBar: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});
