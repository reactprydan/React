/* eslint-disable react/no-access-state-in-setstate */
/**
 * https://github.com/Gewgawrav/traddle-app/issues/7
 * Registration Screen for Trader And Broker
 * * error props in Traddle TextInput is of type string. null for now
 * * if you provide any string erorr message will show below the text input
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Text
} from 'react-native';
import CommonStyle from '../../config/style/common';
import colors from '../../config/style/colors';
import TraddleTextInput from '../../components/TraddleTextInput/TraddleTextInput';
import TraddleButton from '../../components/TraddleButton/TraddleButton';
import RegistrationStackHeader from '../../components/TraddleHeader/RegistrationStackHeader';
import step1 from '../../images/Icons/step-1-icon.png';
import orgIcon from '../../images/Icons/organization-icon.png';
import uploadIcon from '../../images/Icons/upload-logo-icon.png';
import webIMAGE from '../../images/Icons/website-icon.png';
import countryIMAGE from '../../images/Icons/country-icon.png';
import TraddleDropdown from '../../components/TraddleDropdown/TraddleDropdown';
// const stepContainerheight = (Dimensions.get('window').height * 20) / 100 + 35;

class RegistrationScreeenStep1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      logo: '',
      website: '',
      countryList: [
        {
          value: 'India'
        },
        {
          value: 'Us'
        },
        {
          value: 'Uk'
        }
      ],
      value1: '   Select Country'
    };
    this.inputs = {};
    this.focusNextField = this.focusNextField.bind(this);
    this.onLogin = this.onLogin.bind(this);
  }

  onLogin() {
    console.log('Yeh', this);
  }

  registerButtonHandler = () => {
    console.log('SDSd', this.props.navigation);
    this.props.navigation.navigate('RegistrationScreeenStep2');
  };

  underLine = () => {
    return <View style={styles.underLine} />;
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
                this.inputs.input1 = input;
              }}
              iconSource={orgIcon}
              title="Organization's Name*"
              placeholder="Enter your Organization's/Entity's name"
              autoFocus
              keyboardType="email-address"
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
              underLine={false}
              onSubmitEditing={() => this.focusNextField('inlogo')}
            />

            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <TraddleTextInput
                traddleRef={input => {
                  this.inputs.input2 = input;
                }}
                ContainerStyle={{ flex: 1 }}
                iconSource={uploadIcon}
                title="Upload Logo"
                editable={false}
                placeholder="No file Chosen"
                onChangeText={logo => this.setState({ logo })}
                value={this.state.logo}
                underLine={false}
              />
              <TouchableOpacity style={{ justifyContent: 'center' }}>
                <Text
                  ref={input => {
                    this.inputs.inlogo = input;
                  }}
                  style={[
                    CommonStyle.roundCornerStyles,
                    {
                      textAlign: 'center',
                      width: 100,
                      borderColor: '#001331',
                      color: '#001331'
                    }
                  ]}
                >
                  Choose File
                </Text>
              </TouchableOpacity>
            </View>

            <TraddleTextInput
              style={{ marginBottom: 10 }}
              traddleRef={input => {
                this.inputs.inputweb = input;
              }}
              iconSource={webIMAGE}
              title="Website URL(Optional)"
              placeholder="Enter your Website URL"
              onChangeText={website => this.setState({ website })}
              value={this.state.website}
              underLine={false}
              onSubmitEditing={() => this.focusNextField('inCountry')}
            />

            <TraddleDropdown
              traddleRef={input => {
                this.inputs.inCountry = input;
              }}
              title="Country*"
              style={{ marginLeft: 15 }}
              iconSource={countryIMAGE}
              underlineColorAndroid="transparent"
              data={this.state.countryList}
              placeholderTextColor={colors.shadows}
              value={this.state.value1}
              onChangeText={value =>
                this.setState({
                  value1: value,
                  // eslint-disable-next-line react/no-unused-state
                  checkregcategory: []
                })
              }
              // error={this.state.checkregcategory ? true : false}
            />

            <TraddleButton
              title="Next"
              styleContainer={{ backgroundColor: colors.appColor }}
              onPress={this.registerButtonHandler}
              size="large"
            />
          </View>
        </ScrollView>
        <View style={styles.progressBar}>
          <Image style={[CommonStyle.navigation]} source={step1} />
        </View>
      </View>
    );
  }
}

export default RegistrationScreeenStep1;

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
