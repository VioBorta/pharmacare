import React from 'react';
import { View, Button as LinkButton, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { Form, Item, Content, Text } from 'native-base';
import { Formik } from "formik";
import { CheckBox } from 'react-native-elements';

import styles from './RegisterStyles'
import mainStyle from '../../style/base'
import { Gradient } from '../../components';

export default class Register extends React.Component {
  render() {
    const { container, logoImage, sectionStyle, textInput, icon, fontText, button, text, touchable, showButton, textCond, inputWrap, textButton } = styles
    const { registerinitValues, registervalidationSchema, submitForm, answer1, answer2,changeState } = this.props;
    return (
      <View style={container}>
        <Gradient />
        <Content style={StyleSheet.absoluteFill}>
          <View style={logoImage}>
            <Image source={require('../../../assets/images/logo.png')} />
          </View>
          <Formik
            validateOnBlur={true}
            initialValues={registerinitValues}
            validationSchema={registervalidationSchema}
            onSubmit={submitForm}
          >
            {({
              handleChange,
              errors,
              touched,
              handleBlur,
              handleSubmit,
              values
            }) => (
                <Form style={sectionStyle}>
                  <Item style={textInput}>
                    <View style={icon}>
                      <Image source={require('../../../assets/images/user.png')} />
                    </View>
                    <TextInput
                      style={fontText}
                      placeholder="Inserici il tuo nome"
                      placeholderTextColor="#FFFF"
                      underlineColorAndroid="transparent"
                      underlineColor='transparent'
                      onChangeText={handleChange("username")}
                      onBlur={handleBlur("username")}
                      value={values.username}
                    />
                  </Item>
                  {errors.username && touched.username ? (
                    <Text style={[styles.inputLabel, mainStyle.validationError]}>{errors.username}</Text>
                  ) : null}
                  <Item style={textInput}>
                    <View style={icon}>
                      <Image source={require('../../../assets/images/lock.png')} />
                    </View>
                    <TextInput
                      style={fontText}
                      placeholder="Scegli la tua password"
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      value={values.password}
                      selectionColor="#FFFF"
                      placeholderTextColor="#FFFF"
                      underlineColorAndroid="transparent"
                      underlineColor="transparent"
                      secureTextEntry={true}  
                    />
                    <TouchableOpacity style={touchable}>
                      <Text style={showButton}>MOSTRA</Text>
                    </TouchableOpacity>
                  </Item>
                  {errors.password && touched.password ? (
                    <Text style={[styles.inputLabel, mainStyle.validationError]}>{errors.password}</Text>
                  ) : null}
                  <Text style={textCond}>
                    Dichiaro di aver letto e di accettare i termini e le condizioni di partecipazione.
                    Autorizzo il trattamento dei miei dati personali ai sensi del decreto lgislativo N*  196/2003
                    sulla tutela della privacy.
            </Text>

                  <View style={inputWrap}>
                    <CheckBox
                      onPress={(value) => changeState("answer1", value)}
                      checked={answer1}
                      iconType='material-community'
                      checkedIcon='check-circle'
                      uncheckedIcon='checkbox-blank-circle-outline'
                      uncheckedColor='#ffffff'
                      checkedColor='#ffffff'
                    />
                    <Text style={text}>
                      Acconsento al trattamento dei dati sanitari per l&lsquo;erogazione del servizio PharmaCare
              </Text>
                  </View>
                  <View style={inputWrap}>
                    <CheckBox
                       onPress={(value) => changeState("answer2", value)}
                      checked={answer2}
                      iconType='material-community'
                      checkedIcon='check-circle'
                      uncheckedIcon='checkbox-blank-circle-outline'
                      uncheckedColor='#ffffff'
                      checkedColor='#ffffff'
                    />
                    <Text style={text}>
                      All trattamento dei dati personali per finalità di merketing di prodotti e/o servizi
                      del titolare e/o di business partner dello stesso
              </Text>
                  </View>
                  <TouchableOpacity style={button} primary full onPress={handleSubmit}>
                    <Text style={textButton}>ACCETTA E CONTINUA</Text>
                  </TouchableOpacity>
                </Form>

              )}
          </Formik>
        </Content>
      </View>
    )
  }
}


