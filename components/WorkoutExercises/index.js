import React, {
  Component,
} from 'react';

import uuid from 'uuid';
import { ListView } from 'realm/react-native';
import Listitem from 'react-native-listitem';

import prompt from '../utils/prompt';


export default class WorkoutExercises extends Component {
  static extraActions = [
    {
      title: 'Add',
      show: 'always',
      iconName: 'add',
      onSelected: navigator => {
      },
    },
  ];
  static title = 'Workouts';
  static iconName = 'playlist-play';

  constructor(props) {
    super(props);
    this._ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }

  _renderRow = exercise => (
    <Listitem text={exercise.name} />
  );

  render() {
    const data = this.props.workout.exercises;
    return (
      <ListView
        enableEmptySections
        automaticallyAdjustContentInsets={false}
        dataSource={this._ds.cloneWithRows(data)}
        renderRow={this._renderRow}
      />
    );
  }
}
