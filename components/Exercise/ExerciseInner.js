import React, {
  Component,
} from 'react';
import {
  AsyncStorage,
  Image,
  StyleSheet,
  Text,
  TextInput,
  UIManager,
  findNodeHandle,
  View,
} from 'react-native';

import Listitem from 'react-native-listitem';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ListView } from 'realm/react-native';
import uuid from 'node-uuid';

import realm from '../../realm';
import IMAGES from '../../constants/Images';
import { MainRouter } from '../../routers';
import prompt from '../utils/prompt';


import PushNotification from 'react-native-push-notification';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const ACTION_ITEM_SELECTED = 'itemSelected';

const SET_REST_TIME_DEFAULT = 5;


export default class ExerciseInner extends Component {
  static extraActions = [
    {
      title: 'History',
      show: 'always',
      iconName: 'history',
      onSelected: (navigator, route) => {
        const newRoute = MainRouter.getLogExerciseRoute(route._exercise.props.exercise);
        navigator.push(newRoute);
      },
    }];

  static propTypes = {
    weightValue: React.PropTypes.number,
    reps: React.PropTypes.number,
    exercise: React.PropTypes.object.isRequired,
    item: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this._ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      weightValue: String(this.props.weightValue || ''),
      reps: String(this.props.reps || ''),
    };
  }
  componentDidMount() {
    AsyncStorage.getItem('SET_REST_TIME').then(
      v => this.setState({ setRestTime: parseInt(v, 10) || SET_REST_TIME_DEFAULT })
    );
  }
  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
  onSetItemPress(setItem) {
    this.setState({ reps: String(setItem.reps), weightValue: String(setItem.weightValue) });
  }
  onTimerClick = () => {
    if (this.state.sendAt && this.state.sendAt >= new Date().getTime()) {
      PushNotification.cancelAllLocalNotifications();
      this.state.sendAt = null;
    } else {
      this.sendNotification();
    }
  };
  onTimeLongPress = () => {
    prompt(
      'Set Rest Time',
      'Enter set rest time in seconds',
      [
        { style: 'cancel', text: 'Cancel' },
        {
          style: 'default', text: 'Okay',
          onPress: (value) => {
            if (value) {
              const setRestTime = parseInt(value, 10);
              this.setState({ setRestTime });
              AsyncStorage.setItem('SET_REST_TIME', String(setRestTime));
            }
          },
        },
      ],
      'plain-text',
      String(this.state.setRestTime),
    );
  };
  sendNotification = () => {
    const sendAt = new Date().getTime() + this.state.setRestTime * 1000;
    PushNotification.localNotificationSchedule({
      id: '0',
      message: `Select to return to ${this.props.exercise.name}`,
      title: 'Rest After Exercise Complete',
      ticker: 'Rest Complete',
      smallIcon: 'drawable/ic_sync',
      sendAt: sendAt.toString(),
    });
    this.setState({ sendAt });
    this.timer = setInterval(() => {
      if (this.timer &&
        (!this.state.sendAt || (this.state.sendAt && this.state.sendAt <= new Date().getTime()))) {
        clearInterval(this.timer);
        this.timer = null;
      }
      this.setState({ currentTime: new Date().getTime() });
    }, 100);
  };
  _onChangeTextWeightValue = (value) => {
    this.setState({ weightValue: value });
  };
  _recordBtnOnPress = () => {
    const recordDate = new Date();
    const workoutDate = new Date(
      Date.UTC(recordDate.getFullYear(), recordDate.getMonth(), recordDate.getDate()));

    realm.write(() => {
      realm.create('ActivitySet', {
        id: uuid.v4(),
        recordDate,
        workoutDate,
        exercise: this.props.exercise,
        reps: parseInt(this.state.reps, 10),
        weightValue: parseFloat(this.state.weightValue),
        weightUnits: 'lbs',
      });
    });
  };
  _canRecord() {
    return this.state.weightValue && this.state.reps;
  }
  _onChangeTextReps = (value) => {
    this.setState({ reps: value });
  };
  _renderRow = (setItem, sectionID, rowID) => {
    const setNum = this.props.item.length - rowID;
    // TODO: Make this a function:
    const text = `Set ${setNum}: ${setItem.reps} x ${setItem.weightValue}${setItem.weightUnits}`;
    const refs = {};
    return (
      <Listitem
        ref={c => { refs.item = c; }}
        onPress={() => this.onSetItemPress(setItem)}
        onLongPress={() => {
          UIManager.showPopupMenu(
            findNodeHandle(refs.item),
            ['Delete'],
            () => {}, // error
            action => {
              if (action === ACTION_ITEM_SELECTED) {
                this._deleteSetItem(setItem);
              }
            }, // success
          );
        }}
        text={text}
      />
    );
  };
  _deleteSetItem(setItem) {
    realm.write(() => {
      realm.delete(setItem);
    });
  }
  render() {
    const recordBtnExtras = {};
    if (!this._canRecord()) {
      recordBtnExtras.disabled = true;
      recordBtnExtras.backgroundColor = 'grey';
    }

    const recordBtn = (
      <Icon.Button name="queue" onPress={this._recordBtnOnPress} {...recordBtnExtras} >
        Record
      </Icon.Button>
    );

    const data = this.props.item.sorted('recordDate', true);
    let listView = null;
    if (data.length) {
      listView = (
        <ListView
          enableEmptySections
          keyboardDismissMode={'interactive'}
          dataSource={this._ds.cloneWithRows(data)}
          renderRow={this._renderRow}
        />
      );
    } else {
      listView = <View style={{ flex: 1 }}><Text>No Exercises for Today</Text></View>;
    }

    let timerText;
    if (this.state.sendAt && this.state.sendAt >= new Date().getTime()) {
      timerText = `${Math.ceil((this.state.sendAt - new Date().getTime()) / 1000)}`;
    } else {
      if (this.state.setRestTime) {
        timerText = String(this.state.setRestTime);
      } else {
        timerText = 'Timer';
      }
    }

    return (
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <TextInput
              keyboardType="numeric"
              placeholder="weight"
              style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1 }}
              onChangeText={this._onChangeTextWeightValue}
              value={this.state.weightValue}
            />
            <Text style={{ alignSelf: 'center' }}>lbs</Text>
          </View>
          <TextInput
            keyboardType="numeric"
            placeholder="repetitions"
            style={{ flex: 1, height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={this._onChangeTextReps}
            value={this.state.reps}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            {recordBtn}
          </View>
          <View style={{ flex: 1 }}>
            <Icon.Button
              name="timer"
              onPress={this.onTimerClick}
              onLongPress={this.onTimeLongPress}
            >
              {timerText}
            </Icon.Button>
          </View>
        </View>
        {listView}
        <Image source={IMAGES[this.props.exercise.image]} style={{ width: 80, height: 80 }} />
      </View>
    );
  }
}
