import { createStackNavigator } from 'react-navigation';
import LoginScreen from '../../screens/LoginScreen';
import RegistrationConfirmationScreen from '../../screens/RegistrationScreen/RegistrationConfirmationScreen';
import CommoditySelectionScreen from '../../screens/RegistrationScreen/CommoditySelection';
import RegistrationScreen from '../../screens/RegistrationScreen';
import ForgotpasswordScreen from '../../screens/ForgotPasswordScreen';
import CheckOtpScreen from '../../screens/ForgotPasswordScreen/CheckOtpScreen';
import ResetPasswordScreen from '../../screens/ForgotPasswordScreen/ResetPasswordScreen';
import ChooseTraderBrokerScreen from '../../screens/RegistrationScreen/ChooseTraderBrokerScreen';
import RegistrationScreeenStep1 from '../../screens/RegistrationScreen/RegistrationScreeenStep1';
import RegistrationScreeenStep2 from '../../screens/RegistrationScreen/RegistrationScreeenStep2';
import RegistrationScreeenStep3 from '../../screens/RegistrationScreen/RegistrationScreeenStep3';

const LoginStack = createStackNavigator(
  {
    LoginScreen: { screen: LoginScreen },
    /**
     * Registration and its step screen routes are here
     */
    ChooseTraderBrokerScreen: { screen: ChooseTraderBrokerScreen },
    RegistrationScreen: { screen: RegistrationScreen },
    RegistrationConfirmationScreen: { screen: RegistrationConfirmationScreen },
    CommoditySelectionScreen: { screen: CommoditySelectionScreen },

    RegistrationScreeenStep1: { screen: RegistrationScreeenStep1 },
    RegistrationScreeenStep2: { screen: RegistrationScreeenStep2 },
    RegistrationScreeenStep3: { screen: RegistrationScreeenStep3 },

    /**
     * all the Forgot password routes are here
     */
    ForgotpasswordScreen: {
      screen: ForgotpasswordScreen
    },
    CheckOtpScreen: {
      screen: CheckOtpScreen
    },
    ResetPasswordScreen: {
      screen: ResetPasswordScreen
    }
  },
  {
    defaultNavigationOptions: {
      header: null
    },
    initialRouteName: 'LoginScreen',
    swipeEnabled: false,
    animationEnabled: false,
    lazy: true,
    transitionConfig: () => ({
      transitionSpec: {
        duration: 0
      }
    })
  }
);

export default LoginStack;
