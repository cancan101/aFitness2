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


const TABS = [Exercises, Workouts, Logs];
const INITIAL_PAGE = 0;


export default class TabContainer extends Component {
  static propTypes = {
    // setTab: React.PropTypes.func.isRequired,
    // navigator: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { selectedTab: INITIAL_PAGE };
  }

  componentDidMount() {
    // this.props.setTab(TABS[INITIAL_PAGE].title, TABS[INITIAL_PAGE].extraActions || []);
  }

  _setTab = (selectedTab) => {
    this.setState({ selectedTab });
  //   this.props.setTab(TABS[selectedTab].title, TABS[selectedTab].extraActions || []);
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
        style={{flex: 1}}
        showNavigationBar
        sceneStyle={{ paddingTop: 64 }}
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
