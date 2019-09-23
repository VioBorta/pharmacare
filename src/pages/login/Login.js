import React, { Component } from 'react'
import { View, StyleSheet, TextInput, TouchableOpacity, Alert, Image } from 'react-native'
import { Form, Item, Content, Text } from 'native-base'
import styles from './Login.style'
import { Gradient, CustomButton } from '../../components';
import { userFields } from '../../constants/fields';

export default class Login extends Component {
    render() {
        const { container, logoImage, form, textInput, icon, fontText, text } = styles
        const { phone, password, authenticate, changeState} = this.props;

        return (
            <View style={container}>
                <Gradient />
                <Content style={StyleSheet.absoluteFill}>
                    <View style={logoImage}>
                        <Image source={require('../../../assets/images/logo.png')} />
                    </View>
                    <Form style={form}>
                        <Item style={textInput}>
                            <View style={icon}>
                                <Image source={require('../../../assets/images/phone.png')} />
                            </View>
                            <TextInput
                                style={fontText}
                                placeholderTextColor="#FFFF"
                                underlineColorAndroid="transparent"
                                underlineColor='transparent'
                                value={phone}
                                editable={false}
                            />
                        </Item>
                        <Item style={textInput}>
                            <View style={icon}>
                                <Image source={require('../../../assets/images/lock.png')} />
                            </View>
                            <TextInput
                                value={password}
                                style={fontText}
                                placeholder="Inserisci la tua password"
                                onChangeText={value => changeState([userFields.PASSWORD], value)}
                                selectionColor="#FFFF"
                                placeholderTextColor="#FFFF"
                                underlineColorAndroid="transparent"
                                underlineColor="transparent"
                                secureTextEntry={true}
                            />
                        </Item>
                    </Form>
                    <Text style={text} size={45}>
                        Ho dimenticato la password
                     </Text>
                    <CustomButton
                        title="ACCEDI"
                        customStyle={styles.button}
                        submitAction={authenticate}
                    />
                </Content>
            </View>
        )
    }
}
