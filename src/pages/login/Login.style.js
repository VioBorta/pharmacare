import { StyleSheet } from 'react-native'
import { colors } from '../../style/base';

export default styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logoImage: {
        alignSelf: "center",
        marginTop: 35,
        marginBottom: 10
    },
    form: {
        marginRight: 20,
        marginBottom: 20,
    },
    textInput: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ffff"
    },
    icon: {
        marginLeft: "4%"
    },
    touchable: {
        alignSelf: "center",
        justifyContent: "center"
    },
    fontText: {
        fontFamily: "IBMPlexSans-SemiBold",
        fontSize: 18,
        flex: 1,
        color: "#FFFF",
        marginLeft: 10
    },
    button: {
        backgroundColor: colors.mainGreen,
    },
    textBtn: {
        marginTop: 10,
        alignSelf: 'center',
        color: "#ffff",
        fontSize: 18,
        fontFamily: "IBMPlexSans-SemiBold"
    },
    text: {
        marginLeft: 20,
        marginBottom: 35,
        color: "#ffff",
        fontSize: 18,
        fontFamily: "IBMPlexSans-SemiBold",
        textDecorationLine: 'underline'
    }
})