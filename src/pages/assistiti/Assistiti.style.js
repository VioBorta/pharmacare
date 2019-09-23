import { StyleSheet } from "react-native";
import { colors } from "../../style/base";


export default (styles = StyleSheet.create({
    text: {
        marginLeft: 5
    },
    item: {
        borderBottomColor: colors.gray,
        borderBottomWidth: 1,
        marginRight: 10,
        marginLeft: 10,
    },
    icon: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        height: 30,
        width: 30,
        resizeMode: 'contain'
    },
    aggiungiButton: {
        backgroundColor: colors.mainGreen
    }

}));
