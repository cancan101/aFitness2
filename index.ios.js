'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
} from 'react-native';

import ExNavigator from '@exponent/react-native-navigator';

import { MainRouter } from './routers';


class aFitness2 extends Component {
  setRoute = (route) => {
    this.setState({route});
  };
  render() {
    return (
      <ExNavigator
        ref="navigator"
        initialRoute={ MainRouter.getHomeRoute(this.setRoute) }
        style={styles.container}
        showNavigationBar={true}
        sceneStyle={{ paddingTop: 64 }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('aFitness2', () => aFitness2);
