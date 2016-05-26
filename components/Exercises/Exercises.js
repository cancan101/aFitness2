import React, {
  Component,
} from 'react';

import { ListView } from 'realm/react-native';

import ExerciseList from './ExerciseList';
import { getExercisesFiltered } from './filters';


export default class Exercises extends Component {
  static propTypes = {
    muscle: React.PropTypes.object,
    muscleGroup: React.PropTypes.object,
  };

  constructor(props) {
    super(props);
    this._ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }

  render() {
    const { muscle, muscleGroup } = this.props;
    const exercisesFiltered = getExercisesFiltered(muscle, muscleGroup);   
    const dataSource = this._ds.cloneWithRows(exercisesFiltered);
    return (
      <ExerciseList
        {...this.props}
        dataSource={dataSource}
      />
    );
  }
}
