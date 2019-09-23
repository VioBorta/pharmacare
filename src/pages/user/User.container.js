import React, { Component } from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import User from "./User";
import mainStyle from "../../style/base";
import navigationService from "../../navigation/navigationService";
import { HeaderRequests } from "../../components";

const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => ({

});

class UserContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.changePage = this.changePage.bind(this);
  }

  changePage = page => {
    navigationService.navigate(page)
  }

render() {
  return (
    <View style={mainStyle.container}>
      <HeaderRequests/>
      <User
        changePage={this.changePage}
      />
    </View>
  );
}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer);
