import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import mainStyle from "../../style/base";
import styles from "./Tutori.style";
import { CustomButton, BackToProfile } from '../../components';
import { profile } from '../../translations';

const lock = require('../../../assets/images/lock.png');

export default class Tutori extends Component {
    render() {
        return (
            <View style={mainStyle.container}>
                <Text style={mainStyle.profileItemsText}>{profile.TUTORI}</Text>
                <View style={mainStyle.mt_20}>
                    <Text style={styles.text}>{profile.TUTORI_ASSOCIATO}</Text>
                </View>
                <View style={mainStyle.mt_20}>
                    <Text style={styles.text}>{profile.CODICE_SEGRETO}</Text>
                </View>
                <View style={[mainStyle.mt_20]}>
                    <CustomButton
                        title="GENERA CODICE"
                        source={lock}
                        customStyle={styles.button}
                    />
                </View>
                <View style={[mainStyle.mt_20, mainStyle.alignItemsCenter]}>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>90 SIM BIO P4LV</Text>
                    </TouchableOpacity>
                </View>
                <BackToProfile />
            </View>
        );
    }
}
