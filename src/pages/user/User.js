import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Icon } from 'react-native-elements';
import mainStyle, { colors } from "../../style/base";
import { profileSteps } from '../../constants/filters';
import styles from "./User.style";

export default class User extends Component {
    render() {
        const { changePage } = this.props;
        return (
            <View style={mainStyle.container}>
                {profileSteps.map((item, i) => {
                    return (
                        <View key={i} style={[mainStyle.row,  styles.step]}>
                            <Text  style={[styles.text, styles.marginText]}>{item.name}</Text>
                            <View style={styles.marginIcon}>
                                <Icon
                                    onPress={() => changePage(item.navigationPage)}
                                    name="chevron-right"
                                    type="material-community"
                                    size={30}
                                    color={colors.mainBlue}
                                />
                            </View>
                        </View>
                    );
                })}
            </View>
        );
    }
}
