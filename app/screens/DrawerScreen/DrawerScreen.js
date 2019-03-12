import React, {Component} from 'react';
import {NavigationActions, DrawerActions} from 'react-navigation';
import {ScrollView, Text, View, Image} from 'react-native';
import styles from '../../config/style/DrawerStyle';
import USER_PLACEHOLDER from '../../images/Icons/user_icn.png';
import LOGOUT_ICON from '../../images/Icons/logout_Icn.png';

class DrawerScreen extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
    this.props.navigation.dispatch(DrawerActions.closeDrawer())
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.navSectionStyle}>
          <View style={styles.userImgContainer}>
            <Image
              resizeMode="contain"
              resizeMethod="resize"
              style={styles.userImg}
              source={USER_PLACEHOLDER}
            />
          </View>
          <View style={styles.topHeaderItemContainer}>
            <Text style={styles.topHeaderItemStyle}>
              LeoSons Agro Industries
            </Text>
            <Text style={styles.topHeaderItemStyle}>
              Broker
            </Text>
          </View>
        </View>
        <ScrollView>
          <View style={styles.navHeadingStyle}>
            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('MyAccountScreen')}>
             My Account
            </Text>
          </View>
          <View style={styles.navHeadingStyle}>
            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('HistoryScreen')}>
              History
            </Text>
          </View>
          <View style={styles.navHeadingStyle}>
            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('SettingsScreen')}>
              Profile
            </Text>
          </View>
          <View style={styles.navHeadingStyle}>
            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('SettingsScreen')}>
              Settings
            </Text>
          </View>
          <View style={styles.navHeadingStyle}>
            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('SupportScreen')}>
              Support
            </Text>
          </View>
          <View style={styles.navLogoutStyle}>
            <Text style={styles.navItemStyle} onPress={this.navigateToScreen('LogOut')}>
              Log Out
            </Text>
            <Image 
              source={LOGOUT_ICON}
              style={{width:22, height:22}}
            /> 
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default DrawerScreen;