import React, {
} from 'react-native';


import Exercise from '../components/Exercise';
import Log from '../components/Log';
import Main from '../components/Main';


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
  getLogRoute(logEntry) {
    return {
      getTitle(){
        return logEntry.date;
      },
      getSceneClass() {
        return Log;
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
    };
  },
};
