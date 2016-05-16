import React, {
  Component,
} from 'react';
import {
  Alert,
} from 'react-native';

import MuscleGroups from './MuscleGroups';


export default class Exercises extends Component {
  static extraActions = [
    {
      title: 'Add', show: 'always', iconName: 'add',
      onSelected: () => {
        Alert.alert('Not implemented', 'Adding new exercises is not implemented');
      },
    },
  ];
  static title = 'Exercises';
  static iconName = 'view-carousel';

  static propTypes = {
    ...MuscleGroups.propTypes,
  };

  render() {
    return (
      <MuscleGroups {...this.props} />
    );
  }
}
