import React, { Component } from 'react';
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";

import styles from "./BackToProfile.style";
import { profile } from "../../translations";
import mainStyle, { colors } from "../../style/base";
import navigationService from '../../navigation/navigationService';
import navigationConstants from '../../constants/navigationConstants';


export default class BackToProfile extends Component {
  render() {
    return (
      <View style={[mainStyle.row, mainStyle.mt_20]}>
        <Icon
          onPress={() => navigationService.navigate(navigationConstants.USER)}
          name="chevron-left"
          type="material-community"
          size={30}
          color={colors.gray}
        />
        <Text style={styles.backText}>{profile.BACK}</Text>
      </View>
    );
  }
}
