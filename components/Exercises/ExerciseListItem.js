import React from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';

import Listitem from 'react-native-listitem';
import ListitemStyles from 'react-native-listitem/styles';

import IMAGES from '../../constants/Images';
import styles from './styles';


export default class ExerciseListItem extends React.Component {
  static propTypes = {
    exercise: React.PropTypes.object.isRequired,
    navigator: React.PropTypes.object.isRequired,
    exerciseSelected: React.PropTypes.func.isRequired,
    onLongPress: React.PropTypes.func,
  };
  render() {
    const { exercise, navigator, exerciseSelected, onLongPress } = this.props;
    let thumbnail;
    if (exercise.thumbnail) {
      thumbnail = (
        <Image
          source={IMAGES[exercise.thumbnail]}
          style={styles.listItemImage}
        />
      );
    } else {
      thumbnail = (
        <View
          style={styles.listItemImage}
        />
      );
    }

    return (
      <Listitem
        onPress={() => exerciseSelected(exercise, navigator)}
        onLongPress={onLongPress}
      >
        <View style={{ flexDirection: 'row' }}>
          {thumbnail}
          <Text style={ListitemStyles.liText}>{exercise.name}</Text>
        </View>
      </Listitem>
    );
  }
}
