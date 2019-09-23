import React, { Component } from 'react'
import { View, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native"
import { Content, Text, Form, Item } from 'native-base'
import { Icon } from 'react-native-elements'

import { Gradient } from '../../components';
import styles from "./ConfirmPhoneNumber.style";

export default class ConfirmPhoneNumber extends Component {
    render() {
        const { code, phone, changeState, confirmCode} = this.props;
        return (
            <View style={styles.container}>
                <Gradient />
                <View style={styles.logoImage}>
                    <Image source={require('../../../assets/images/logo.png')} />
                </View>
                <Form style={styles.form}>
                    <Item style={styles.textInput}>
                        <Icon
                            containerStyle={styles.icon}
                            type='material-community'
                            name='cellphone-android'
                            color='#ffffff'
                        />
                        <TextInput
                            style={styles.fontText}
                            placeholderTextColor="#FFFF"
                            underlineColorAndroid="transparent"
                            underlineColor='transparent'
                            value={phone}
                            editable={false}
                        />
                    </Item>
                    <Item style={styles.textInput}>
                        <Icon
                            containerStyle={styles.icon}
                            type='material-community'
                            name='textbox-password'
                            color='#ffffff'
                        />
                        <TextInput
                            value={code}
                            style={styles.fontText}
                            placeholder="Inserisci la tua passcode"
                            onChangeText={value => changeState("code", value)}
                            selectionColor="#FFFF"
                            placeholderTextColor="#FFFF"
                            underlineColorAndroid="transparent"
                            underlineColor="transparent"
                        />
                    </Item>
                </Form>
                <TouchableOpacity
                    style={styles.button}
                    onPress={confirmCode}
                >
                    <Text style={styles.textBtn}>ACCEDI</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

