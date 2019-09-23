import React, { Component } from 'react';
import { View, Text, Image, TextInput } from 'react-native';

import styles from "./Profile.style";
import { mainStyle } from '../../style';
import { profile } from '../../translations';
import { BackToProfile } from '../../components';


const userIcon = require('../../../assets/images/user_Green.png');
const phoneIcon = require('../../../assets/images/phonePharma.png');
const profileGeopinIcon = require('../../../assets/images/ProfileGeopin.png');
const profileCard = require('../../../assets/images/profileCard.png');

export default class Profile extends Component {
    render() {
        const { username, address, phone, card } = this.props;
        return (
            <View style={mainStyle.container}>
                <Text style={[mainStyle.profileItemsText]}>{profile.DATI}</Text>
                <View style={[mainStyle.row, styles.item]}>
                    <Image
                        style={styles.icon}
                        source={userIcon}
                    />
                    <TextInput
                        value={username}
                        onChangeText={(email) => this.setState({email})}
                        placeholder="Name"
                    />
                </View>
                <View style={[mainStyle.row, styles.item]}>
                    <Image
                        style={styles.icon}
                        source={phoneIcon}
                    />
                    <TextInput
                        placeholder="Phone"
                        value={phone} />
                </View>
                <View style={[mainStyle.row, styles.item]}>
                    <Image
                        style={styles.icon}
                        source={profileGeopinIcon}
                    />
                    <TextInput
                        placeholder="Addresse" />
                </View>
                <View style={[mainStyle.row, styles.item]}>
                    <Image
                        style={styles.icon}
                        source={profileCard}
                    />
                    <TextInput
                        placeholder="Card Number" />
                </View>
                <BackToProfile />
            </View>
        );
    }
}
