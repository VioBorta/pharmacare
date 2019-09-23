import React, { Component } from "react";
import { connect } from "react-redux";
import { View } from "react-native";

import LoginOrRegister from "./LoginOrRegister";
import { actionTypes } from "../../constants";
import { mainStyle } from "../../style";
import { pharmaService } from "../../services";
import NavigationService from "../../navigation/navigationService";
import navigationConstants from "../../constants/navigationConstants";

const mapDispatchToProps = dispatch => ({
    onSubmit: phone =>
        dispatch({ type: actionTypes.AUTH_LOGIN_OR_REGISTER, payload: phone }),
});

class LoginOrRegisterContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: ""
        }
        this.changeState = this.changeState.bind(this);
    }

    verifyPhone = () => {
        pharmaService.verifyPhone(this.state.phone)
            .then((resp) => {
                if (resp.status === 200) {
                    if (!resp.data) {
                        this.props.onSubmit(this.state.phone);
                        NavigationService.navigate(navigationConstants.LOGIN)
                    }
                    else {
                        this.props.onSubmit(this.state.phone);
                        NavigationService.navigate(navigationConstants.REGISTER)
                    }
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
                <LoginOrRegister
                    phone={this.state.phone}
                    verifyPhone={this.verifyPhone}
                    changeState={this.changeState}
                />
            </View>
        );
    }
}

export default connect(null,
    mapDispatchToProps
)(LoginOrRegisterContainer);
