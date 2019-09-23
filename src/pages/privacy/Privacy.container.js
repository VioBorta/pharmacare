import React, { Component } from "react";
import { connect } from "react-redux";
import { View } from "react-native";
import Privacy from "./Privacy";
import mainStyle from "../../style/base";
import pharma from "../../services/pharma";
// import Footer from "../../components/footer/Footer";


const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => ({

});

class PrivacyContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            switchOne: true,
            switchTwo: false,
        }
    }

    switchStateOne = () => {
        this.setState({ switchOne: !this.state.switchOne })
    }
    switchStateTwo = () => {
        this.setState({ switchTwo: !this.state.switchTwo })
    }

    // componentWillMount() {
    //     pharma.getUserInfo()
    //       .then(resp => {
    //         this.setState({ switchOne: resp.data.answer1})
    //         this.setState({switchTwo: resp.data.answer2})
    //       })
    //       .catch(error => {
    //         alert(error.response);
    //       })
    //   }

    render() {
        return (
            <View style={[mainStyle.container]}>
                <Privacy
                    switchOne={this.state.switchOne}
                    switchTwo={this.state.switchTwo}
                    switchStateOne={this.switchStateOne}
                    switchStateTwo={this.switchStateTwo}
                />
            </View>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PrivacyContainer);
