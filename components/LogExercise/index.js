import React, {
  Component,
  ListView,
  Text,
  View,
} from 'react-native';

import Listitem from 'react-native-listitem';
import { liText } from 'react-native-listitem/styles';

import groupBy from 'lodash/groupBy';
import sortBy from 'lodash/sortBy';

import map from 'lodash/map';

import { MainRouter } from '../../routers';
import realm from '../../realm';
import { getDateString } from '../../utils';



export default class LogExercise extends Component {

  constructor(props) {
    super(props);
    this._ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }

  _renderRow = (logEntry) => {
    const route = MainRouter.getLogExerciseDateRoute(logEntry, this.props.exercise);
    const { workoutDate, setCount } = logEntry;
    const workoutDateLocalStr = getDateString(workoutDate);

    return (
      <Listitem
        onPress={() => this.props.navigator.push(route)}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={liText}>{workoutDateLocalStr}</Text>
          <Text style={liText}>{`Sets: ${setCount}`}</Text>
        </View>
      </Listitem>
    );
  };

  render() {
    const logs = sortBy(map(
      groupBy(realm.objects('ActivitySet').filtered('exercise == $0', this.props.exercise), 'workoutDate'),
      (v, workoutDate) => ({
        workoutDate: v[0].workoutDate,
        setCount: v.length,
      })
    ), 'workoutDate').reverse();
    return (
      <ListView
        enableEmptySections
        dataSource={this._ds.cloneWithRows(logs)}
        renderRow={this._renderRow}
    />
    );
  }
}
