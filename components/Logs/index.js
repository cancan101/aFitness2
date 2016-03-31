import React, {
  Component,
  ListView,
  Text,
  View,
} from 'react-native';

import Listitem from 'react-native-listitem';
import groupBy from 'lodash/groupBy';
import uniqBy from 'lodash/uniqBy';
import map from 'lodash/map';

import { MainRouter } from '../../routers';
import realm from '../../realm';


export default class Logs extends Component {
  constructor(props) {
    super(props);
    this._ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  }

  _renderRow = (logEntry) => {
    const route = MainRouter.getLogRoute(logEntry);
    const { workoutDate, setCount, exerciseCount}= logEntry;
    const workoutDateLocal = new Date(
      workoutDate.getUTCFullYear(), workoutDate.getUTCMonth(), workoutDate.getUTCDate());
    let workoutDateLocalStr = workoutDateLocal.toLocaleDateString();

    const now = new Date();
    const today = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));
    if(today.getTime() == workoutDate.getTime()) {
      workoutDateLocalStr += 'today';
    }

    return (
      <Listitem
        text={`${workoutDateLocalStr} Sets: ${setCount} Exercises: ${exerciseCount}`}
        onPress={ () => this.props.navigator.push(route) }
      />
    );
  };

  render(){
    const logs = map(
      groupBy(realm.objects('Foo'), 'workoutDate'),
      (v, workoutDate) => {
        return {
          workoutDate: v[0].workoutDate,
          setCount: v.length,
          exerciseCount: uniqBy(v, 'exerciseId').length
        }
      }
    );
    return (
      <ListView
        dataSource={this._ds.cloneWithRows(logs)}
        renderRow={this._renderRow} />
    );
  }
}
