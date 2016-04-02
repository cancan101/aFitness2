import Realm from 'realm';


const realm = new Realm({
  schemaVersion: 23,
  schema: [
    {
      name: 'MuscleGroup',
      properties: {
        name: Realm.Types.STRING,
      }
    },
    {
      name: 'Muscle',
      properties: {
        name: Realm.Types.STRING,
        muscleGroup: 'MuscleGroup',
      }
    },
    {
      name: 'Exercise',
      properties: {
        id: Realm.Types.INT,
        name: Realm.Types.STRING,
        image: {type: Realm.Types.STRING, optional: true},
        muscleGroups: {type: 'list', objectType: 'MuscleGroup'},
        musclesPrimary: {type: 'list', objectType: 'Muscle'},
        musclesSecondary: {type: 'list', objectType: 'Muscle'},
        description: {type: Realm.Types.STRING, optional: true},
        difficulty: {type: Realm.Types.STRING, optional: true},
        type: {type: Realm.Types.STRING, optional: true},
      }
    },
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
  ]
});

realm.write(() => {
  realm.deleteAll();
});

export default realm;