import React, { Component } from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import * as axios from "axios";

import Profile from "./Profile";
import { userFields } from "../../constants/fields";
import { mainStyle } from "../../style";
import pharma from "../../services/pharma";
import constants from "../../constants/constants";
import { actionTypes } from "../../constants";
import { storeData, retrieveData } from "../../asyncStorage";
import { Footer } from "../../components";

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: data =>
    dispatch({ type: actionTypes.AUTH_LOGIN_OR_REGISTER, payload: data }),
});

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      [userFields.USERNAME]: "",
      [userFields.PHONE]: "",
      [userFields.CARD]: "",
      [userFields.ADDRESS]: "",
    }
  }

  setTokenHeader = headers => {
    headers[constants.AUTHORIZATION_HEADER] = authToken
    headers[constants.AUTHORIZATION_HEADER] = axios.defaults.headers.common.Authorization;
    this.storeUserData(headers[constants.AUTHORIZATION_HEADER]);
  }


  storeUserData = token => {
    var decodedToken = jwt_decode(token);
    if (decodedToken) {
      let userData = {
        [userFields.PHONE]: decodedToken.sub,
      }
      storeData(storeFields.USER, JSON.stringify(userData));

    }
  }

  componentWillMount() {
    pharma.getUserInfo()
      .then(resp => {
        this.setState({ [userFields.PHONE]: resp.data.phone })
      })
      .catch(error => {
        alert(error.response);
      })
  }
  render() {
    return (
      <View style={mainStyle.container}>
        <Profile
          username={this.state[userFields.USERNAME]}
          phone={this.state[userFields.PHONE]}
          card={this.state[userFields.CARD]}
          address={this.state[userFields.ADDRESS]}
        />
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainer);
