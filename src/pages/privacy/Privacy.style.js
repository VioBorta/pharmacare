import { StyleSheet } from "react-native";

import { colors } from "../../style/base";

export default (styles = StyleSheet.create({
    termsAndCond: {
        width: "65%",
        marginLeft: "5%",
        fontSize: 14
    },
    switchOn: {
        color: colors.mainGreen
    },
    switchOff: {
        color: "red"
    },
    textNo: {
        marginRight: 5,
        marginTop: 5,
        fontSize: 16,
        fontFamily: 'IBMPlexSans-SemiBold',
    },
    textYes: {
        marginRight: 5,
        marginLeft: 5,
        marginTop: 5,
        fontSize: 16,
        fontFamily: 'IBMPlexSans-SemiBold',
    },
    linkText: {
    //     borderBottomWidth: 1,
    marginLeft: "5%",
    },
    button: {
        backgroundColor: colors.mainGreen
    },
    cancelButton: {
        backgroundColor: "red",
    }
}));
