import React, { Component } from 'react'
import { Provider } from "react-redux";
import NavigationContainer from "./src/navigation/navigationContainer";
import NavigationService from "./src/navigation/navigationService";
import createStore from './src/store';
import { Font, AppLoading } from 'expo';

const store = createStore;

// store.subscribe(() => {
//   const state = store.getState();
//   console.log(state);
// });

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false
    };
  }
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      'IBMPlexSans-Bold': require('./assets/fonts/IBMPlexSans-Bold.otf'),
      'IBMPlexSans-BoldItalic': require('./assets/fonts/IBMPlexSans-BoldItalic.otf'),
      'IBMPlexSans-ExtraLight': require('./assets/fonts/IBMPlexSans-ExtraLight.otf'),
      'IBMPlexSans-ExtraLightItalic': require('./assets/fonts/IBMPlexSans-ExtraLightItalic.otf'),
      'IBMPlexSans-Italic': require('./assets/fonts/IBMPlexSans-Italic.otf'),
      'IBMPlexSans-Light': require('./assets/fonts/IBMPlexSans-Light.otf'),
      'IBMPlexSans-LightItalic': require('./assets/fonts/IBMPlexSans-LightItalic.otf'),
      'IBMPlexSans-Medium': require('./assets/fonts/IBMPlexSans-Medium.otf'),
      'IBMPlexSans-MediumItalic': require('./assets/fonts/IBMPlexSans-MediumItalic.otf'),
      'IBMPlexSans-Regular': require('./assets/fonts/IBMPlexSans-Regular.otf'),
      'IBMPlexSans-SemiBold': require('./assets/fonts/IBMPlexSans-SemiBold.otf'),
      'IBMPlexSans-Text': require('./assets/fonts/IBMPlexSans-Text.otf'),
      'IBMPlexSans-TextItalic': require('./assets/fonts/IBMPlexSans-TextItalic.otf'),
      'IBMPlexSans-TextItalic': require('./assets/fonts/IBMPlexSans-TextItalic.otf'),
      'IBMPlexSans-ThinItalic': require('./assets/fonts/IBMPlexSans-ThinItalic.otf'),
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    const { fontLoaded } = this.state;
    if (!fontLoaded) {
      return <AppLoading />;
    }
      return(<Provider store={store}>
        <NavigationContainer
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>)
  }
}
