import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logoImage: {
        alignSelf: 'center',
        marginTop: 35,
        marginBottom: 10
    },
    form: {
        marginRight: 20,
        marginBottom: 20
    },
    textInput: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff'
    },
    icon: {
        marginLeft: 12
    },
    touchable: {
        alignSelf: 'center',
        justifyContent: 'center'
    },
    fontText: {
        fontFamily: 'IBMPlexSans-SemiBold',
        fontSize: 15,
        flex: 1,
        color: '#FFFF',
        marginLeft: 10
    },
    button: {
        borderRadius: 60,
        width: 180,
        height: 50,
        backgroundColor: '#50D2C2',
        alignSelf: 'center'
    },
    textBtn: {
        marginTop: 10,
        alignSelf: 'center',
        color: '#ffff',
        fontSize: 18,
        fontFamily: 'IBMPlexSans-SemiBold'
    },
    text: {
        marginLeft: 20,
        marginBottom: 35,
        color: '#ffff',
        fontSize: 18,
        fontFamily: 'IBMPlexSans-SemiBold',
        textDecorationLine: 'underline'
    }
})