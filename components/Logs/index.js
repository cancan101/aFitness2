import React, {
  Component,
} from 'react';
import {
  Alert,
  ListView,
  Text,
  View,
} from 'react-native';

import PureRenderMixin from 'react-addons-pure-render-mixin';
import Listitem from 'react-native-listitem';
import { liText } from 'react-native-listitem/styles';
import groupBy from 'lodash/groupBy';
import sortBy from 'lodash/sortBy';
import uniqBy from 'lodash/uniqBy';
import map from 'lodash/map';
import omit from 'lodash/omit';

import { MainRouter } from '../../routers';
import realm from '../../realm';
import { getDateString } from '../../utils';
import prompt from '../utils/prompt';
import { loadActivitiesFromUrl } from './utils';


class LogsInner extends Component {
  static extraActions = [
    {
      title: 'Add',
      show: 'always',
      iconName: 'add',
      onSelected: () => {
        prompt(
          'Load Activities',
          'Enter URL to activities JSON',
          [
            { style: 'cancel', text: 'Cancel' },
            {
              style: 'default', text: 'Load',
              onPress: (url) => {
                if (url) {
                  loadActivitiesFromUrl(url)
                    .catch(() => Alert.alert('Error loading', `Unable to load: ${url}.`));
                }
              },
            },
          ],
          'plain-text',
        );
      },
    },
  ];
  static title = 'Logs';
  static iconName = 'history';

  static propTypes = {
    navigator: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this._ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }

  _renderRow = (logEntry) => {
    const route = MainRouter.getLogWorkoutDateRoute(logEntry);
    const { workoutDate, setCount, exerciseCount } = logEntry;
    const workoutDateLocalStr = getDateString(workoutDate);

    return (
      <Listitem
        onPress={() => this.props.navigator.push(route)}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={liText}>{workoutDateLocalStr}</Text>
          <Text style={liText}>{`Sets: ${setCount} Exercises: ${exerciseCount}`}</Text>
        </View>
      </Listitem>
    );
  };

  render() {
    const logs = sortBy(map(
      groupBy(this.props.item, 'workoutDate'),
      v => ({
        workoutDate: v[0].workoutDate,
        setCount: v.length,
        exerciseCount: uniqBy(v, 'exercise.id').length,
      })
    ), 'workoutDate').reverse();
    return (
      <ListView
        enableEmptySections
        dataSource={this._ds.cloneWithRows(logs)}
        renderRow={this._renderRow}
      />
    );
  }
}

export default class Logs extends Component {
  static extraActions = LogsInner.extraActions;
  static title = LogsInner.title;
  static iconName = LogsInner.iconName;

  static propTypes = omit(LogsInner.propTypes, ['item']);

  constructor(props) {
    super(props);
    this.state = {
      item: realm.objects('ActivitySet'),
      count: 0,
    };
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  componentDidMount() {
    realm.addListener('change', this.onChange);
  }
  componentWillUnmount() {
    realm.removeListener('change', this.onChange);
  }
  onChange = () => {
    this.setState({ item: this.state.item, count: this.state.count + 1 });
  };
  render() {
    return <LogsInner {...this.props} item={this.state.item} />;
  }
}
