import { StyleSheet } from "react-native";
import { colors } from "../../style/base";


export default (styles = StyleSheet.create({
    button: {
        backgroundColor: colors.mainGreen
    },
    text: {
        marginLeft: 5
    },
    btn: {
        borderColor: colors.mainGreen,
        borderWidth: 2,
        width: "50%",
        height: 50,
        borderRadius: 5,
    },
    btnText: {
        marginTop: "5%",
        textAlign: "center",
        fontSize: 20,
        fontFamily: 'IBMPlexSans-Bold',
        color: colors.mainBlue
    }

}));
