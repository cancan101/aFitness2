import React, {
  Component,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';

import Exercises from '../Exercises';
import Workouts from '../Workouts';
import Logs from '../Logs';

import { TOOLBAR_BACKGROUND_COLOR } from '../../colors';

const TABS = [Exercises, Workouts, Logs, ];
const INITIAL_PAGE = 0;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default class Main extends React.Component {
  onChangeTab = (v) => {
    this.props.setTab(v.ref.props.tabLabel, v.ref.type.extraActions || []);
  };

  componentDidMount() {
    this.props.setTab(TABS[INITIAL_PAGE].title, TABS[INITIAL_PAGE].extraActions || []);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
          backgroundColor={ TOOLBAR_BACKGROUND_COLOR }
        />

        <View style={styles.container}>
          <ScrollableTabView
            onChangeTab={this.onChangeTab}
            initialPage={INITIAL_PAGE}
            tabBarBackgroundColor={TOOLBAR_BACKGROUND_COLOR}
          >
            {TABS.map(T => <T tabLabel={T.title} key={T.title} navigator={this.props.navigator} /> )}
          </ScrollableTabView>
        </View>
      </View>
    );
  }
}
