import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { ShowOtherPharmacies, ShowPharmaPharmacies, SearchHeader } from '../../components';
import styles from "./SearchOnMap.style";

export default class SearchOnMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                {/* <SearchHeader/> */}
                <View style={styles.view}>
                    <Text style={styles.pharmaciesCountTxt}>Ci sono 4 farmacie PharmaCare vicine</Text>
                </View>
                <ShowPharmaPharmacies />
                <View style={styles.view}>
                    <Text style={styles.pharmaciesCountTxt}>Ci sono 4 farmacie nella zona</Text>
                </View>
                <ShowOtherPharmacies />
            </View>
        );
    }
}
