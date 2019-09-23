import React, { Component } from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import mainStyle from "../../style/base";
import SearchOnMap from "./SearchOnMap";




const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => ({

});

class SearchOnMapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
render() {
  return (
    <View style={mainStyle.container}>
    <SearchOnMap

    />
  </View>
  );
}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchOnMapContainer);
