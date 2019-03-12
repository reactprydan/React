import ReactNative from 'react-native';

const { StyleSheet } = ReactNative;

const ListStyle = StyleSheet.create({
  notFoundcontainer: {
    alignSelf: 'center',
    margin: 5,
    justifyContent: 'center',
    backgroundColor: "#ffffff",
    height: 40,
    width: 40,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#ffffff"
  },
  notFoundIcn: {
    alignSelf: 'center',
    justifyContent: 'center'
  },

  container: {
    // height:230,
    marginTop: 7,
    marginBottom: 7,
    alignSelf: 'center',
    alignItems: 'flex-start',
    width: 30,
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 5,
    margin: 18,
    padding: 10,
    flexDirection: 'row',
    // elevation:3,
    backgroundColor: '#ffffff'
  },
  imageContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#ffffff",
    marginRight: 15
  }
});

export default ListStyle;
