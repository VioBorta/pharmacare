import React, { Component } from 'react'
import { Platform, StyleSheet, View, Text, Image, Button } from "react-native";
import { Header, colors } from "react-native-elements";
import styles from "./SearchHeader.style";
import { mainStyle } from '../../style';

export default class SearchHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.shadow}>
        <View style={[mainStyle.row, styles.header, ]}>
          <Text style={styles.headerTxt}>Elenco prestazione</Text>
          <Image style={styles.searchIcon} source={require('../../../assets/images/searchbox.png')} />
        </View>
      </View>
    );
  }
}
