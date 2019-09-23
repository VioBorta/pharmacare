import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Title } from "native-base";

import styles from "./HeaderRequests.style";

export default class HeaderRequests extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.shadow}>
                <Header style={styles.header} androidStatusBarColor='#757575'>
                    <Title style={styles.headerTxt}>Ciao, newUser </Title>
                </Header>
            </View>
        );
    }
}
