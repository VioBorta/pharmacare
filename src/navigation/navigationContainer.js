import { Image } from "react-native";
import React from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from "react-navigation";
import {
  LoginOrRegister,
  Login,
  Register,
  Home,
  // ShowAddresses,
  // ShowRequestsList,
  // ShowRequestsItemDetails,
  Profile,
  User,
  Privacy,
  Tutori,
  Assistiti,
  ListOfServices,
  SearchOnMap,
  ConfirmPhoneNumber,
  Maps,
} from "../pages";
import navigationConstants from "../constants/navigationConstants";
import ListOfRequests from "../pages/listOfRequests/ListOfRequests";

const PagesNavigator = createStackNavigator(
  {
    [navigationConstants.LOGIN]: Login,
    [navigationConstants.LOGIN_REGISTER]: LoginOrRegister,
    [navigationConstants.REGISTER]: Register,
    [navigationConstants.CONFIRM_CODE]: ConfirmPhoneNumber,
    [navigationConstants.HOME]: Home,
    // [navigationConstants.SHOW_ADDRESS]: ShowAddresses,
    // [navigationConstants.SERVICES]: ListOfServices,
    // [navigationConstants.REQUESTS]: ListOfRequests,
    // [navigationConstants.SHOW_REQUESTS_LIST]: ShowRequestsList,
    // [navigationConstants.SHOW_REQUESTS_ITEM_DETAILS]: ShowRequestsItemDetails,
    [navigationConstants.PROFILE]: Profile,
    [navigationConstants.USER]: User,
    [navigationConstants.PRIVACY]: Privacy,
    [navigationConstants.TUTORI]: Tutori,
    [navigationConstants.ASSISTITI]: Assistiti,
    [navigationConstants.SEARCH_MAP]: SearchOnMap,
    [navigationConstants.MAPS]: Maps,
  },
  {
    initialRouteName: navigationConstants.LOGIN_REGISTER,
    headerMode: "none",
    navigationOptions: { headerVisible: true, gestureResponseDistance: { horizontal: 5000 } }
  }
);
const FooterNavigator = createBottomTabNavigator({
  TROVA: { screen: Home },
  PRESTAZIONE: { screen: ListOfServices },
  RICHIESTE: { screen: ListOfRequests },
  PROFILO: { screen: User },



}, {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state

        const footerSearchWhite = <Image source={require('../../assets/images/footer_search_white.png')} />
        const footerSearchGreen = <Image source={require('../../assets/images/footer_search_green.png')} />

        const footerPrestazioniWhite = <Image source={require('../../assets/images/footer_prestazioni_white.png')} />
        const footerPrestazioniGreen = <Image source={require('../../assets/images/footer_prestazioni_green.png')} />

        const footerRichiesteWhite = <Image source={require('../../assets/images/footer_richieste_white.png')} />
        const footerRichiesteGreen = <Image source={require('../../assets/images/footer_richieste_green.png')} />

        const footerProfileWhite = <Image source={require('../../assets/images/footer_profile_white.png')} />
        const footerProfileGreen = <Image source={require('../../assets/images/footer_profile_green.png')} />

        let iconName
        if (routeName === "TROVA") {
          iconName = focused ? footerSearchWhite : footerSearchGreen
        } else if (routeName === "PRESTAZIONE") {
          iconName = focused ? footerPrestazioniWhite : footerPrestazioniGreen
        } else if (routeName === "RICHIESTE") {
          iconName = focused ? footerRichiesteWhite : footerRichiesteGreen
        } else if (routeName === "PROFILO") {
          iconName = focused ? footerProfileWhite : footerProfileGreen
        }
        return iconName
      }
    }),
    
    tabBarOptions: {
      activeTintColor: '#FFF',
      inactiveTintColor: '#50D2C2',
      activeBackgroundColor: '#50D2C2',
      inactiveBackgroundColor: "#FFF",
      labelStyle: { fontSize: 14, fontFamily: "IBMPlexSans-SemiBold", bottom: "25%" },
      safeAreaInset: { bottom: "never", }
    }
  })

const AppNavigator = createSwitchNavigator({
  [navigationConstants.LOGIN_REGISTER]: LoginOrRegister,
  [navigationConstants.LOGIN]: Login,
  [navigationConstants.REGISTER]: Register,
  [navigationConstants.FOOTER_PAGES]: FooterNavigator,
  [navigationConstants.PAGES_NAVIGATOR]: PagesNavigator,
})

export default (NavigationContainer = createAppContainer(AppNavigator));
