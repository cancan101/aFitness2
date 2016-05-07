import React, {
  Component,
} from 'react-native';

import ExNavigator from '@exponent/react-native-navigator';

import { MainRouter } from '../../routers';

import styles from './styles';


export default class Main extends Component {
  setRoute = (route) => {
    this.setState({ route });
  };
  render() {
    return (
      <ExNavigator
        ref="navigator"
        initialRoute={MainRouter.getHomeRoute(this.setRoute)}
        style={styles.container}
        showNavigationBar
        sceneStyle={{ paddingTop: 64 }}
      />
    );
  }
}
