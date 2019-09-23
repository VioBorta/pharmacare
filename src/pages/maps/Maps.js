import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MapView, } from 'expo';

export default class Maps extends Component {
  render() {
    const { mapRegion, hasLocationPermissions, locationResult, handleMapRegionChange } = this.props;
    return (
      <View style={styles.container}>
        {
          locationResult === null ?
            <Text>Your currwnt location is: </Text> :
            hasLocationPermissions === false ?
              <Text>Location permissions are not granted.</Text> :
              mapRegion === null ?
                <Text>Map region doesn't exist.</Text> :
                <MapView
                  style={{ alignSelf: 'stretch', height: 400 }}
                  region={mapRegion}
                  onRegionChange={handleMapRegionChange}
                />
        }

        <Text>
          Location: {locationResult}
        </Text>
      </View>
    );
  }
}
