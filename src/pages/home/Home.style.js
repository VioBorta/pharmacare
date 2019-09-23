import { StyleSheet, Platform } from "react-native"

export default styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logoImage: {
        alignSelf: "center",
        marginTop: Platform.OS === 'ios' ? 170 : 70,
        marginBottom: 35
    },
    search: {
        backgroundColor: '#ffffff',
        width: '90%',
        height: 60,
        alignSelf: 'center',
        flexDirection: 'row',
        borderRadius: 30,
        paddingLeft: 20,
        paddingRight: 5,
        marginBottom: 15,
        borderTopColor: "transparent",
        ...Platform.select({
            ios: {
                shadowColor: "#378DD2",
                shadowOpacity: 0.3,
                shadowOffset: { width: 0, height: 4 },
                shadowRadius: 8
            },
            android: {
                elevation: 7,
                borderBottomColor: "#378DD2"
            }
        })
    },
    inputStyle: {
        color: '#378DD2',
        width: '90%',
        fontSize: 18,
        fontFamily: 'IBMPlexSans-Bold'
    },
    searchIcon: {
        paddingTop: 18
    },
    text: {
        color: "#378DD2",
        fontFamily: "IBMPlexSans-Medium",
        fontSize: 15,
        textAlign: 'center'
    }
})

