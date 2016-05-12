import React from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';

import Listitem from 'react-native-listitem';
import ListitemStyles from 'react-native-listitem/styles';

import { MainRouter } from '../../routers';
import IMAGES from '../../constants/Images';
import styles from './styles';


function ExerciseListItem({ exercise, navigator }) {
  const route = MainRouter.getExerciseRoute(exercise);

  let image;
  if (exercise.image) {
    image = (
      <Image
        source={IMAGES[exercise.image]}
        style={styles.listItemImage}
      />
    );
  } else {
    image = (
      <View
        style={styles.listItemImage}
      />
    );
  }

  return (
    <Listitem
      onPress={() => navigator.push(route)}
    >
      <View style={{ flexDirection: 'row' }}>
        {image}
        <Text style={ListitemStyles.liText}>{exercise.name}</Text>
      </View>
    </Listitem>
  );
}

ExerciseListItem.propTypes = {
  exercise: React.PropTypes.object.isRequired,
  navigator: React.PropTypes.object.isRequired,
};


export default ExerciseListItem;
