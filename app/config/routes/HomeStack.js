import React from 'react';
import { Image, Text, View, Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
  createMaterialTopTabNavigator,
  createAppContainer
} from 'react-navigation';
import { connect } from 'react-redux';
import { checkUserDetailFunction } from '../../redux/actions/userAction';
import BuyingOfferScreen from '../../screens/BuyingOfferScreen';

import BuyerOfferDetailScreen from '../../screens/BuyerOfferDetailScreen';

import SellingOfferScreen from '../../screens/SellingOfferScreen';
import MyOfferScreen from '../../screens/MyOfferScreen';
import TraddleOfferScreen from '../../screens/TraddleOfferScreen';
import ContractBoughtScreen from '../../screens/ContractBoughtScreen';
import ContractSoldScreen from '../../screens/ContractSoldScreen';
import CurrentTradeBoughtScreen from '../../screens/CurrentTradeBoughtScreen';
import CurrentTradeSoldScreen from '../../screens/CurrentTradeSoldScreen';
import ContractScreen from '../../screens/ContractScreen/ContractScreen';
import colors from '../style/colors';
import TraddleLogo from '../../components/TraddleLogo/TraddleLogo';
import TraddleAvatar from '../../components/TraddleAvatar/TraddleAvatar';
import DrawerScreen from '../../screens/DrawerScreen';

import HistoryScreen from '../../screens/HistoryScreen';
import SettingsScreen from '../../screens/SettingsScreen';
import SupportScreen from '../../screens/SupportScreen';
import ContractPDFView from '../../screens/ContractPDFView/ContractPDFView';
import ChatScreen from '../../screens/ChatScreen/ChatScreen';

import MyAccountCreditScreen from '../../screens/MyAccountCreditScreen';
import MyAccountDebitScreen from '../../screens/MyAccountDebitScreen';

import HOME_ACTIVE from '../../images/Icons/home.png';
import HOME_INACTIVE from '../../images/Icons/homeinactive.png';

import OFFER_ACTIVE from '../../images/Icons/offer.png';
import OFFER_INACTIVE from '../../images/Icons/offerinactive.png';

import CONTRACT_ACTIVE from '../../images/Icons/contract.png';
import CONTRACT_INACTIVE from '../../images/Icons/contractinactive.png';

import CURRENT_INACTTIVE from '../../images/Icons/current.png';
import CURRENT_ACTIVE from '../../images/Icons/cuurentinactive.png';
import TraddleLoader from '../../components/TraddleLoader/TraddleLoader';
import NotConfirmScreen from '../../screens/AuthScreen/NotConfirmScreen';
/**
 * this file is core of home stack navigation
 * this file is bit tough but configuration is easy to upderstand
 */
const TabNavigatorConfig = {
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: 'white',
    upperCaseLabel: false,

    labelStyle: {
      fontSize: 16
    },
    tabStyle: {
      backgroundColor: colors.listBackground,
      height: Platform.OS === 'ios' ? 80 : 70
    },
    style: {
      backgroundColor: colors.startbg1
    },
    indicatorStyle: {
      backgroundColor: 'transparent'
    }
  },
  lazy: true,
  tabBarLabel: 'dsfsdfsdf',
  animationEnabled: false
};

const TabNavigatorConfigNavigationOptions = ({ navigation }) => {
  const title = camelCaseToWords(navigation.state.key);

  return {
    title
  };
};

const HomeScreenTopNavigationStack = createMaterialTopTabNavigator(
  {
    BuyingOffer: {
      screen: BuyingOfferScreen,
      navigationOptions: {
        tabBarLabel: () => (
          <View>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>
              Buying Offers
            </Text>
            <Text style={{ color: 'white' }}>(For you to Buy)</Text>
          </View>
        )
      }
    },
    SellingOffer: {
      screen: SellingOfferScreen,
      navigationOptions: {
        tabBarLabel: () => (
          <View>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>
              Selling Offers
            </Text>
            <Text style={{ color: 'white' }}>(For you to Sell)</Text>
          </View>
        )
      }
    }
  },
  TabNavigatorConfig
);

const OfferScreenTopNavigationStack = createMaterialTopTabNavigator(
  {
    MyOffer: {
      screen: MyOfferScreen,
      navigationOptions: TabNavigatorConfigNavigationOptions
    },
    TraddleOffer: {
      screen: TraddleOfferScreen,
      navigationOptions: TabNavigatorConfigNavigationOptions
    }
  },
  TabNavigatorConfig
);

