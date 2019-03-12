import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import PDFView from 'react-native-view-pdf';
import MESSAGE_ICON from '../../images/Icons/chat-icon.png';
import DOWNLOAD_ICON from '../../images/Icons/download-icon.png';
import SHARE_ICON from '../../images/Icons/share-icon.png';

import colors from '../../config/style/colors';
import TraddleLoader from '../../components/TraddleLoader/TraddleLoader';

class ContractPDFView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: false
    };
  }

  componentWillMount() {
    this.setState({ loader: true });
  }

  render() {
    const { loader } = this.state;
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              flex: 1,

              flexDirection: 'row'
            }}
          >
            <View style={styles.textcontainer}>
              <Text style={{ color: colors.white, fontSize: 20 }}>
                TR 20/12019
              </Text>
            </View>
            <View style={styles.imagecontainer}>
              <Image
                resizeMode="contain"
                resizeMethod="resize"
                style={styles.filterButton}
                source={MESSAGE_ICON}
              />
              <Image
                resizeMode="contain"
                resizeMethod="resize"
                style={styles.filterButton}
                source={DOWNLOAD_ICON}
              />
              <Image
                resizeMode="contain"
                resizeMethod="resize"
                style={styles.filterButton}
                source={SHARE_ICON}
              />
            </View>
          </View>
          <View style={styles.buttoncontainer}>
            <View style={{ flex: 8 }}>
              {loader && <TraddleLoader />}

              <PDFView
                fadeInDuration={250.0}
                style={{ flex: 1 }}
                resource="https://www.ets.org/Media/Tests/TOEFL/pdf/SampleQuestions.pdf"
                resourceType="url"
                onLoad={() => this.setState({ loader: false })}
                onError={error => console.log('Cannot render PDF', error)}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default ContractPDFView;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: colors.blue,
    paddingHorizontal: 15
  },
  filterButton: {
    width: 35,
    height: 35
  },

  textcontainer: {
    flex: 0.6,
    paddingLeft: 10,
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  imagecontainer: {
    flex: 0.4,

    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  buttoncontainer: {
    flex: 7,
    paddingBottom: 10,
    backgroundColor: 'white',
    marginBottom: 20,
    borderRadius: 10
  }
});
