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

const labels = ['Exercises', 'Workouts', 'Logs',];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this._initialPage = 0;
  }
  onChangeTab = (v) => {
    this.props.setTab(v.ref.props.tabLabel, v.ref.type.extraActions || []);
  };

  componentDidMount() {
    this.props.setTab(labels[this._initialPage], Exercises.extraActions || []);
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
            initialPage={this._initialPage}
            tabBarBackgroundColor={TOOLBAR_BACKGROUND_COLOR}
          >
            <Exercises tabLabel={labels[0]} navigator={this.props.navigator} />
            <Workouts tabLabel={labels[1]} navigator={this.props.navigator} />
            <Logs tabLabel={labels[2]} navigator={this.props.navigator} />
          </ScrollableTabView>
        </View>
      </View>
    );
  }
}
