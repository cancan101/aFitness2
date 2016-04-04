import React, {
  Platform,
  Text,
  TouchableOpacity,
} from 'react-native';

import ExNavigator from '@exponent/react-native-navigator';

import Exercise from '../components/Exercise';
import LogWorkoutDate from '../components/LogWorkoutDate';
import LogExerciseDate from '../components/LogExerciseDate';
import Main from '../components/Main';
import { getDateString, isToday } from '../utils';

export const MainRouter = {
  getExerciseRoute(exercise) {
    return {
      extraActions: Exercise.extraActions,
      getTitle() {
        return exercise.name;
      },
      renderScene(navigator) {
        return <Exercise navigator={navigator} exercise={exercise} />;
      },
    };
  },
  getLogWorkoutDateRoute(logEntry) {
    // TODO: if today go directly to exercise
    return {
      getTitle(){
        return getDateString(logEntry.workoutDate);
      },
      renderScene(navigator) {
        return <LogWorkoutDate navigator={navigator} logEntry={logEntry} />;
      },
    };
  },
  getLogExerciseRoute(logEntry, exercise) {
    if(isToday(logEntry.workoutDate)) {
      return MainRouter.getExerciseRoute(exercise);
    }
    return {
      getTitle(){
        if (Platform.OS === 'ios') {
          return exercise.name;
        } else {
          return `${getDateString(logEntry.workoutDate)} - ${exercise.name}`;
        }
      },
      renderScene(navigator) {
        return <LogExerciseDate navigator={navigator} logEntry={logEntry} exercise={exercise} />;
      },
    };
  },
  getHomeRoute(setRoute) {
    return {
      _setTab(title, extraActions) {
        this.title = title;
        this.extraActions = extraActions;
        setRoute(this);
      },
      getTitle() {
        return this.title || 'Main';
      },
      renderScene(navigator) {
        return <Main navigator={navigator} setTab={(title, extraActions) => this._setTab(title, extraActions)} />
      },
      renderRightButton(navigator) {
        if(this.extraActions && this.extraActions[0]) {
          const onPress = () => this.extraActions[0].onSelected(navigator);
          return (
            <TouchableOpacity
              pressRetentionOffset={ExNavigator.Styles.barButtonPressRetentionOffset}
              onPress={onPress}
              style={ExNavigator.Styles.barRightButton}>
              <Text style={ExNavigator.Styles.barRightButtonText}>
                { this.extraActions[0].title }
              </Text>
            </TouchableOpacity>
          );
        }
      }
    };
  },
};
