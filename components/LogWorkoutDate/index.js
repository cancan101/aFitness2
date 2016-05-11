import React, {
  Component,
  ListView,
  Text,
  View,
} from 'react-native';

import Listitem from 'react-native-listitem';
import { liText } from 'react-native-listitem/styles';

import map from 'lodash/map';
import groupBy from 'lodash/groupBy';
import maxBy from 'lodash/maxBy';
import sortBy from 'lodash/sortBy';

import realm from '../../realm';
import { MainRouter } from '../../routers';


export default class LogWorkoutDate extends Component {
  static propTypes = {
    logEntry: React.PropTypes.object.isRequired,
    navigator: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this._ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this._item = realm.objects('ActivitySet').filtered(
      'workoutDate == $0',
      this.props.logEntry.workoutDate);
  }

  _renderRow = (logEntryExercise) => {
    const { exercise, setCount } = logEntryExercise;
    const route = MainRouter.getLogExerciseDateRoute(this.props.logEntry, exercise);

    return (
      <Listitem
        onPress={() => this.props.navigator.push(route)}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={liText}>{exercise.name}</Text>
          <Text style={liText}>{`${setCount} sets`}</Text>
        </View>
      </Listitem>
    );
  };

  render() {
    const logs = sortBy(map(
      groupBy(this._item, 'exercise.id'),
      v => ({
        exercise: v[0].exercise,
        setCount: v.length,
        lastSet: maxBy(v, 'recordDate').recordDate,
      })
    ), 'lastSet').reverse();
    return (
      <ListView
        enableEmptySections
        dataSource={this._ds.cloneWithRows(logs)}
        renderRow={this._renderRow}
      />
    );
  }
}
