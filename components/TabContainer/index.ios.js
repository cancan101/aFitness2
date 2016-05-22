import React, {
  Component,
} from 'react';
import {
  TabBarIOS,
  TouchableOpacity,
  Text,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import ExNavigator from '@exponent/react-native-navigator';

import Exercises from '../Exercises';
import Workouts from '../Workouts';
import Logs from '../Logs';
import styles from './styles';


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
        initialRoute={{
          getSceneClass() {
            return T;
          },
          getTitle() {
            return T.title;
          },
          renderRightButton(navigator) {
            if (T.extraActions && T.extraActions[0]) {
              const onPress = () => T.extraActions[0].onSelected(navigator);
              return (
                <TouchableOpacity
                  pressRetentionOffset={ExNavigator.Styles.barButtonPressRetentionOffset}
                  onPress={onPress}
                  style={ExNavigator.Styles.barRightButton}
                >
                  <Text style={ExNavigator.Styles.barRightButtonText}>
                    {T.extraActions[0].title}
                  </Text>
                </TouchableOpacity>
              );
            }
            return null;
          },
        }}
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
