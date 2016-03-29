import React, {
  Component,
  Image,
  ListView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Listitem from 'react-native-listitem';

import Icon from 'react-native-vector-icons/MaterialIcons';


const sets = [
  {reps: 8, weight: {value: 10, units: 'lbs'}},
];


export default class Exercise extends Component {
  static extraActions = [{title: 'History', show: 'always', iconName: 'history',}];
  constructor(props) {
    super(props);
    this._ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {};
  }
  _renderRow = setItem => {
    return <Listitem text={`${setItem.reps} x ${setItem.weight.value}${setItem.weight.units}`} />
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
  render(){
    let recordBtn;
    if (this._canRecord()) {
      recordBtn = (
        <Icon.Button name="queue">
          Record
        </Icon.Button>
      );
    } else {
      recordBtn = (
        <Icon.Button name="queue" disabled={true} backgroundColor={'grey'}>
          Record
        </Icon.Button>
      );
    }
    return (
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <TextInput
              keyboardType='numeric'
              placeholder='weight'
              style={{flex: 1, height: 40, borderColor: 'gray', borderWidth: 1}}
              onChangeText={this._onChangeTextWeightValue}
            />
            <Text style={{alignSelf: 'center'}}>lbs</Text>
          </View>
          <TextInput
            keyboardType='numeric'
            placeholder='repetitions'
            style={{flex: 1, height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={this._onChangeTextReps}
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
          dataSource={this._ds.cloneWithRows(sets)}
          renderRow={this._renderRow}
        />
        <Image source={this.props.exercise.image} style={{width: 80, height: 80}} />
      </View>
    );
  }
}
