import { StyleSheet } from 'react-native'
import { colors } from '../../style/base';

export default styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logoImage: {
        alignSelf: "center",
        marginTop: 130,
        marginBottom: 15
    },
    textInput: {
        marginRight: 20,
        marginBottom: 30
    },
    fontText: {
        fontFamily: "IBMPlexSans-SemiBold",
        fontSize: 18,
        flex: 1,
        color: "#FFFF",
        marginLeft: 10
    },
    button: {
        borderRadius: 60,
        width: 180,
        height: 50,
        backgroundColor: "#50D2C2",
        alignSelf: 'center'
    },
    text: {
        marginTop: 5,
        alignSelf: 'center',
        color: '#ffffff',
        fontSize: 24,
        fontFamily: "IBMPlexSans-Bold"
    },
    button: {
        backgroundColor: colors.mainGreen
    },
    image: {
        height: 25,
        width: 25,
        resizeMode: 'contain',
        marginBottom: 5
    }

})