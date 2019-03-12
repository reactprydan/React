/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import configureStore from './config/store/configureStore';
import HomeStack from './config/routes/HomeStack';
import LoginStack from './config/routes/LoginStack';
import AuthScreen from './screens/AuthScreen/AuthScreen';
import NotConfirmScreen from './screens/AuthScreen/NotConfirmScreen';

const store = configureStore({});

const RootStack = createSwitchNavigator(
  {
    AuthScreen: {
      screen: AuthScreen,
      navigationOptions: { header: null }
    },
    HomeStack: {
      screen: HomeStack,
      navigationOptions: { header: null }
    },
    LoginStack: {
      screen: LoginStack,
      navigationOptions: { header: null }
    },
    NotConfirmScreen: {
      screen: NotConfirmScreen,
      navigationOptions: { header: null }
    }
  },
  {
    headerMode: 'none',
    initialRouteName: 'AuthScreen'
  }
);

const AppContainer = createAppContainer(RootStack);

const App = () => {
  console.disableYellowBox = true;

  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
