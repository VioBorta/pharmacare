import React, { Component } from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import mainStyle from "../../style/base";
import Tutori from "./Tutori";

const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => ({

});

class TutoriContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
render() {
  return (
    <View style={mainStyle.container}>
    <Tutori

    />
  </View>
  );
}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TutoriContainer);
