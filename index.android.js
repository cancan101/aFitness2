'use strict';
import React, {
  AppRegistry,
  BackAndroid,
  StyleSheet,
  View,
} from 'react-native';
import ExNavigator from '@exponent/react-native-navigator';

import { MainRouter } from './routers';

import Toolbar from './components/Toolbar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


class AFitness extends React.Component {
  _onHardwareBackPress = () => {
    if(this.refs.navigator.getCurrentRoutes().length > 1) {
      this.refs.navigator.pop();
      return true;
    }else{
      return false;
    }
  };
  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this._onHardwareBackPress);
  }
  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this._onHardwareBackPress);
  }
  augmentScene = (scene, route, navigator) => {
    return (
      <View style={styles.container}>
        <Toolbar
          navigator={navigator}
          route={route}
        />
        <View style={{ paddingTop: 56, flex:1 }}>
          { scene }
        </View>
      </View>
    );
  };
  setRoute = (route) => {
    this.setState({route});
  };
  render() {
    return (
      <ExNavigator
        ref="navigator"
        initialRoute={ MainRouter.getHomeRoute(this.setRoute) }
        style={styles.container}
        augmentScene={this.augmentScene}
        showNavigationBar={false}
      />
    );
  }
}

AppRegistry.registerComponent('aFitness2', () => AFitness);
