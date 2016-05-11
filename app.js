import React, {
  Component,
} from 'react';

import {
  AppRegistry,
  AsyncStorage,
} from 'react-native';

import Main from './components/Main';
import { loadData } from './components/Exercises/utils';
import realm from './realm';


const DB_VERSION_KEY = 'loadedVersion';
const CURRENT_DB_VERSION = 1;
const PURGE_DATA = false;

class App extends Component {
  componentDidMount = () => {
    if (PURGE_DATA) {
      AsyncStorage.removeItem('loadedVersion').then(() => {
        realm.write(() => {
          realm.deleteAll();
        });
        this._maybeLoadData();
      });
    } else {
      this._maybeLoadData();
    }
  };
  _maybeLoadData = () => {
    AsyncStorage.getItem(DB_VERSION_KEY).then(k => {
      if (!k || parseInt(k, 10) < CURRENT_DB_VERSION) {
        loadData();
        this.forceUpdate();
        AsyncStorage.setItem(DB_VERSION_KEY, String(CURRENT_DB_VERSION));
      }
    });
  };
  render() {
    return <Main />;
  }
}


AppRegistry.registerComponent('aFitness2', () => App);
