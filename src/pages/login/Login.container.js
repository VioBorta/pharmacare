import React, { Component } from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import axios from 'axios'

import { mainStyle } from "../../style";
import { pharmaService } from "../../services";
import { userFields } from "../../constants/fields";
import Login from "./Login";
import NavigationService from "../../navigation/navigationService";
import navigationConstants from "../../constants/navigationConstants";
import { storeData, retrieveData } from "../../asyncStorage";

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            [userFields.PASSWORD]: "",
            [userFields.PHONE]: this.props.auth.phone,
        }
        this.changeState = this.changeState.bind(this);
    }

    authenticate = () => {
        pharmaService.authenticate(this.props.auth.phone, this.state.password)
            .then((resp) => {
                if (resp.status === 200) {
                    if (resp.data !== 'invalid Password!') {
                        const token = resp.data;
                        storeData("token", token);
                        NavigationService.navigate(navigationConstants.FOOTER_PAGES)
                    }
                    else return
                }
            })
            .catch(error => {
                (alert(error.resp));
            })
    }

    changeState = (key, value) => {
        this.setState({ [key]: value });
    };

    render() {
        return (
            <View style={[mainStyle.container]}>
                <Login

                    auth={this.props.auth}
                    phone={this.state[userFields.PHONE]}
                    password={this.state[userFields.PASSWORD]}
                    authenticate={this.authenticate}
                    changeState={this.changeState}
                />
            </View>
        );
    }
}

export default connect(
    mapStateToProps
)(LoginContainer);
