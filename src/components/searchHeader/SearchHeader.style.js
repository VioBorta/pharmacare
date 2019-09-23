import { StyleSheet, Platform } from 'react-native'

export default styles = StyleSheet.create({
    // shadow: {
    //     zIndex: 1,
    //     ...Platform.select({
    //         ios: {
    //             shadowColor: "#378DD2",
    //             shadowOpacity: 0.3,
    //             shadowOffset: { width: 0, height: 4 },
    //             shadowRadius: 8
    //         },
    //         android: {
    //             elevation: 7,
    //             borderBottomColor: "#378DD2"
    //         }
    //     })
    // },
    headerTxt: {
        fontSize: 24,
        fontFamily: "IBMPlexSans-Bold",
        color: "#378DD2"
    },
    // button:{
    //     marginTop: 5
    // }
    header: {
        justifyContent: "space-between",
        backgroundColor: "#FFFF",
        marginRight: 10,
        marginLeft: 10,
    },
    searchIcon: {
        width: 25, 
        height: 25,
    }
})