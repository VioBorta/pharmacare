import React, { Component } from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import mainStyle from "../../style/base";
import ListOfServices  from "./ListOfServices";
import { Footer } from "../../components";
import pharma from "../../services/pharma";


const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => ({

});

class ListOfServicesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            treatmentsList: []
        }
    }

      componentWillMount() {
        pharma.getAllTreatments()
          .then(resp => {
            this.setState({ treatmentsList: resp.data })
          })
          .catch(error => {
            alert(error.response);
          })
      }

    render() {
        return (
            <View style={[mainStyle.container]}>
                <ListOfServices
                
                />
                <View>
                </View>

            </View>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListOfServicesContainer);
