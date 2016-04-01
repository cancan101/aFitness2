import Realm from 'realm';


const realm = new Realm({
  schemaVersion: 14,
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
        image: Realm.Types.STRING,
        muscleGroupId: Realm.Types.INT,
        muscles: {type: 'list', objectType: 'ExerciseMuscle'},
      }
    }
  ]
});

// realm.write(() => {
//   realm.deleteAll();
// });

export default realm;
