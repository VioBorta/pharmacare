import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Alert, Modal } from "react-native";
import Home from "./Home";
import mainStyle from "../../style/base";

import navigationService from "../../navigation/navigationService";
import navigationConstants from "../../constants/navigationConstants";
import { Footer } from "../../components";
import pharma from "../../services/pharma";


const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => {
    return {
        // addUserAddress: (searchAddress, farmaciesFromAPI) => {
        //     dispatch(addAddressAction(searchAddress, farmaciesFromAPI))
    }

}

const TITLE = 'Farmacia Finadri'
const ADDRESS = 'Via Alessandro Colombo, 28, 17035'
const CITY = 'Cisano Sul Neva SV, Italia'
const DITANCE = '25'
let IS_PHARMA_CARE = false

class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            coordinates: {
                lat: "",
                long: "",
                d: ""
            },
            searchAddress: '',
            farmaciesFromAPI: [
                { title: TITLE, address: ADDRESS, city: CITY, distance: DITANCE, isPharmaCare: true },
                { title: TITLE, address: ADDRESS, city: CITY, distance: DITANCE, isPharmaCare: true },
                { title: TITLE, address: ADDRESS, city: CITY, distance: DITANCE, isPharmaCare: false },
                { title: TITLE, address: ADDRESS, city: CITY, distance: DITANCE, isPharmaCare: false },
                { title: TITLE, address: ADDRESS, city: CITY, distance: DITANCE, isPharmaCare: false },
                { title: TITLE, address: ADDRESS, city: CITY, distance: DITANCE, isPharmaCare: false },
                { title: TITLE, address: ADDRESS, city: CITY, distance: DITANCE, isPharmaCare: false },
                { title: TITLE, address: ADDRESS, city: CITY, distance: DITANCE, isPharmaCare: false },
                { title: TITLE, address: ADDRESS, city: CITY, distance: DITANCE, isPharmaCare: false },
                { title: TITLE, address: ADDRESS, city: CITY, distance: DITANCE, isPharmaCare: false }
            ]
        }
        this.changeState = this.changeState.bind(this);
    }

    focusHandler = () => {
        this.setState({
            searchAddress: '',


        })
    }
    componentDidMount = () => {
        // pharma.getPharmacy(this.state.coordinates)
        //     .then((resp) => {
        //         console.log(resp.data);
        //     }).catch((err) => {
        //         alert(err.response);
        //     })
    }
    changeState = (key, value) => {
        this.setState({ [key]: value });
      };

    render() {
        return (
            <View style={[mainStyle.container]}>
                <Home
                    farmaciesFromAPI={this.state.farmaciesFromAPI}
                    searchAddress={this.state.searchAddress}
                    focusHandler={this.focusHandler}
                    addressHandler={this.addressHandler}
                    changeState={this.changeState}
                />
            </View>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);
