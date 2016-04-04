import React, {
  Text,
  TouchableOpacity,
} from 'react-native';

import ExNavigator from '@exponent/react-native-navigator';

import Exercise from '../components/Exercise';
import Log from '../components/Log';
import Main from '../components/Main';
import { getDateString } from '../utils';

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
        return getDateString(logEntry.workoutDate);
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
