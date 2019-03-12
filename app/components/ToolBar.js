import React, { Component } from 'react';
import { View } from 'react-native';
import TraddleAvatar from './TraddleAvatar/TraddleAvatar';

import PASSWORD_ICON from '../images/Icons/passowrd-icon.png';
import color from '../config/style/colors';

class ToolBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {}

  render() {
    return (
      <View>
        <TraddleAvatar
          size="s"
          color={color.primaryColor}
          value={PASSWORD_ICON}
          onPress={() => {}}
        />
      </View>
    );
  }
}

export default ToolBar;
