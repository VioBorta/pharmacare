import React, { Component } from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import {  Location, Permissions } from 'expo';

import mainStyle from "../../style/base";
import Maps from "./Maps";

const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => ({

});

class MapsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mapRegion: null,
            hasLocationPermissions: false,
            locationResult: null
        }
    }
    componentDidMount() {
        this.getLocationAsync();
      }
    
      handleMapRegionChange = mapRegion => {
        console.log(mapRegion);
        this.setState({ mapRegion });
      };
    
      getLocationAsync = async () => {
       let { status } = await Permissions.askAsync(Permissions.LOCATION);
       if (status !== 'granted') {
         this.setState({
           locationResult: 'Permission to access location was denied',
         });
       } else {
         this.setState({ hasLocationPermissions: true });
       }
       let location = await Location.getCurrentPositionAsync({});
       this.setState({ locationResult: JSON.stringify(location) });
               this.setState({mapRegion: { latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }});
      };
    render() {
        return (
            <View style={[mainStyle.container]}>
                <Maps
                  mapRegion={this.state.mapRegion}
                  hasLocationPermissions={this.state.hasLocationPermissions}
                  locationResult={this.state.locationResult}
                  _handleMapRegionChange={this.handleMapRegionChange}
                />
            </View>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MapsContainer);
