/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import Exercises, { loadData } from './components/Exercises';


class aFitness2 extends Component {
  _onPressButton = () => {
    loadData();
    this.forceUpdate();
  };
  render() {
    return (
      <View style={[styles.container, {paddingTop: 20,}]}>
        <TouchableHighlight onPress={this._onPressButton}>
          <Text>Load Data</Text>
        </TouchableHighlight>
        <Exercises ref="exercises" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('aFitness2', () => aFitness2);
