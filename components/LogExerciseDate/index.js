import React, {
  Component,
} from 'react-native';

import Listitem from 'react-native-listitem';
import { ListView } from 'realm/react-native';

import realm from '../../realm';
import { MainRouter } from '../../routers';


export default class LogExerciseDate extends Component {
  static propTypes = {
    logEntry: React.PropTypes.object.isRequired,
    navigator: React.PropTypes.object.isRequired,
    exercise: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this._ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this._item = realm.objects('ActivitySet').filtered(
      'workoutDate == $0 && exercise == $1',
      this.props.logEntry.workoutDate,
      this.props.exercise
    ).sorted('recordDate');
  }

  _renderRow = (setItem, _, rowID) => {
    const setNum = rowID + 1;
    // TODO: Make this a function:
    const text = `Set ${setNum}: ${setItem.reps} x ${setItem.weightValue}${setItem.weightUnits}`;
    const route = MainRouter.getExerciseRoute(this.props.exercise, setItem);
    return (
      <Listitem
        text={text}
        onPress={() => this.props.navigator.push(route)}
      />
    );
  };

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this._ds.cloneWithRows(this._item)}
        renderRow={this._renderRow}
      />
    );
  }
}
