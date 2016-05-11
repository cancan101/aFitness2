import realm from '../../realm';
import muscleData from '../../data/muscles.json';
import exerciseData from '../../data/exercises.json';

export function loadData() {
  const exercises = realm.objects('Exercise');
  const muscles = realm.objects('Muscle');

  const needsLoad = exerciseData.filter((i) => exercises.filtered('id = $0', i.id).length === 0);
  realm.write(() => {
    Object.keys(muscleData).forEach(name => {
      const muscleGroup = realm.create('MuscleGroup', { name });
      Object.keys(muscleData[name].Muscle).forEach(
        muscleName => realm.create('Muscle', { name: muscleName, muscleGroup }));
    });

    needsLoad.forEach(ex => {
      const { MajorMuscles, SecondaryMuscles, target1, target2, target3, ...data } = ex;

      const targets = [target1, target2, target3].filter(x => x);
      const muscleGroups = targets.map(
        x => realm.objects('MuscleGroup').filtered('name =[c] $0', x)[0]);

      if (muscleGroups.filter(x => !x).length) {
        throw new Error(`Unknown target(s):  ${targets}`);
      }

      const musclesMajor = Object.keys((MajorMuscles || {}).Muscle || {}).map(
        x => muscles.filtered('name =[c] $0', x)[0]);
      const musclesSecondary = Object.keys((SecondaryMuscles || {}).Muscle || {}).map(
        x => muscles.filtered('name =[c] $0', x)[0]);

      if (musclesMajor.filter(x => !x).length) {
        throw new Error(`Unknown muscle(s): ${Object.keys(MajorMuscles.Muscle)}`);
      }

      if (musclesSecondary.filter(x => !x).length) {
        throw new Error(`Unknown muscle(s): ${Object.keys(SecondaryMuscles.Muscle)}`);
      }

      realm.create('Exercise', {
        ...data,
        muscleGroups,
        musclesMajor,
        musclesSecondary,
      });
    });
  });
}
