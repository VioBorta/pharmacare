import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Alert, Modal } from "react-native";
import mainStyle from "../../style/base";
import ConfirmPhoneNumber from "./ConfirmPhoneNumber";
import pharma from "../../services/pharma";
import NavigationService from "../../navigation/navigationService";
import navigationConstants from "../../constants/navigationConstants";


const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

class ConfirmPhoneNumberContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: ""
        }
        this.changeState = this.changeState.bind(this);
    }

    changeState = (key, value) => {
        this.setState({ [key]: value });
    };

    confirmCode = () => {
        pharma.confirmCode(this.props.auth.phone, this.state.code)
            .then((resp) => {
                this.setState({ code: resp.data })
                NavigationService.navigate(navigationConstants.FOOTER_PAGES)
            })
            .catch((error) => {
                alert(error.response)
            })
    }

    render() {
        return (
            <View style={[mainStyle.container]}>
                <ConfirmPhoneNumber
                    code={this.state.code}
                    phone={this.props.auth.phone}
                    changeState={this.changeState}
                    confirmCode={this.confirmCode}
                />
            </View>
        );
    }
}

export default connect(
    mapStateToProps,
    null
)(ConfirmPhoneNumberContainer);
