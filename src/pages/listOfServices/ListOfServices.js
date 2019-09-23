import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ServicesItem, SearchHeader } from '../../components';
import { mainStyle } from '../../style';

export default class ListOfServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View >
        <View>
          <SearchHeader />
        </View>
        <View>
          <ServicesItem />
        </View>
      </View>
    );
  }
}
