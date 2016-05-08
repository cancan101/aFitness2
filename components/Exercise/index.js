import React, {
  Component,
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

import realm from '../../realm';
import IMAGES from '../../constants/Images';
import { getToday } from '../../utils';
import { MainRouter } from '../../routers';

import PushNotification from 'react-native-push-notification';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const ACTION_ITEM_SELECTED = 'itemSelected';


class ExerciseInner extends Component {
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
  };

  constructor(props) {
    super(props);
    this._ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      weightValue: String(this.props.weightValue || ''),
      reps: String(this.props.reps || ''),
    };
  }
  onSetItemPress(setItem) {
    this.setState({ reps: String(setItem.reps), weightValue: String(setItem.weightValue) });
  }
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
  _canRecord() {
    return this.state.weightValue && this.state.reps;
  }
  _onChangeTextReps = (value) => {
    this.setState({ reps: value });
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
        recordDate,
        workoutDate,
        exercise: this.props.exercise,
        reps: parseInt(this.state.reps, 10),
        weightValue: parseFloat(this.state.weightValue),
        weightUnits: 'lbs',
      });
    });
  };
  sendNotification = () => {
    const sendAt = new Date().getTime() + 5000;
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
      if (this.timer && this.state.sendAt && this.state.sendAt <= new Date().getTime()) {
        clearInterval(this.timer);
        this.timer = null;
      }
      this.forceUpdate();
    }, 100);
  };
  onTimerClick = () => {
    if (this.state.sendAt && this.state.sendAt >= new Date().getTime()) {
      PushNotification.cancelAllLocalNotifications();
      this.state.sendAt = null;
    } else {
      this.sendNotification();
    }
  };
  _deleteSetItem(setItem) {
    realm.write(() => {
      realm.delete(setItem);
    });
  }
  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
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
      timerText = 'Timer';
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
            <Icon.Button name="timer" onPress={this.onTimerClick}>
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

export default class Exercise extends Component {
  static extraActions = ExerciseInner.extraActions;

  static propTypes = ExerciseInner.propTypes;

  constructor(props) {
    super(props);
    this.state = {
      item: realm.objects('ActivitySet').filtered(
        'exercise == $0 && workoutDate == $1', this.props.exercise, getToday()),
    };
  }
  render() {
    return <ExerciseInner {...this.props} item={this.state.item} />;
  }
  onChange = () => {
    this.setState({ item: this.state.item });
  };
  componentDidMount() {
    realm.addListener('change', this.onChange);
  }
  componentWillUnmount() {
    realm.removeListener('change', this.onChange);
  }
}
