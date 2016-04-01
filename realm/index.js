import Realm from 'realm';


const realm = new Realm({
  schemaVersion: 12,
  schema: [
    {
      name: 'Foo',
      properties: {
        recordDate: Realm.Types.DATE,
        workoutDate: Realm.Types.DATE,
        exerciseId: Realm.Types.INT,
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
