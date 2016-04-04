import React, {
  Component,
  ListView,
} from 'react-native';

import Listitem from 'react-native-listitem';
import map from 'lodash/map';
import groupBy from 'lodash/groupBy';

import realm from '../../realm';
import { MainRouter } from '../../routers';


export default class LogWorkoutDate extends Component {
  constructor(props) {
    super(props);
    this._ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this._item = realm.objects('ActivitySet').filtered('workoutDate == $0', this.props.logEntry.workoutDate);
  }

  _renderRow = (logEntryExercise) => {
    const { exercise, setCount } = logEntryExercise;
    const route = MainRouter.getLogExerciseRoute(this.props.logEntry, exercise);

    return (
      <Listitem
        text={`${exercise.name} ${setCount} sets`}
        onPress={ () => this.props.navigator.push(route) }
      />
    );
  };

  render(){
    //TODO: sort this
    const logs = map(
      groupBy(this._item, 'exercise.id'),
      (v, exerciseId) => ({exercise: v[0].exercise, setCount: v.length,})
    );
    return (
      <ListView
        dataSource={this._ds.cloneWithRows(logs)}
        renderRow={this._renderRow} />
    );
  }
}
