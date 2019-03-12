import React from 'react';
import {
  Text,
  View
} from 'react-native';
import styles from '../../config/style/common';

class SupportScreen extends React.Component {
  constructor(props) {
    super(props);
    this.inputs = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
           Support Screen
        </Text>
      </View>
    );
  }
}

export default SupportScreen;