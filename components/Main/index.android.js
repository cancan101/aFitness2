import React from 'react';
import {
  BackAndroid,
  StatusBar,
  View,
} from 'react-native';

import ExNavigator from '@exponent/react-native-navigator';

import { MainRouter } from '../../routers';

import Toolbar from '../Toolbar';
import { TOOLBAR_BACKGROUND_COLOR } from '../../colors';

import styles from './styles';


export default class Main extends React.Component {
  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this._onHardwareBackPress);
  }
  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this._onHardwareBackPress);
  }
  setRoute = (route) => {
    this.setState({ route });
  };
  augmentScene = (scene, route, navigator) => (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={TOOLBAR_BACKGROUND_COLOR}
      />
      <Toolbar
        navigator={navigator}
        route={route}
      />
      <View style={{ paddingTop: 56, flex: 1 }}>
        {scene}
      </View>
    </View>
  );
  _onHardwareBackPress = () => {
    if (this.refs.navigator.getCurrentRoutes().length > 1) {
      this.refs.navigator.pop();
      return true;
    }
    return false;
  };
  render() {
    return (
      <ExNavigator
        ref="navigator"
        initialRoute={MainRouter.getHomeRoute(this.setRoute)}
        style={styles.container}
        augmentScene={this.augmentScene}
        showNavigationBar={false}
      />
    );
  }
}
