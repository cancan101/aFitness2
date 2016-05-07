import Realm from 'realm';


const realm = new Realm({
  schemaVersion: 27,
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
      primaryKey: 'id',
      properties: {
        id: Realm.Types.STRING,
        name: Realm.Types.STRING,
        image: {type: Realm.Types.STRING, optional: true},
        muscleGroups: {type: 'list', objectType: 'MuscleGroup'},
        musclesMajor: {type: 'list', objectType: 'Muscle'},
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
        workoutDate: {type: Realm.Types.DATE, indexed: true},
        exercise: 'Exercise',
        reps: Realm.Types.INT,
        weightValue: Realm.Types.DOUBLE,
        weightUnits: Realm.Types.STRING,
      }
    },
  ]
});

export default realm;
