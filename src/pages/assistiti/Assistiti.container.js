import React, { Component } from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import Assistiti from "./Assistiti";
import { mainStyle } from "../../style";
import { Footer } from "../../components";



const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => ({

});

class AssistitiContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return (
            <View style={[mainStyle.container]}>
                <Assistiti

                />
            </View>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AssistitiContainer);
