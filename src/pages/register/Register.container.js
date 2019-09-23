import React, { Component } from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import * as Yup from "yup";

import mainStyle from "../../style/base";
import Register from "./Register";
import { actionTypes } from "../../constants";
import pharma from "../../services/pharma";
import navigationService from "../../navigation/navigationService";
import navigationConstants from "../../constants/navigationConstants";


const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: userData =>
    dispatch({ type: actionTypes.AUTH_REGISTER, payload: userData }),
});

const registerinitValues = {
  username: "",
  password: "",

};

const registervalidationSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8)
});

class RegisterConatiner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asnwer2: 0,
      answer1: 0,

    }
    this.registerinitValues = registerinitValues;
    this.registervalidationSchema = registervalidationSchema;
    this.submitForm = this.submitForm.bind(this);
    this.changeState = this.changeState.bind(this);
  }

  submitForm(values) {
    pharma
      .registration(values.username, values.password,this.props.auth.phone)
      .then(resp => {
        this.setState({ values: resp.data })
        this.props.onSubmit(values.username)
        this.generatePasscode();
        navigationService.navigate(navigationConstants.CONFIRM_CODE)
      })
      .catch(error => {
        (alert(error.response));
      })
    }

  generatePasscode = () => {
    pharma.generateCode()
      .then((resp) => {
        console.log(resp.data);
      })
      .catch(error => {
        (alert(error.response));
      })
  }

  changeState = (key, value) => {
    this.setState({ [key]: value });
  };
  
  render() {
    return (
      <View style={[mainStyle.container]}>
        <Register
          registerinitValues={this.registerinitValues}
          registervalidationSchema={this.registervalidationSchema}
          answer1={this.state.answer1}
          asnwer2={this.state.asnwer2}
          submitForm={this.submitForm}
          changeState={this.changeState}
        />
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterConatiner);
