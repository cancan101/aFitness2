import React, {
  Component,
} from 'react';
import {
  View,
  Image,
} from 'react-native';


import IMAGES from '../../constants/Images';


export default class ExerciseViewer extends Component {
  render() {
    return (
      <Image
        source={IMAGES[this.props.exercise.image || this.props.exercise.thumbnail]}
        style={{
          flex: 1,
          width: null,
          height: null,
        }}
        resizeMode={'contain'}
      />
    );
  }
}
