import React, {
  Component,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import Listitem from 'react-native-listitem';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ListView } from 'realm/react-native';

import realm from '../../realm';
import IMAGES from '../../constants/Images';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class ExerciseInner extends Component {
  static extraActions = [{title: 'History', show: 'always', iconName: 'history', onSelected: () => {}, }];

  constructor(props) {
    super(props);
    this._ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {};
  }
  onSetItemPress(setItem) {
    this.setState({reps: String(setItem.reps), weightValue: String(setItem.weightValue)});
  }
  _renderRow = (setItem, sectionID, rowID) => {
    const setNum = this.props.item.length - rowID;
    // TODO: Make this a function:
    const text = `Set ${setNum}: ${setItem.reps} x ${setItem.weightValue}${setItem.weightUnits}`;
    return (
      <Listitem
        onPress={() => this.onSetItemPress(setItem)}
        text={text} />
    );
  };
  _canRecord() {
    return this.state.weightValue && this.state.reps;
  };
  _onChangeTextReps = (value) => {
    this.setState({reps: value});
  };
  _onChangeTextWeightValue = (value) => {
    this.setState({weightValue: value});
  };
  _recordBtnOnPress = () => {
    const recordDate = new Date();
    const workoutDate = new Date(Date.UTC(recordDate.getFullYear(), recordDate.getMonth(), recordDate.getDate()));

    realm.write(() => {
     realm.create('ActivitySet', {
       recordDate,
       workoutDate,
       exercise: this.props.exercise,
       reps: this.state.reps,
       weightValue: this.state.weightValue,
       weightUnits: 'lbs',
     });
    });
  };
  render(){
    const recordBtnExtras = {};
    if (!this._canRecord()) {
      recordBtnExtras['disabled'] = true;
      recordBtnExtras['backgroundColor'] = 'grey';
    }

    const recordBtn = (
      <Icon.Button name="queue" onPress={this._recordBtnOnPress} {...recordBtnExtras} >
        Record
      </Icon.Button>
    );

    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <TextInput
              keyboardType='numeric'
              placeholder='weight'
              style={{flex: 1, height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={this._onChangeTextWeightValue}
              value={this.state.weightValue}
            />
            <Text style={{alignSelf: 'center'}}>lbs</Text>
          </View>
          <TextInput
            keyboardType='numeric'
            placeholder='repetitions'
            style={{flex: 1, height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={this._onChangeTextReps}
            value={this.state.reps}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            { recordBtn }
          </View>
          <View style={{flex: 1}}>
            <Icon.Button name="timer">
              Timer
            </Icon.Button>
          </View>
        </View>
        <ListView
          //keyboardShouldPersistTaps={true}
          keyboardDismissMode={'interactive'}
          dataSource={this._ds.cloneWithRows(this.props.item.sorted('recordDate', true))}
          renderRow={this._renderRow}
        />
        <Image source={IMAGES[this.props.exercise.image]} style={{width: 80, height: 80}} />
      </View>
    );
  }
}

export default class Exercise extends Component {
  static extraActions = ExerciseInner.extraActions;
  constructor(props){
    super(props);
    this.state = {item: realm.objects('ActivitySet').filtered(`exercise.id = "${this.props.exercise.id}"`)};
  }
  render() {
    return <ExerciseInner {...this.props} item={this.state.item} />
  }
  onChange = () => {
    this.setState({item: this.state.item});
  };
  componentDidMount() {
    realm.addListener('change', this.onChange);
  }
  componentWillUnmount() {
    realm.removeListener('change', this.onChange);
  }
}
