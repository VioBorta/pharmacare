import React, { Component } from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import { ListOfRequests } from "..";
import mainStyle from "../../style/base";
import { Footer } from "../../components";


const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => ({

});

class ListOfRequestsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <View style={[mainStyle.container]}>
                <ListOfRequests                
                />
            </View>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListOfRequestsContainer);
