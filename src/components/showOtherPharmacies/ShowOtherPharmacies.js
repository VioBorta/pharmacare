import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';

import styles from "./ShowOtherPharmacies.style";
import { Icon } from 'react-native-elements';

export default class ShowOtherPharmacies extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
       <View style={styles.item} >
          <View >
            <View style={styles.title}>
              <Text style={styles.titleTxt}>Farmacia Finandri</Text>
            </View>
            <Text style={styles.addressTxt}>Via Alessandro Colombo, 28, 17035</Text>
            <Text style={styles.cityTxt}>Cisano Sun Neva SV, Italia</Text>
          </View>
          <View style={styles.map}>
            <Text style={styles.distanceStyle}>23 km</Text>
            <TouchableOpacity style={styles.mapButton}
                //  onPress={() => navigationService.navigate(navigationConstants.MAP)}
                 >
              <Icon
                containerStyle={styles.icon}
                type='font-awesome'
                name='compass'
                size={20}
                // color='#50D2C2'
                color='#ffffff'
              />
              <Text style={styles.mapTxt}>MAPPA</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
