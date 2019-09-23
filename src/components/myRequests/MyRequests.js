import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';

import styles from "./MyRequests.style";

export default class MyRequests extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <View style={styles.item}  >
                    <View style={styles.user} >
                        <Image style={styles.userImg} source={require('../../../assets/images/user_Green.png')} />
                        <Text style={styles.name}>Alberto</Text>
                    </View>
                    <TouchableOpacity
                    // onPress={this.props.itemSelect}
                    // onPressOut={() => this.onPressHandler(index)}
                    >
                        <Icon
                            type='font-awesome'
                            name='play'
                            size={15}
                            color='#378DD2'
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
