import React, {
  Component,
} from 'react';

import { ListView } from 'realm/react-native';
import omit from 'lodash/omit';

import ExerciseList from './ExerciseList';
import { getExercisesFiltered } from './filters';


export default class Exercises extends Component {
  static propTypes = {
    ...omit(ExerciseList.propTypes, 'dataSource'),
    muscle: React.PropTypes.object,
    muscleGroup: React.PropTypes.object,
  };

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    const { muscle, muscleGroup } = this.props;
    const exercisesFiltered = getExercisesFiltered(muscle, muscleGroup);

    this._dataSource = ds.cloneWithRows(exercisesFiltered);
  }

  render() {
    return (
      <ExerciseList
        {...this.props}
        dataSource={this._dataSource}
      />
    );
  }
}
