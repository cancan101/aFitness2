import React, {
  Component,
} from 'react';

import { ListView } from 'realm/react-native';

import { MainRouter } from '../../routers';
import realm from '../../realm';
import ExerciseListItem from '../Exercises/ExerciseListItem';


function addExerciseToWorkout(exercise, workout) {
  if (workout.exercises.findIndex(e => e.id === exercise.id) !== -1) {
    return;
  }
  realm.write(() => {
    workout.exercises.push(exercise);
  });
}

export default class WorkoutExercises extends Component {
  static propTypes = {
    navigator: React.PropTypes.object.isRequired,
    workout: React.PropTypes.object.isRequired,
  };

  static extraActions = [
    {
      title: 'Add',
      show: 'always',
      iconName: 'add',
      onSelected: (navigator, route) => {
        const routeNew = MainRouter.getExerciseChooserRouter(
          route, exercise => addExerciseToWorkout(exercise, route.getWorkout()));
        navigator.push(routeNew);
      },
    },
  ];
  static title = 'Workouts';
  static iconName = 'playlist-play';

  constructor(props) {
    super(props);
    this._ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }

  exerciseSelected = (exercise, navigator) => {
    const route = MainRouter.getExerciseRoute(exercise);
    navigator.push(route);
  };

  _renderRow = exercise => (
    <ExerciseListItem
      exercise={exercise}
      navigator={this.props.navigator}
      exerciseSelected={this.exerciseSelected}
    />
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
