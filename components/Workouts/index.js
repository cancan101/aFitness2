import React, {
  Component,
  View,
  Text,
} from 'react-native';

export default class Workouts extends Component {
  static extraActions = [{title: 'Add', show: 'always', iconName: 'add', onSelected: () => {}}];
  static title = 'Workouts';
  static iconName = 'playlist-play';

  render(){
    return (
      <View>
        <Text>Coming soon</Text>
      </View>
    );
  }
}
