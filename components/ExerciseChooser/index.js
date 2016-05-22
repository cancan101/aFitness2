import React, {
  Component,
} from 'react';

import MuscleGroups from '../Exercises/MuscleGroups';


export default class ExerciseChooser extends Component {
  static propTypes = {
    route: React.PropTypes.object.isRequired,
    exerciseSelected: React.PropTypes.func.isRequired,
  };

  static title = 'Exercises';

  exerciseSelected = (exercise, navigator) => {
    const { route, exerciseSelected } = this.props;
    exerciseSelected(exercise);
    navigator.popToRoute(route);
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
