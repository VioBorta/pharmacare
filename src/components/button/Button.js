import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Button, Icon } from "react-native-elements";
import styles from "./Button.style";

export default class CustomButton extends Component {

  render() {
    const { title, submitAction, source, customStyle, isSubmitting,  } = this.props;
    return (
      <View style={styles.container}>
        <Button
          title={title}
          buttonStyle={[styles.button, customStyle]}
          onPress={submitAction}
          disabled={isSubmitting}
          titleStyle={[{ fontSize: 20, fontFamily: "IBMPlexSans-Bold", marginHorizontal: 10 }]}
          icon={<View style={styles.image}>{ <Image style={styles.icon} source={source} />}
          </View>}
        />
      </View>
    );
  }
}
