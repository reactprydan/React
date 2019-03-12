import React from 'react';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform
} from 'react-native';

import colors from '../../config/style/colors';
import ATTACH_ICON from '../../images/Icons/attach-icon.png';
import SEND_ICON from '../../images/Icons/send-icon.png';

export default class ChatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`,
    headerTitleStyle: {
      textAlign: 'center',
      alignSelf: 'center',
      color: 'white'
    },
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: colors.appColor
    }
  });

  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://www.traddle.in/assets/img/traddleIcon.png'
          }
        }
      ]
    });
  }

  onSend(messages = []) {
    messages[0].user.avatar = 'https://www.traddle.in/assets/img/trader.png';
    console.log(messages, 'Dfsdfsdsdfs');
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }));
  }

  renderBubble = props => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: colors.primaryColor
          },
          right: {
            backgroundColor: 'orange'
          }
        }}
        textStyle={{
          right: {
            color: 'black',

            fontSize: 14
          },
          left: {
            color: 'black',

            fontSize: 14
          }
        }}
      />
    );
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <GiftedChat
          renderActions={() => (
            <View style={styles.attach}>
              <Image source={ATTACH_ICON} style={styles.attachicon} />
            </View>
          )}
          containerStyle={{
            borderColor: 'red',
            borderTopWidth: 1
          }}
          minInputToolbarHeight={50}
          bottomOffset={50}
          style={{ flex: 1 }}
          textInputProps={{ returnKeyType: 'done' }}
          renderSend={props => (
            <TouchableOpacity
              style={styles.renderSend}
              onPress={() => props.onSend({ text: props.text })}
            >
              <Image source={SEND_ICON} style={styles.sendicon} />
            </TouchableOpacity>
          )}
          showUserAvatar
          showAvatarForEveryMessage
          keyboardShouldPersistTaps="never"
          renderBubble={this.renderBubble}
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1
          }}
        />
        <View style={styles.paddingheight} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  paddingheight: { height: Platform.OS === 'ios' ? 50 : 0, width: '100%' },
  renderSend: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  attach: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  sendicon: {
    width: 30,
    height: 30
  },
  attachicon: {
    width: 30,
    height: 30
  }
});
