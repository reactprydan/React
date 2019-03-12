import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import styles from '../../config/style/common';

class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.inputs = {};
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Settings Screen
        </Text>
      </View>
    );
  }
}

export default SettingsScreen;
