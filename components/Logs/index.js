import React, {
  Component,
  ListView,
  Text,
  View,
} from 'react-native';

import Listitem from 'react-native-listitem';
import { liText } from 'react-native-listitem/styles';


import groupBy from 'lodash/groupBy';
import sortBy from 'lodash/sortBy';
import uniqBy from 'lodash/uniqBy';
import map from 'lodash/map';

import { MainRouter } from '../../routers';
import realm from '../../realm';
import { getDateString } from '../../utils';
import prompt from '../utils/prompt';
import { loadActivitiesFromUrl } from './utils';

export default class Logs extends Component {
  static extraActions = [
    {
      title: 'Add',
      show: 'always',
      iconName: 'add',
      onSelected: (navigator) => {
        prompt(
          'Load Activities',
          'Enter URL to activities JSON',
          [
            {style: 'cancel', text: 'Cancel'},
            {
              style: 'default', text: 'Load',
              onPress: (url) => {
                if(url) {
                  loadActivitiesFromUrl(url)
                    .then(() => navigator.forceUpdate())
                    .catch(() => alert(`Unable to load: ${url}.`));
                }
              }
            },
          ],
          'plain-text',
        )
      }
    }
  ];
  static title = 'Logs';
  static systemIcon = 'history';

  constructor(props) {
    super(props);
    this._ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  }

  _renderRow = (logEntry) => {
    const route = MainRouter.getLogWorkoutDateRoute(logEntry);
    const { workoutDate, setCount, exerciseCount} = logEntry;
    const workoutDateLocalStr = getDateString(workoutDate);

    return (
      <Listitem
        onPress={ () => this.props.navigator.push(route) }
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={liText}>{workoutDateLocalStr}</Text>
          <Text style={liText}>{`Sets: ${setCount} Exercises: ${exerciseCount}`}</Text>
        </View>
      </Listitem>
    );
  };

  render(){
    const logs = sortBy(map(
      groupBy(realm.objects('ActivitySet'), 'workoutDate'),
      (v, workoutDate) => ({
        workoutDate: v[0].workoutDate,
        setCount: v.length,
        exerciseCount: uniqBy(v, 'exercise.id').length
      })
    ), 'workoutDate').reverse();
    return (
      <ListView
        enableEmptySections
        dataSource={this._ds.cloneWithRows(logs)}
        renderRow={this._renderRow} />
    );
  }
}
