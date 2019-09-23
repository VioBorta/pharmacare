import React, { Component } from 'react'
import { View, StyleSheet, Image, TextInput } from "react-native"
import { Content, Text } from 'native-base'
import { Icon } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient';

import styles from './Home.style'
import navigationService from '../../navigation/navigationService';
import navigationConstants from '../../constants/navigationConstants';

export default class Home extends Component {
    render() {
        const { container, logoImage, search, inputStyle, searchIcon, text } = styles
        const { addressHandler, farmaciesFromAPI, searchAddress, focusHandler, changeState} = this.props;
        return (
            <LinearGradient
                colors={['#F6FAFC', '#E4E8EB']}
                style={{ flex: 1 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
            >
                <View style={container} >
                    <Content style={StyleSheet.absoluteFill} >
                        <View style={logoImage}>
                            <Image source={require('../../../assets/images/logoPharma.png')} />
                        </View>
                        <View style={search}>
                            <TextInput
                                style={inputStyle}
                                maxLength={40}
                                value={searchAddress}
                                placeholder="Inserisci il tuo indirizzo"
                                placeholderTextColor="#378DD2"
                                onChangeText={value => changeState("searchAddress", value)}
                                onBlur={focusHandler}
                                onSubmitEditing={addressHandler}
                            ></TextInput>
                            <Icon
                                onPress={() => navigationService.navigate(navigationConstants.SEARCH_MAP)}
                                containerStyle={searchIcon}
                                type='material-community'
                                name='magnify'
                                color='#50D2C2'
                            />
                        </View>
                        <Text style={text}>Trova la farmacia PharmaCare più vicina a te</Text>
                    </Content>
                </View>
            </LinearGradient>
        )
    }
}

