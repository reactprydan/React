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
import TraddleDropdown from '../../components/TraddleDropdown/TraddleDropdown';
import CommonStyle from '../../config/style/common';
import colors from '../../config/style/colors';
import TraddleButton from '../../components/TraddleButton/TraddleButton';
import RegistrationStackHeader from '../../components/TraddleHeader/RegistrationStackHeader';
import step2 from '../../images/Icons/step-2-icon.png';
import addressIcon from '../../images/Icons/address-icon.png';
import cityIcon from '../../images/Icons/city-town-village-icon.png';
import provinceIcon from '../../images/Icons/province-icon.png';
import zipIcon from '../../images/Icons/zip-icon.png';
import phoneIcon from '../../images/Icons/phone-con.png';
import TraddleTextInput from '../../components/TraddleTextInput/TraddleTextInput';

class RegistrationScreeenStep2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      city: '',
      postal: '',
      workPhone: '',
      phone: '',
      cityList: [
        {
          value: 'Rajkot'
        },
        {
          value: 'Ahmedabad'
        },
        {
          value: 'Mumbai'
        }
      ],
      value2: '   Select Province/State/Territory'
    };

    this.inputs = {};
    this.focusNextField = this.focusNextField.bind(this);
  }

  underLine = () => {
    return <View style={styles.underLine} />;
  };

  registerButtonHandler = () => {
    this.props.navigation.navigate('RegistrationScreeenStep3');
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
            <TraddleTextInput
              style={{ marginBottom: 10 }}
              traddleRef={input => {
                this.inputs.inadd = input;
              }}
              iconSource={addressIcon}
              title="Address*"
              placeholder="Enter your Address"
              onChangeText={address => this.setState({ address })}
              value={this.state.address}
              underLine={false}
              onSubmitEditing={() => this.focusNextField('incity')}
            />

            <TraddleTextInput
              style={{ marginBottom: 10 }}
              traddleRef={input => {
                this.inputs.incity = input;
              }}
              iconSource={cityIcon}
              title="City/Town/Village*"
              placeholder="Enter your City"
              onChangeText={city => this.setState({ city })}
              value={this.state.city}
              underLine={false}
              onSubmitEditing={() => this.focusNextField('inProv')}
            />

            <TraddleDropdown
              traddleRef={input => {
                this.inputs.inProv = input;
              }}
              title="Province/State/Territory*"
              style={{ marginLeft: 10 }}
              iconSource={provinceIcon}
              underlineColorAndroid="transparent"
              data={this.state.cityList}
              placeholderTextColor={colors.shadows}
              value={this.state.value2}
              onChangeText={value => {
                this.setState({
                  value2: value,
                  // eslint-disable-next-line react/no-unused-state
                  checkregcategory: []
                });
                this.focusNextField('inZip');
              }}
              // error={this.state.checkregcategory ? true : false}
            />

            <TraddleTextInput
              style={{ marginBottom: 10 }}
              traddleRef={input => {
                this.inputs.inZip = input;
              }}
              iconSource={zipIcon}
              title="Zip/Posta Code*"
              placeholder="Enter your Zip/Postal/PinCode"
              onChangeText={postal => this.setState({ postal })}
              value={this.state.postal}
              underLine={false}
              keyboardType="phone-pad"
              onSubmitEditing={() => this.focusNextField('inWork')}
            />
            <View style={[styles.inputStyle, { marginLeft: 10 }]}>
              <Image
                style={styles.icon}
                resizeMode="contain"
                source={phoneIcon}
              />
              <Text style={styles.pwdinput}>Work Phone*</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingBottom: 10,
                marginLeft: 10
              }}
            >
              <TextInput
                ref={input => {
                  this.inputs.inWork = input;
                }}
                style={[CommonStyle.textInputStyle, { width: 50 }]}
                placeholder="+ XXX"
                keyboardType="phone-pad"
                placeholderTextColor={colors.shadows}
                underlineColorAndroid={colors.placeholderUnderlineColor}
                autoCapitalize="none"
                onChangeText={workPhone => this.setState({ workPhone })}
                value={this.state.workPhone}
                onSubmitEditing={() => this.focusNextField('inPh')}
              />
              <TextInput
                ref={input => {
                  this.inputs.inPh = input;
                }}
                style={[
                  CommonStyle.textInputStyle,
                  {
                    marginLeft: 10,
                    width: Dimensions.get('window').width - 120
                  }
                ]}
                placeholder="Enter your work phone"
                keyboardType="phone-pad"
                placeholderTextColor={colors.shadows}
                underlineColorAndroid={colors.placeholderUnderlineColor}
                autoCapitalize="none"
                onChangeText={phone => this.setState({ phone })}
                value={this.state.phone}
                onSubmitEditing={() => this.focusNextField('inDesg')}
              />
            </View>

            <TraddleButton
              styleContainer={{ backgroundColor: colors.appColor }}
              title="Next"
              onPress={this.registerButtonHandler}
              size="large"
            />
          </View>
        </ScrollView>
        <View style={styles.progressBar}>
          <Image style={[CommonStyle.navigation]} source={step2} />
        </View>
      </View>
    );
  }
}

export default RegistrationScreeenStep2;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerMain: {
    padding: 20
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
