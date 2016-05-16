import realm from '../../realm';


const FILTER_ALL = 'all';


function getExercisesFiltered(selectedMuscle, selectedMuscleGroup) {
  let exercisesFiltered = realm.objects('Exercise');
  if (selectedMuscle !== FILTER_ALL) {
    exercisesFiltered = exercisesFiltered.filtered(
      'musclesMajor.name = $0 || musclesSecondary.name = $0',
      selectedMuscle,
    );
  } else if (selectedMuscleGroup !== FILTER_ALL) {
    exercisesFiltered = exercisesFiltered.filtered(
      'muscleGroups.name = $0', selectedMuscleGroup);
  }

  exercisesFiltered = exercisesFiltered.sorted('name');
  return exercisesFiltered;
}


function getMusclesFiltered(selectedMuscleGroup) {
  let muscles = realm.objects('Muscle');
  if (selectedMuscleGroup !== FILTER_ALL) {
    muscles = muscles.filtered('muscleGroup.name = $0', selectedMuscleGroup);
  }

  return muscles.sorted('name');
}

export { getExercisesFiltered, getMusclesFiltered, FILTER_ALL };
