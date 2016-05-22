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


function ExerciseListItem({ exercise, navigator, exerciseSelected }) {
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
      onPress={() => exerciseSelected(exercise, navigator)}
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
  exerciseSelected: React.PropTypes.func.isRequired,
};


export default ExerciseListItem;
