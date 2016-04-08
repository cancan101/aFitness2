import React, {
  AppRegistry,
  AsyncStorage,
  Component,
} from 'react-native';

import Main from './components/Main';
import { loadData } from './components/Exercises/utils';
import realm from './realm';


const DB_VERSION_KEY = 'loadedVersion';
const CURRENT_DB_VERSION = 1;
const PURGE_DATA = false;

class App extends Component {
  _maybeLoadData = () => {
    AsyncStorage.getItem(DB_VERSION_KEY).then(k => {
      if (!k || parseInt(k) < CURRENT_DB_VERSION) {
        loadData();
        this.forceUpdate();
        AsyncStorage.setItem(DB_VERSION_KEY, String(CURRENT_DB_VERSION));
      }
    });
  };

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

  render() {
    return <Main />
  }
}


AppRegistry.registerComponent('aFitness2', () => App);
