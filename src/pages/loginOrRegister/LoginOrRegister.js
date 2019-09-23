import React, { Component } from 'react'
import { View, StyleSheet, TextInput, Image, } from 'react-native'
import { Form, Item, Content, } from 'native-base'

import { Gradient, CustomButton } from "../../components"
import styles from './LoginOrRegister.style'

export default class LoginOrRegister extends Component {

    render() {
        const { phone, verifyPhone, changeState } = this.props;
        return (
            <View style={styles.container}>
                <Gradient />
                <Content style={StyleSheet.absoluteFill}>
                    <View style={styles.logoImage}>
                        <Image source={require('../../../assets/images/logo.png')} />
                    </View>
                    <Form style={styles.textInput}>
                        <Item>
                            <View>
                            <Image style={styles.image} source={require('../../../assets/images/phone.png')} />
                            </View>
                            <TextInput
                                value={phone}
                                style={styles.fontText}
                                placeholder="Inserisci il tuo numero telefono"
                                placeholderTextColor='#FFFF'
                                underlineColorAndroid='transparent'
                                onChangeText={value => changeState("phone", value)}
                                keyboardType='numeric'
                            />
                        </Item>
                    </Form>
                    <CustomButton
                        title="CONTINUA"
                        customStyle={styles.button}
                        submitAction={verifyPhone}
                    />
                </Content>
            </View>
        )
    }
}


