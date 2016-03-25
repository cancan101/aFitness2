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

export default class Exercise extends Component {
  static extraActions = [{title: 'History', show: 'always', iconName: 'history',}];
  constructor(props) {
    super(props);
    this._ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  }
  _renderRow = setItem => {
    return <Listitem text={`${setItem.reps} x ${setItem.weight.value}${setItem.weight.units}`} />
  };
  render(){
    const sets = [
      {reps: 8, weight: {value: 10, units: 'lbs'}},
    ];
    return (
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <TextInput
              keyboardType='numeric'
              placeholder='weight'
              style={{flex: 1, height: 40, borderColor: 'gray', borderWidth: 1}}
            />
            <Text style={{alignSelf: 'center'}}>lbs</Text>
          </View>
          <TextInput
            keyboardType='numeric'
            placeholder='repetitions'
            style={{flex: 1, height: 40, borderColor: 'gray', borderWidth: 1}}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Icon.Button name="queue">
              Record
            </Icon.Button>
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
