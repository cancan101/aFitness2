import realm from '../../realm';

function loadActivities(activities) {
  const exercises = realm.objects('Exercise');
  realm.write(() => {
    activities.forEach(activity => {
      const exercise = exercises.filtered('id = $0', activity.exercise_id)[0];
      const date = new Date(activity.record_date);
      realm.create('ActivitySet', {
        recordDate: date,
        workoutDate: date,
        exercise,
        reps: activity.reps,
        weightValue: activity.weight,
        weightUnits: 'lbs',
      });
    });
  });
}

export async function loadActivitiesFromUrl(url) {
  const resp = await fetch(url);
  const activities = await resp.json();
  loadActivities(activities);
}
