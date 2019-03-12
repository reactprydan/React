import React from 'react';
import {
  StyleSheet,
  View,
  UIManager,
  Platform,
  Dimensions
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ComodityListItem from '../../../components/TraddleList/ComoditySelectionList/ComodityListItem';
import colors from '../../../config/style/colors';
import TraddleButton from '../../../components/TraddleButton/TraddleButton';
import CommoditySelectionHeader from '../../../components/CommoditySelection/CommoditySelectionHeader';
import TraddleLoader from '../../../components/TraddleLoader/TraddleLoader';
class CommoditySelectionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commoditySelectionData : null
    };
  }
  componentWillMount() {
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  componentDidMount() {
    this.props.fetchProduct();
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      commoditySelectionData : newProps.data
    })
  }

  render() {
    const { commoditySelectionData } = this.state;
    if (this.props.data.isFetching) {
      return <TraddleLoader />;
    }
    return (
      <View style={styles.container}>
        <View>
          <CommoditySelectionHeader title="COMMODITY" subTitle="SELECTION" />
          <ScrollView>
            <View style={styles.itemsContainer}>
              {commoditySelectionData && commoditySelectionData.result.map((product, i) => (
                <ComodityListItem key={i} product={product} />
              ))}
            </View>
          </ScrollView>
          <TraddleButton
            title="Submit"
            onPress={() => {
              this.props.navigation.navigate('RegistrationScreeenStep1');
            }}
            titleStyle={styles.buttonText}
            styleContainer={styles.submitButtonStyle}
          />
        </View>
      </View>);
  }
}

export default CommoditySelectionScreen;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent'
  },
  container: {
    backgroundColor: colors.mainbackground,

    flex: 1,
    flexDirection: 'column'
  },
  text: {
    fontSize: 17,
    color: 'black',
    padding: 10
  },
  btnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20
  },
  btnTextHolder: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.5)'
  },
  Btn: {
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  headerStyles: {
    flexDirection: 'row',
    marginLeft: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  subStyles: {
    marginLeft: 40,
    width: Dimensions.get('window').width - 100
  },
  chkContainer: {
    height: 30,
    borderWidth: 1,
    marginTop: 20,
    borderColor: '#ffffff',
    backgroundColor: '#ffffff'
  },
  chksubContainer: {
    height: 30,
    borderWidth: 1,
    marginTop: 20,
    marginLeft: 30,
    marginRight: 20,
    borderColor: '#ffffff',
    backgroundColor: '#ffffff',
    width: 20
  },
  customHeaderCommodity: {
    marginTop: 20,
    marginBottom: 0,
    width: Dimensions.get('window').width - 100,
    marginLeft: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  submitButtonStyle: {
    backgroundColor: colors.primaryColor,
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 36
  },
  itemsContainer: { padding: '5%',flex:1 }
});
