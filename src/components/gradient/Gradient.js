
import React, { Component } from 'react'
import { View, ImageBackground } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

import styles from "./Gradient.style";

export default class Gradient extends Component {

    render() {
        return (
            <View>
                <ImageBackground style={styles.image} source={require('../../../assets/images/background.jpg')}>
                    <LinearGradient
                        colors={['rgba(80, 210, 194, 0.8)', 'rgba(55,141,210,0.8)']}
                        style={styles.linearGradient}>
                    </LinearGradient>
                </ImageBackground>
            </View>
        )
    }
}