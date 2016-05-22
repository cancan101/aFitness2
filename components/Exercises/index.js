import React, {
  Component,
} from 'react';
import {
  Alert,
} from 'react-native';

import MuscleGroups from './MuscleGroups';
import { MainRouter } from '../../routers';


export default class Exercises extends Component {
  static extraActions = [
    {
      title: 'Add', show: 'always', iconName: 'add',
      onSelected: () => {
        Alert.alert('Not implemented', 'Adding new exercises is not implemented');
      },
    },
  ];
  static title = 'Exercises';
  static iconName = 'view-carousel';

  exerciseSelected = (exercise, navigator) => {
    const route = MainRouter.getExerciseRoute(exercise);
    navigator.push(route);
  };

  render() {
    return (
      <MuscleGroups
        {...this.props}
        exerciseSelected={this.exerciseSelected}
      />
    );
  }
}
