import realm from '../../realm';


const FILTER_ALL = 'all';


function getExercisesFiltered(selectedMuscle, selectedMuscleGroup) {
  let exercisesFiltered = realm.objects('Exercise');
  if (selectedMuscle !== null) {
    exercisesFiltered = exercisesFiltered.filtered(
      'musclesMajor = $0 || musclesSecondary = $0',
      selectedMuscle,
    );
  } else if (selectedMuscleGroup !== null) {
    exercisesFiltered = exercisesFiltered.filtered(
      'muscleGroups = $0', selectedMuscleGroup);
  }

  exercisesFiltered = exercisesFiltered.sorted('name');
  return exercisesFiltered;
}


function getMusclesFiltered(selectedMuscleGroup) {
  let muscles = realm.objects('Muscle');
  if (selectedMuscleGroup !== null) {
    muscles = muscles.filtered('muscleGroup = $0', selectedMuscleGroup);
  }

  return muscles.sorted('name');
}

export { getExercisesFiltered, getMusclesFiltered, FILTER_ALL };
