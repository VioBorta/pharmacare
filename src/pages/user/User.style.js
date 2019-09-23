import { StyleSheet } from "react-native";

import { colors } from "../../style/base";

export default (styles = StyleSheet.create({
    step: {
        borderBottomWidth: 1,
        borderBottomColor: colors.mainGreen,
        height: "10%"
    },
    text: {
        color: colors.mainBlue,
        fontFamily: 'IBMPlexSans-SemiBold',
        fontSize: 16
    },
    marginText: {
        marginTop: 25,
        marginLeft: 10, 
    },
    marginIcon: {
        marginRight: 10,
        marginTop: 20
    }
}));
