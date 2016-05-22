import React, {
  Component,
} from 'react';

import uuid from 'uuid';
import { ListView } from 'realm/react-native';
import Listitem from 'react-native-listitem';

import prompt from '../utils/prompt';
import realm from '../../realm';
import { MainRouter } from '../../routers';


export default class Workouts extends Component {
  static propTypes = {
    navigator: React.PropTypes.object.isRequired,
  };

  static extraActions = [
    {
      title: 'Add',
      show: 'always',
      iconName: 'add',
      onSelected: navigator => {
        prompt(
          'New Workout',
          'Workout name:',
          [
            { style: 'cancel', text: 'Cancel' },
            {
              style: 'default', text: 'Save',
              onPress: (value) => {
                if (value) {
                  realm.write(() => {
                    realm.create('Workout', {
                      id: uuid.v4(),
                      name: value,
                    });
                  });
                  navigator.forceUpdate();
                }
              },
            },
          ],
          'plain-text',
        );
      },
    },
  ];
  static title = 'Workouts';
  static iconName = 'playlist-play';

  constructor(props) {
    super(props);
    this._ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }

  _renderRow = workout => (
    <Listitem
      text={workout.name}
      onPress={() => this.props.navigator.push(MainRouter.getWorkoutExercises(workout))}
    />
  );

  render() {
    const data = realm.objects('Workout').sorted('name');
    return (
      <ListView
        enableEmptySections
        automaticallyAdjustContentInsets={false}
        dataSource={this._ds.cloneWithRows(data)}
        renderRow={this._renderRow}
      />
    );
  }
}
