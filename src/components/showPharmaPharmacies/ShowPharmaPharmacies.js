import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity} from 'react-native';

import styles from "./ShowPharmaPharmacies.style";
import { Icon } from 'react-native-elements';
import navigationService from '../../navigation/navigationService';
import navigationConstants from '../../constants/navigationConstants';

export default class ShowPharmaPharmacies extends Component {
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
              <Image style={styles.littleLogo} source={require('../../../assets/images/little_logo.png')} />
            </View>
            <Text style={styles.addressTxt}>Via Alessadro Colombo, 28, 17035</Text>
            <Text style={styles.cityTxt}>Cisano Sul Neva SV, Italia</Text>
          </View>
          <View style={styles.map}>
            <Text style={styles.distanceStyle}>8 km</Text>
            <TouchableOpacity style={styles.mapButton}
                 onPress={() => navigationService.navigate(navigationConstants.MAPS)}
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
