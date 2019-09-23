import { StyleSheet } from "react-native";

import { colors } from "../../style/base";

export default (styles = StyleSheet.create({
    item: {
        borderBottomColor: colors.mainGreen,
        borderBottomWidth: 1,
        height: "10%"
    },
    icon: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
        height: 30,
        width: 30,
        resizeMode: 'contain'
    },
}));
