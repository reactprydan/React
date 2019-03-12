import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import {
  getUserDetailFunction,
  checkUserDetailFunction
} from '../../redux/actions/userAction';

class AuthScreen extends React.Component {
  componentDidMount = async () => {
    await this.props.getUser();
    if (this.props.user.token == null) {
      this.props.navigation.navigate('LoginStack');
    } else {
      await this.props.checkUser();
      if (this.props.user.isConfirm) {
        this.props.navigation.navigate('HomeStack');
      } else {
        this.props.navigation.navigate('NotConfirmScreen');
      }
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});

export default connect(
  state => ({
    user: state.user
  }),
  dispatch => ({
    getUser: () => dispatch(getUserDetailFunction()),
    checkUser: () => dispatch(checkUserDetailFunction())
  })
)(AuthScreen);
