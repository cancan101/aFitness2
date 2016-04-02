import Realm from 'realm';


const realm = new Realm({
  schemaVersion: 16,
  schema: [
    {
      name: 'ActivitySet',
      properties: {
        recordDate: Realm.Types.DATE,
        workoutDate: Realm.Types.DATE,
        exercise: 'Exercise',
        reps: Realm.Types.INT,
        weightValue: Realm.Types.INT,
        weightUnits: Realm.Types.STRING,
      }
    },
    {
      name: 'ExerciseMuscle',
      properties: {
        isPrimary: Realm.Types.BOOL,
        muscleId: Realm.Types.INT,
      }
    },
    {
      name: 'Exercise',
      properties: {
        id: Realm.Types.INT,
        name: Realm.Types.STRING,
        image: {type: Realm.Types.STRING, optional: true},
        muscleGroupId: Realm.Types.INT,
        muscles: {type: 'list', objectType: 'ExerciseMuscle'},
        target1: {type: Realm.Types.STRING, optional: true},
        target2: {type: Realm.Types.STRING, optional: true},
        target3: {type: Realm.Types.STRING, optional: true},
        description: {type: Realm.Types.STRING, optional: true},
        difficulty: {type: Realm.Types.STRING, optional: true},
        type: {type: Realm.Types.STRING, optional: true},
      }
    }
  ]
});

// realm.write(() => {
//   realm.deleteAll();
// });

export default realm;
