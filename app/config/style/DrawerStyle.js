import { StyleSheet } from 'react-native';
import color from './colors';

const DrawerStyle = StyleSheet.create({
    container: {
      paddingTop: 20,
      flex: 1,
      backgroundColor: color.blue
    },
    userImgContainer: {
        top: 30,
        width: 100,
        height: 100,
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: color.placeholderUnderlineColor,
        borderRadius: 50
    },
    userImg: {
      width: 80,
      height: 80,
      flex: 1,
      backgroundColor: 'transparent'
    },
    navItemStyle: {
      textAlign: 'center',
      fontSize: 18,
      fontFamily: 'Gill Sans',
      color: color.white,
      backgroundColor: 'transparent',
      padding: 15
    },
    topHeaderItemContainer: {
        top: 20,
        marginTop: 10,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
    },
    topHeaderItemStyle: {
      textAlign: 'center',
      fontSize: 12,
      fontFamily: 'Gill Sans',
      color: color.white,
      backgroundColor: 'transparent',
      marginTop: 5
    },
    navSectionStyle: {
      backgroundColor: 'transparent',
      height: 200
    },
    navHeadingStyle: {
      paddingVertical: 10,
      paddingHorizontal: 5
    },
    navLogoutStyle: {
        flex: 1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical: 10,
        paddingHorizontal: 5
    }
  });

  export default DrawerStyle;