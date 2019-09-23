import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    itemTitle: {
        backgroundColor: '#ffffff',
        fontSize: 18,
        fontFamily: 'IBMPlexSans-Bold',
        color: '#378DD2',
        paddingTop: 30,
        paddingBottom: 10,
        paddingLeft: 15
    },
    item: {
        padding: 15,
        paddingLeft: 10,
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderBottomColor: '#9BC6E9',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    user: {
        flexDirection: 'row',
    },
    userImg: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
        marginRight: 10
    },
    name: {
        fontSize: 18,
        fontFamily: 'IBMPlexSans-Bold',
        color: '#4A4A4A'
    },
    itemTitleIsClient: {
        marginTop: 20
    }
})