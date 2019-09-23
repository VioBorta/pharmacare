import { StyleSheet, Platform } from 'react-native'

export default styles = StyleSheet.create({
    pharmaCareCountTxt: {
        paddingTop: 5,
        paddingBottom: 8,
        paddingLeft: 10,
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderBottomColor: '#378DD2',
        fontSize: 12,
        fontFamily: 'IBMPlexSans-Medium'
      },
      item: {
        paddingTop: 6,
        paddingBottom: 15,
        paddingLeft: 10,
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderBottomColor: "#9BC6E9",
        flexDirection: 'row',
        alignItems: 'baseline'
      },
      title: {
        flexDirection: 'row'
      },
      titleTxt: {
        fontSize: 16,
        fontFamily: 'IBMPlexSans-Medium',
        color: '#378DD2'
      },
      littleLogo: {
        width: 17,
        height: 17,
        resizeMode: 'contain',
        padding: 0,
        marginLeft: 10,
        marginTop: 5
      },
      addressTxt: {
        paddingTop: 3,
        paddingBottom: 3,
        fontSize: 12,
        color: '#666666'
      },
      cityTxt: {
        fontSize: 13,
        color: '#666666'
      },
      map: {
        marginLeft: 35,
        alignItems: 'center'
      },
      distanceStyle: {
        fontSize: 12,
        fontFamily: 'IBMPlexSans-Medium',
        marginBottom: 5
      },
      mapButton: {
        borderRadius: 60,
        flexDirection: 'row',
        width: 100,
        height: 30,
        backgroundColor: '#50D2C2',
        alignSelf: 'center'
      },
      icon: {
        alignSelf: 'center',
        marginLeft: 10
      },
      mapTxt: {
        marginTop: 3,
        marginLeft: 10,
        color: '#ffffff',
        fontFamily: 'IBMPlexSans-Bold'
      },
      pharmaciesCountTxt: {
        paddingTop: 20,
        paddingBottom: 8,
        paddingLeft: 10,
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderBottomColor: '#378DD2',
        fontSize: 12,
        fontFamily: 'IBMPlexSans-Medium'
      },
      titleBlackTxt: {
        fontSize: 16,
        fontFamily: 'IBMPlexSans-Medium',
        color: '#4A4A4A'
      },
      scrollStyle: {
        marginBottom: 55
      }
})