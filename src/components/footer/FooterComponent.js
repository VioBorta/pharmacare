import React, { Component } from "react";
import { Text, TouchableOpacity, Image } from "react-native";

import styles from "./Footer.style";
import { colors } from "../../style/base";

export default class FooterComponent extends Component {
    render() {
        const { selected, item, onPressItem, image, text } = this.props;
        const backgroundColor = selected ? colors.mainGreen : colors.white
        const textColor = selected ? colors.white : colors.mainGreen
        const imageColor = selected ? colors.white : colors.mainGreen
        return (
            <TouchableOpacity
                onPress={() => {onPressItem(item)}}
                style={[styles.item, { backgroundColor: backgroundColor }]}>
                <Image style={[{tintColor: imageColor }]} source={image} />
                <Text style={[styles.text, { color: textColor }]}>{text}</Text>
            </TouchableOpacity>
        );
    }
}