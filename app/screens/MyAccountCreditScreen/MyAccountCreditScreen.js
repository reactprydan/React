import React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  StyleSheet
} from 'react-native';

import colors from '../../config/style/colors';
import MESSAGE_ICON from '../../images/Icons/chat-icon.png';
import TraddleLoader from '../../components/TraddleLoader/TraddleLoader';

class MyAccountCreditScreen extends React.Component {
  componentDidMount() {
    this.props.fetchMyCreditDetail();
  }

  render() {
    if (this.props.data.isFetching) {
      return <TraddleLoader />;
    }

    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollcontainer}>
          <View style={styles.carditemcontainer}>
            <Text style={styles.fontweight}>Payment</Text>
            <Text style={styles.fontweight}>Amount</Text>
          </View>

          <FlatList
            data={this.props.data.result}
            renderItem={({ item }) => (
              <View style={styles.descriptioncontainer}>
                <Text>{item.item}</Text>
                <Text>${item.amount}</Text>
              </View>
            )}
          />
          <View style={styles.pendigncontainer}>
            <Text style={styles.pendingtext}>
              Outstanding as on (26-Dec-2018 20:32)
            </Text>
            <Text style={styles.pendingamount}>$15000</Text>
          </View>

          <View style={styles.totalcontainer}>
            <Text style={styles.fontweight}>Total</Text>
            <Text style={styles.fontweight}>$15000</Text>
          </View>
        </ScrollView>
        <View style={styles.messageiconcontainer}>
          <Image
            resizeMode="contain"
            resizeMethod="resize"
            style={styles.image}
            source={MESSAGE_ICON}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.listBackground,
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: 50
  },
  image: {
    width: 45,
    height: 45,
    marginRight: 10
  },
  scrollcontainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 10
  },
  carditemcontainer: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    borderColor: 'grey',
    borderBottomWidth: 0.5
  },
  descriptioncontainer: {
    height: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center'
  },
  messageiconcontainer: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 50
  },
  totalcontainer: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderColor: 'grey',
    marginTop: 60
  },
  pendigncontainer: {
    height: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderColor: 'grey'
  },
  fontweight: {
    fontWeight: 'bold'
  },
  pendingtext: {
    color: colors.red
  },
  pendingamount: {
    color: colors.green
  }
});

export default MyAccountCreditScreen;
