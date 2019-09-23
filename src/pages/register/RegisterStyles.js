import { StyleSheet, Platform } from 'react-native'

export default styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logoImage: {
        marginTop: Platform.OS === 'ios' ? 50 : 0,
        alignSelf: 'center',
        width: 300,
        height: 200
    },
    sectionStyle: {
        marginRight: 10
    },
    textInput: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff'
    },
    icon: {
        margin: 10
    },
    fontText: {
        // fontFamily: "IBMPlexSans-Regular",
        fontSize: 14,
        flex: 1,
        color: "#FFFF"
    },
    touchable: {
        alignSelf: "center",
        justifyContent: "center"
    },
    showButton: {
        fontSize: 10,
        marginRight: 15,
        color: "#FFFF"
    },
    textCond: {
        marginLeft: 15,
        marginTop: 10,
        // marginBottom: 5,
        color: "#ffff",
        fontSize: 11,
        // fontFamily: "IBMPlexSans-Regular"
    },
    inputWrap: {
        paddingRight: 60,
        flexDirection: "row",
        alignItems: "center",
        borderBottomWidth: 0
    },
    text: {
        marginLeft: -10,
        color: "#ffff",
        fontSize: 11,
        // fontFamily: "IBMPlexSans-Regular",
    },
    button: {
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 60,
        backgroundColor: "#50D2C2",
        height: 40,
        width: 250,
        alignSelf: "center"
    },
    textButton: {
        marginTop: 3,
        color: "#ffff",
        fontSize: 20,
        // fontFamily: "IBMPlexSans-Bold",
        alignSelf: "center"
    }
})
