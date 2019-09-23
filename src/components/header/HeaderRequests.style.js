import { StyleSheet, Platform, StatusBar, Dimensions } from 'react-native'

export default styles = StyleSheet.create({
    shadow: {
        zIndex: 1,
        ...Platform.select({
            ios: {
                shadowColor: '#378DD2',
                shadowOpacity: 0.3,
                shadowOffset: { width: 0, height: 4 },
                shadowRadius: 8
            },
            android: {
                elevation: 7,
                borderBottomColor: '#378DD2'
            }
        })
    },
    header: {
        backgroundColor: '#FFFF',
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    headerTxt: {
        fontSize: 22,
        fontFamily: 'IBMPlexSans-Bold',
        color: '#378DD2',
        marginLeft: 5
    }
})