const ContractScreenTopNavigationStack = createMaterialTopTabNavigator(
  {
    Bought: {
      screen: ContractBoughtScreen
    },
    Sold: {
      screen: ContractSoldScreen
    }
  },
  TabNavigatorConfig
);

const AccountScreenTopNavigationStack = createMaterialTopTabNavigator(
  {
    Debit: {
      screen: MyAccountDebitScreen
    },
    Credit: {
      screen: MyAccountCreditScreen
    }
  },
  TabNavigatorConfig
);

const CurrentTradeScreenTopNavigationStack = createMaterialTopTabNavigator(
  {
    Bought: {
      screen: CurrentTradeBoughtScreen
    },
    Sold: {
      screen: CurrentTradeSoldScreen
    }
  },
  TabNavigatorConfig
);

const HomeBotttomTabStack = createBottomTabNavigator(
  {
    HOME: {
      title: 'Home',
      headerTitle: 'Home',
      screen: HomeScreenTopNavigationStack,

      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          return (
            <Image
              source={focused ? HOME_ACTIVE : HOME_INACTIVE}
              style={{ width: 20, height: 20 }}
            />
          );
        }
      }
    },
    OFFER: {
      screen: OfferScreenTopNavigationStack,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          return (
            <Image
              source={focused ? OFFER_ACTIVE : OFFER_INACTIVE}
              style={{ width: 20, height: 20 }}
            />
          );
        }
      }
    },
    CONTRACT: {
      screen: ContractScreenTopNavigationStack,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          return (
            <Image
              source={focused ? CONTRACT_ACTIVE : CONTRACT_INACTIVE}
              style={{ width: 20, height: 20 }}
            />
          );
        }
      }
    },

    CURRENTTRADE: {
      screen: CurrentTradeScreenTopNavigationStack,
      navigationOptions: {
        tabBarIcon: ({ focused }) => {
          return (
            <Image
              source={focused ? CURRENT_ACTIVE : CURRENT_INACTTIVE}
              style={{ width: 20, height: 20 }}
            />
          );
        }
      }
    }
  },
  {
    // eslint-disable-next-line no-unused-vars
    navigationOptions: ({ navigation }) => {
      // const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerLeft: <TraddleLogo />,
        headerRight: (
          <TraddleAvatar
            size="small"
            onPress={() => {
              if (!navigation.state.isDrawerOpen) {
                navigation.openDrawer();
              }
            }}
          />
        )
      };
    }
  }
);

const HomeStackNavigation = createStackNavigator(
  {
    HomeStack: HomeBotttomTabStack,
    BuyerOfferDetailScreen: { screen: BuyerOfferDetailScreen },
    Contract: { screen: ContractScreen },
    ContractPDFView: { screen: ContractPDFView },
    ChatScreen: { screen: ChatScreen },
    NotConfirmScreen: {
      screen: NotConfirmScreen,
      navigationOptions: { header: null }
    },
    MyAccountScreen: {
      screen: AccountScreenTopNavigationStack
    }
  },
  {
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

const HomeStack = createDrawerNavigator(
  {
    Home: {
      screen: HomeStackNavigation
    },
    HistoryScreen: {
      screen: HistoryScreen
    },
    SettingsScreen: {
      screen: SettingsScreen
    },
    SupportScreen: {
      screen: SupportScreen
    },
    LogOut: {
      screen: HomeStackNavigation
    }
  },
  { contentComponent: DrawerScreen, drawerPosition: 'right' }
);

const HomeStackAppContainer = createAppContainer(HomeStack);

class UserConfirm extends React.Component {
  constructor(props) {
    super(props);
    this.checkUser();
    this.state = {
      userCheck: false
    };
  }

  async checkUser() {
    await this.props.checkUser();
    if (this.props.user.isConfirm) {
      this.setState({ userCheck: true });
    } else {
      this.props.navigation.navigate('NotConfirmScreen');
    }
  }

  render() {
    if (!this.state.userCheck) {
      return <TraddleLoader />;
    }
    return <HomeStackAppContainer />;
  }
}

function camelCaseToWords(str) {
  return str
    .match(/^[a-z]+|[A-Z][a-z]*/g)
    .map(x => {
      return x[0].toUpperCase() + x.substr(1).toLowerCase();
    })
    .join(' ');
}

export default connect(
  state => ({
    user: state.user
  }),
  dispatch => ({
    checkUser: () => dispatch(checkUserDetailFunction())
  })
)(UserConfirm);
