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
import WorkoutExercises from '../components/WorkoutExercises';
import ExerciseChooser from '../components/ExerciseChooser';
import ExerciseViewer from '../components/ExerciseViewer';

import { getDateString, isToday } from '../utils';


class Route {
  renderRightButton(navigator) {
    const T = this.getSceneClass();
    if (T.extraActions && T.extraActions[0]) {
      const onPress = () => T.extraActions[0].onSelected(navigator, this);
      return (
        <TouchableOpacity
          pressRetentionOffset={ExNavigator.Styles.barButtonPressRetentionOffset}
          onPress={onPress}
          style={ExNavigator.Styles.barRightButton}
        >
          <Text style={ExNavigator.Styles.barRightButtonText}>
            {T.extraActions[0].title}
          </Text>
        </TouchableOpacity>
      );
    }
    return null;
  }
}


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
  getExerciseViewerRoute(exercise) {
    return {
      getTitle() {
        return exercise.name;
      },
      renderScene(navigator) {
        return <ExerciseViewer navigator={navigator} exercise={exercise} />;
      },
      getBackButtonTitle() {
        return 'Back';
      },
    };
  },
  getExerciseChooserRouter(route, exerciseSelected) {
    return {
      getSceneClass() {
        return ExerciseChooser;
      },
      getTitle() {
        return this.getSceneClass().title;
      },
      renderScene(navigator) {
        const T = this.getSceneClass();
        return <T navigator={navigator} route={route} exerciseSelected={exerciseSelected} />;
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
  getMusclesRoute(muscleGroup, exerciseSelected) {
    return {
      getTitle() {
        return (muscleGroup && muscleGroup.name) || 'All Muscles';
      },
      renderScene(navigator) {
        return (
          <Muscles
            navigator={navigator}
            muscleGroup={muscleGroup}
            exerciseSelected={exerciseSelected}
          />
        );
      },
    };
  },
  getWorkoutExercises(workout) {
    const route = new class extends Route {
      getExtraActions() {
        return this.getSceneClass().extraActions;
      }
      getWorkout() {
        return workout;
      }
      getSceneClass() {
        return WorkoutExercises;
      }
      getTitle() {
        return workout.name;
      }
      renderScene(navigator) {
        const T = this.getSceneClass();
        return <T navigator={navigator} workout={workout} />;
      }
    }();
    return route;
  },
  getExercisesRoute(muscleGroup, muscle, exerciseSelected) {
    return {
      getTitle() {
        return (muscle && muscle.name) || (muscleGroup && muscleGroup.name) || 'All Exercises';
      },
      renderScene(navigator) {
        return (
          <Exercises
            navigator={navigator}
            muscleGroup={muscleGroup}
            muscle={muscle}
            exerciseSelected={exerciseSelected}
          />
        );
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
        return (
          <TabContainer
            ref={c => { this._tab_container = c; }}
            navigator={navigator}
            setTab={(title, extraActions) => this._setTab(title, extraActions)}
          />
        );
      },
      onDidFocus() {
        if (this._tab_container) {
          this._tab_container.onDidFocus();
        }
      },
      onWillBlur() {
        if (this._tab_container) {
          this._tab_container.onWillBlur();
        }
      },
    };
  },

  getHomeRouteForTab(T) {
    const route = new class extends Route {
      getSceneClass() {
        return T;
      }
      getTitle() {
        return T.title;
      }
    }();
    return route;
  },
};
