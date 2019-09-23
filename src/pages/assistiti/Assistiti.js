import React, { Component } from 'react';
import { View, Text, TextInput, Image } from 'react-native';

import mainStyle from "../../style/base";
import styles from "./Assistiti.style";
import { BackToProfile, CustomButton } from '../../components';
import { profile } from '../../translations';

const phoneIcon = require('../../../assets/images/phonePharma.png');
const lockIcon = require('../../../assets/images/lock_blue.png');

export default class Assistiti extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={mainStyle.container}>
        <Text style={mainStyle.profileItemsText}> {profile.ASSISTITI} </Text>
        <View style={mainStyle.mt_20}>
          <Text style={styles.text}>{profile.ASSOCIATI_PROFILO}</Text>
        </View>
        <View style={mainStyle.mt_20}>
          <Text style={styles.text}>{profile.CODICE_SEGRETO_ASSISTITI}</Text>
        </View>
        <View style={[mainStyle.row, mainStyle.mt_20,styles.item]}>
          <Image
            style={styles.icon}
            source={phoneIcon}
          />
          <TextInput
            placeholder="Numero di telefono" />
        </View>
        <View style={[mainStyle.row,mainStyle.mt_20, styles.item]}>
          <Image
            style={styles.icon}
            source={lockIcon}
          />
          <TextInput
            placeholder="Codice segreto" />
        </View>
        <View style={mainStyle.mt_20}>
          <CustomButton
            title={"AGGIUNGI"}
            customStyle={styles.aggiungiButton}
          />
        </View>
        <View style={mainStyle.mt_20}>
          <BackToProfile />
        </View>
      </View>
    );
  }
}
