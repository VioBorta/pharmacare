import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    sectionExpanded: {
        overflow: 'hidden',
        borderBottomWidth: 1,
        borderBottomColor: '#9BC6E9',
        backgroundColor: '#F5F9FC',
        paddingTop: 10,
        height: this.heightSec,
    },
    sectionCollapsed: {
        overflow: 'hidden',
        borderBottomWidth: 1,
        borderBottomColor: '#9BC6E9',
        backgroundColor: '#FFFFFF',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        flex: 1,
        fontSize: 17,
        fontFamily: 'IBMPlexSans-Medium',
        marginLeft: 12,
        justifyContent: 'center',
        color: '#4A4A4A'
    },
    textPrice: {
        fontSize: 13,
        // fontFamily: 'IBMPlexSans-Regular',
        color: '#666666',
        marginLeft: 12
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonImage: {
        width: 14,
        height: 10,
        marginRight: 20
    },
    textBody: {
        color: '#666666',
        // fontFamily: 'IBMPlexSans-Regular',
        marginTop: 10,
        marginRight: 5,
        marginBottom: 15,
        marginLeft: 12
    }
})