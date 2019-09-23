import { StyleSheet, Platform, StatusBar, Dimensions } from 'react-native'
const { height, width } = Dimensions.get("window");

export default styles = StyleSheet.create({
    image: {
        width: width,
        height: height,
        position: 'absolute',
        top: 0,
        left: 0
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        position: 'absolute',
        width: '100%',
        height: '100%'
    }
})
