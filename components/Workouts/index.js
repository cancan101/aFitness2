import React, {
  Component,
  View,
  Text,
} from 'react-native';

export default class Workouts extends Component {
  static extraActions = [{title: 'Add', show: 'always', iconName: 'add',}];
  static title = 'Workouts';
  static systemIcon = 'most-viewed';

  render(){
    return (
      <View>
        <Text>Alex</Text>
      </View>
    );
  }
}
