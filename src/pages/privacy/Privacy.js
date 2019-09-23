import React, { Component } from 'react';
import { View, Text, Switch } from 'react-native';

import mainStyle, { colors } from "../../style/base";
import styles from "./Privacy.style";
import { profile } from '../../translations';
import { CustomButton, BackToProfile } from '../../components';

const lock = require('../../../assets/images/lock.png');

export default class Privacy extends Component {
    render() {
        const { switchOne, switchTwo, switchStateOne, switchStateTwo } = this.props;
        const switchOneStyleOn = switchOne ? styles.switchOn : styles.switchOff;
        const switchOneStyleOff = switchOne ? styles.switchOff : styles.switchOn;
        const switchTwoStyleOn = switchTwo ? styles.switchOn : styles.switchOff;
        const switchTwoStyleOff = switchTwo ? styles.switchOff : styles.switchOn;
        return (
            <View style={mainStyle.container}>
                <Text style={mainStyle.profileItemsText}>{profile.IMPOSTAZIONI_PRIVACY}</Text>
                <View style={[mainStyle.row, mainStyle.mt_20]}>
                    <Text style={styles.termsAndCond}>{profile.ACCEPT_TERMS_CONDITIONS}</Text>
                    <View style={mainStyle.row}>
                        <Text style={[switchOneStyleOff, styles.textNo]}>{profile.No}</Text>
                        <Switch
                            value={switchOne}
                            onValueChange={switchStateOne}
                        />
                        <Text style={[switchOneStyleOn, styles.textYes]}>{profile.Yes}</Text>
                    </View>
                </View>
                <View style={[mainStyle.row, mainStyle.mt_20]}>
                    <Text style={styles.termsAndCond}>{profile.ACCEPT_TERMS_CONDITIONS}</Text>
                    <View style={mainStyle.row}>
                        <Text style={[switchTwoStyleOff, styles.textNo]}>{profile.No}</Text>
                        <Switch
                            value={switchTwo}
                            onValueChange={switchStateTwo}
                        />
                        <Text style={[switchTwoStyleOn, styles.textYes]}>{profile.Yes}</Text>
                    </View>
                </View>
                <View style={mainStyle.mt_20}>
                    <View style={styles.linkText}>
                        <Text>{profile.INFORMATION}</Text>
                    </View>
                    <View style={styles.linkText}>
                        <Text>{profile.TERMS_CONDITIONS}</Text>
                    </View>
                </View>
                <View style={mainStyle.mt_20}>
                    <Text style={mainStyle.profileItemsText}>{profile.PASSWORD}</Text>
                </View>
                <View style={[mainStyle.mt_20]}>
                    <CustomButton
                        title="MODIFICA PASSWORD"
                        customStyle={styles.button}
                        source={lock} />
                </View>
                <View style={mainStyle.mt_20}>
                    <Text style={mainStyle.profileItemsText}>{profile.ACCOUNT}</Text>
                </View>
                <View style={[mainStyle.mt_20]}>
                    <CustomButton
                        title="CANCELLA PROFILO"
                        customStyle={styles.cancelButton}
                        source={lock} />
                </View>
                <BackToProfile/>
            </View>
        );
    }
}
