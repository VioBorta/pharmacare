import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import mainStyle, { colors } from "../../style/base"
import { footerItems } from "../../constants/footerItems";
import styles from "./Footer.style"
import navigationService from "../../navigation/navigationService";
import FooterComponent from "./FooterComponent";
import navigationConstants from "../../constants/navigationConstants";
export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedNav: "",
    };
    
    this.changePage = this.changePage.bind(this);
    this.changeState = this.changeState.bind(this);
    this.isFieldSelected = this.isFieldSelected.bind(this);
  }

  changePage = page => {
    this.setState({ selectedPage: page });
    navigationService.navigate(page);
  };

  changeState = (key, value) => {
    this.setState({ [key]: value });
  };
  isFieldSelected = (key, item) => {
    return this.state[key] == item;
  };

  render() {
    return (
      <View style={[mainStyle.footer, mainStyle.row]}>
        {footerItems.map((item, index) => {
          return (
            <FooterComponent
              key={index}
              id={item}
              onPressItem={item => {
                this.changeState("selectedNav", item)
                this.changePage(item.navigationPage)
              }}
              selected={this.isFieldSelected("selectedNav", item)}
              item={item}
              image={item.source}
              text={item.pageName}
            />
          );
        })}
      </View>
    );
  }
}
