import Realm from 'realm';


const realm = new Realm({
  schemaVersion: 6,
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
   }
  ]
});

// realm.write(() => {
//   realm.deleteAll();
// });

export default realm;
