import React, {
  Component,
} from 'react-native';

import Listitem from 'react-native-listitem';
import { ListView } from 'realm/react-native';

import realm from '../../realm';
import { MainRouter } from '../../routers';


export default class LogExerciseDate extends Component {
  constructor(props) {
    super(props);
    this._ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this._item = realm.objects('ActivitySet').filtered('workoutDate == $0 && exercise == $1', this.props.logEntry.workoutDate, this.props.exercise).sorted('recordDate');
  }

  _renderRow = (setItem, _, rowID) => {
    const setNum = this._item.length - rowID;
    // TODO: Make this a function:
    const text = `Set ${setNum}: ${setItem.reps} x ${setItem.weightValue}${setItem.weightUnits}`;
    const route = MainRouter.getExerciseRoute(exercise, setItem);
    return (
      <Listitem
        text={text}
        onPress={ () => this.props.navigator.push(route) }
      />
    );
  };

  render(){
    return (
      <ListView
        dataSource={this._ds.cloneWithRows(this._item)}
        renderRow={this._renderRow} />
    );
  }
}
