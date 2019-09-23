import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { HeaderRequests, MyRequests } from '../../components';
import { mainStyle } from '../../style';
import { profile } from '../../translations';
import MyAssistiti from '../../components/myAssistiti/MyAssistiti';

export default class ListOfRequests extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <View style={mainStyle.mt_20}>
                    <Text style={[mainStyle.profileItemsText]}>{profile.REQUESTS}</Text>
                    <MyRequests />
                </View>
                <View style={mainStyle.mt_20}>
                    <Text style={[mainStyle.profileItemsText]}>{profile.ASSISTITI}</Text>
                    <MyAssistiti />
                </View>
            </View>
        );
    }
}
