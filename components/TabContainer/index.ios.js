import React, {
  Component,
} from 'react';
import {
  TabBarIOS,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import ExNavigator from '@exponent/react-native-navigator';

import Exercises from '../Exercises';
import Workouts from '../Workouts';
import Logs from '../Logs';
import styles from './styles';
import { MainRouter } from '../../routers';


const TABS = [Exercises, Workouts, Logs];
const INITIAL_PAGE = 0;


export default class TabContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedTab: INITIAL_PAGE };
  }
  _setTab = (selectedTab) => {
    this.setState({ selectedTab });
  };
  _renderTab = (T, i) => (
    <Icon.TabBarItemIOS
      iconName={T.iconName}
      title={T.title}
      key={T.title}
      selected={this.state.selectedTab === i}
      onPress={() => this._setTab(i)}
    >
      <ExNavigator
        ref="navigator"
        initialRoute={MainRouter.getHomeRouteForTab(T)}
        style={styles.container}
        showNavigationBar
        sceneStyle={styles.scene}
      />
    </Icon.TabBarItemIOS>
  );

  render() {
    return (
      <TabBarIOS>
        {TABS.map(this._renderTab)}
      </TabBarIOS>
    );
  }
}
