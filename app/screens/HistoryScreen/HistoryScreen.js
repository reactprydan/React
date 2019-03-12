import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import styles from '../../config/style/common';

class HistoryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.inputs = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          History Screen
        </Text>
      </View>
    );
  }
}

export default HistoryScreen;