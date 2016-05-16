import React from 'react';
import {
  Platform,
  Text,
  TouchableOpacity,
} from 'react-native';

import ExNavigator from '@exponent/react-native-navigator';

import Exercise from '../components/Exercise';
import Muscles from '../components/Exercises/Muscles';
import Exercises from '../components/Exercises/Exercises';
import LogWorkoutDate from '../components/LogWorkoutDate';
import LogExerciseDate from '../components/LogExerciseDate';
import LogExercise from '../components/LogExercise';
import TabContainer from '../components/TabContainer';
import { getDateString, isToday } from '../utils';

export const MainRouter = {
  getExerciseRoute(exercise, setItem = {}) {
    return {
      extraActions: Exercise.extraActions,
      getTitle() {
        return exercise.name;
      },
      renderScene(navigator) {
        return (
          <Exercise
            ref={c => { this._exercise = c; }}
            navigator={navigator} exercise={exercise}
            weightValue={setItem.weightValue} reps={setItem.reps}
          />
        );
      },
    };
  },
  getLogWorkoutDateRoute(logEntry) {
    return {
      getTitle() {
        return getDateString(logEntry.workoutDate);
      },
      renderScene(navigator) {
        return <LogWorkoutDate navigator={navigator} logEntry={logEntry} />;
      },
    };
  },
  getLogExerciseDateRoute(logEntry, exercise) {
    if (isToday(logEntry.workoutDate)) {
      return MainRouter.getExerciseRoute(exercise);
    }
    return {
      getTitle() {
        if (Platform.OS === 'ios') {
          return exercise.name;
        }
        return `${getDateString(logEntry.workoutDate)} - ${exercise.name}`;
      },
      renderScene(navigator) {
        return <LogExerciseDate navigator={navigator} logEntry={logEntry} exercise={exercise} />;
      },
    };
  },
  getLogExerciseRoute(exercise) {
    return {
      getTitle() {
        return exercise.name;
      },
      renderScene(navigator) {
        return <LogExercise navigator={navigator} exercise={exercise} />;
      },
    };
  },
  getMusclesRoute(muscleGroup) {
    return {
      getTitle() {
        return (muscleGroup && muscleGroup.name) || 'All Muscles';
      },
      renderScene(navigator) {
        return <Muscles navigator={navigator} muscleGroup={muscleGroup} />;
      },
    };
  },
  getExercisesRoute(muscleGroup, muscle) {
    return {
      getTitle() {
        return (muscle && muscle.name) || (muscleGroup && muscleGroup.name) || 'All Exercises';
      },
      renderScene(navigator) {
        return <Exercises navigator={navigator} muscleGroup={muscleGroup} muscle={muscle} />;
      },
    }
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
        return (
          <TabContainer
            navigator={navigator}
            setTab={(title, extraActions) => this._setTab(title, extraActions)}
          />
        );
      },
      renderRightButton(navigator) {
        if (this.extraActions && this.extraActions[0]) {
          const onPress = () => this.extraActions[0].onSelected(navigator);
          return (
            <TouchableOpacity
              pressRetentionOffset={ExNavigator.Styles.barButtonPressRetentionOffset}
              onPress={onPress}
              style={ExNavigator.Styles.barRightButton}
            >
              <Text style={ExNavigator.Styles.barRightButtonText}>
                {this.extraActions[0].title}
              </Text>
            </TouchableOpacity>
          );
        }
        return null;
      },
    };
  },
};
