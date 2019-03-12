import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import {
  DocumentPicker,
  DocumentPickerUtil
} from 'react-native-document-picker';
import PDFView from 'react-native-view-pdf';
import TraddleLoader from '../../components/TraddleLoader/TraddleLoader';
import MESSAGE_ICON from '../../images/Icons/chat-icon.png';
import DOWNLOAD_ICON from '../../images/Icons/download-icon.png';
import SHARE_ICON from '../../images/Icons/share-icon.png';
import colors from '../../config/style/colors';
import TraddleButton from '../../components/TraddleButton/TraddleButton';

class ContractScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pdf: '',
      loader: false
    };
  }

  onButtonPress = () => {
    DocumentPicker.show(
      {
        filetype: [DocumentPickerUtil.pdf()]
      },
      (error, res) => {
        console.log(res, 'dsdf');
        this.setState({ loader: false });
        // Android
        console.log(
          res.uri,
          res.type, // mime type
          res.fileName,
          res.fileSize
        );
        this.setState({ pdf: res.uri });
      }
    );
  };

  render() {
    const { pdf, loader } = this.state;
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
              {pdf ? (
                <PDFView
                  fadeInDuration={250.0}
                  style={{ flex: 1 }}
                  resource={pdf}
                  resourceType="file"
                  onLoad={() => this.setState({ loader: false })}
                  onError={error => console.log('Cannot render PDF', error)}
                />
              ) : null}
            </View>
            <View style={styles.buttoninnercontainer}>
              <TraddleButton
                styleContainer={styles.uploadbutton}
                titleStyle={{ color: 'black', textAlign: 'center' }}
                title="Upload Signed Contract"
                type="n"
                onPress={this.onButtonPress}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default ContractScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: colors.blue,
    paddingHorizontal: 15
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  filterButton: {
    width: 35,
    height: 35
  },
  uploadbutton: {
    backgroundColor: 'white',
    borderWidth: 0.4,
    height: 40,
    width: '90%',
    borderColor: 'black'
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
  },
  buttoninnercontainer: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center'
  }
});
