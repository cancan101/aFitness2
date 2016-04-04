import realm from '../../realm';


export function loadData() {
  const muscleData = require('../../data/muscles.json');
  const exerciseData = require('../../data/exercises.json');

  const exercises = realm.objects('Exercise');
  const muscles = realm.objects('Muscle');

  const needsLoad = exerciseData.filter((i) => exercises.filtered(`id = "${i.id}"`).length == 0);
  realm.write(() => {
    Object.keys(muscleData).forEach(name => {
      const muscleGroup = realm.create('MuscleGroup', {name});
      Object.keys(muscleData[name].Muscle).forEach(name => realm.create('Muscle', {name, muscleGroup}));
    });

    needsLoad.forEach(ex => {
      const {MajorMuscles, SecondaryMuscles, image, description, difficulty, type, target1, target2, target3, ...data} = ex;

      const targets = [target1, target2, target3].filter(x => x);
      const muscleGroups = targets.map(x => realm.objects('MuscleGroup').filtered(`name =[c] "${x}"`)[0]);

      if(muscleGroups.filter(x => !x).length) {
        throw "Unknown target(s): " + targets;
      }

      const musclesMajor = Object.keys((MajorMuscles || {}).Muscle || {}).map(x => muscles.filtered(`name =[c] "${x}"`)[0]);
      const musclesSecondary = Object.keys((SecondaryMuscles || {}).Muscle || {}).map(x => muscles.filtered(`name =[c] "${x}"`)[0]);

      if(musclesMajor.filter(x => !x).length) {
        throw "Unknown muscle(s): " + Object.keys(MajorMuscles.Muscle);
      }

      if(musclesSecondary.filter(x => !x).length) {
        throw "Unknown muscle(s): " + Object.keys(SecondaryMuscles.Muscle);
      }

      realm.create('Exercise', {
        ...data,
        image,
        description,
        difficulty,
        type,
        muscleGroups,
        musclesMajor,
        musclesSecondary,
      });
    });
  });
}
