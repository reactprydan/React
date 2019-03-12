import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const NotConfirmScreen = () => (
  <View style={styles.container}>
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={['#277F94', '#368D7C', '#439968']}
      style={styles.linearGradient}
    >
      <View style={styles.viewStyle}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontWeight: '500',
            fontSize: 18,
            marginTop: 10
          }}
        >
          Application received and under approval process
        </Text>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontWeight: '200',
            fontSize: 16,
            marginTop: 10
          }}
        >
          We wil certify you as a registered traddler once your details are
          verified and approved by our diligence team we will notify about the
          progress of your application on your registered mobile number and
          email address.
        </Text>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontWeight: '500',
            fontSize: 13,
            marginTop: 10
          }}
        >
          Note: We might reach out to you for additional documents or details if
          required.
        </Text>
      </View>
    </LinearGradient>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewStyle: {
    width: '80%',
    height: '50%',
    borderWidth: 3,
    borderColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10
  }
});

export default NotConfirmScreen;
