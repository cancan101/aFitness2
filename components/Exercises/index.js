import React, {
  Component,
} from 'react';
import {
  Alert,
  Picker,
  View,
} from 'react-native';

import PureRenderMixin from 'react-addons-pure-render-mixin';
import { ListView } from 'realm/react-native';

import realm from '../../realm';
import ExerciseList from './ExerciseList';


const FILTER_ALL = 'all';


function getExercisesFiltered(selectedMuscle, selectedMuscleGroup) {
  let exercisesFiltered = realm.objects('Exercise');
  if (selectedMuscle !== FILTER_ALL) {
    exercisesFiltered = exercisesFiltered.filtered(
      'musclesMajor.name = $0 || musclesSecondary.name = $0',
      selectedMuscle,
    );
  } else if (selectedMuscleGroup !== FILTER_ALL) {
    exercisesFiltered = exercisesFiltered.filtered(
      'muscleGroups.name = $0', selectedMuscleGroup);
  }

  exercisesFiltered = exercisesFiltered.sorted('name');
  return exercisesFiltered;
}


function getMusclesFiltered(selectedMuscleGroup) {
  let muscles = realm.objects('Muscle');
  if (selectedMuscleGroup !== FILTER_ALL) {
    muscles = muscles.filtered('muscleGroup.name = $0', selectedMuscleGroup);
  }

  return muscles.sorted('name');
}


export default class Exercises extends Component {
  static extraActions = [
    {
      title: 'Add', show: 'always', iconName: 'add',
      onSelected: () => {
        Alert.alert('Not implemented', 'Adding new exercises is not implemented');
      },
    },
  ];
  static title = 'Exercises';
  static iconName = 'view-carousel';

  static propTypes = {
    navigator: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this._ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      selectedMuscleGroup: FILTER_ALL,
      selectedMuscle: FILTER_ALL,
    };
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  _selectMuscleGroup = (selectedMuscleGroup) => {
    this.setState({
      selectedMuscleGroup,
      selectedMuscle: FILTER_ALL,
    });
  };
  _selectMuscle = (selectedMuscle) => {
    this.setState({ selectedMuscle });
  };
  _renderMuscleGroups = () => realm.objects('MuscleGroup').sorted('name').map(
    k => <Picker.Item label={k.name} value={k.name} key={k.name} color={'black'} />
  );
  _renderMuscles = () => {
    const muscles = getMusclesFiltered(this.state.selectedMuscleGroup);
    return muscles.map(
      k => <Picker.Item label={k.name} value={k.name} key={k.name} color={'black'} />
    );
  };
  _renderHeader = () => {
    const muscleGroupItems = this._renderMuscleGroups();
    const muscleItems = this._renderMuscles();
    return (
      <View style={{ flex: 1 }}>
        <Picker
          selectedValue={this.state.selectedMuscleGroup}
          onValueChange={this._selectMuscleGroup}
          mode="dropdown"
        >
          {[
            <Picker.Item label={'All'} value={FILTER_ALL} key={FILTER_ALL} color={'red'} />,
            ...muscleGroupItems,
          ]}
        </Picker>
        <Picker
          selectedValue={this.state.selectedMuscle}
          onValueChange={this._selectMuscle}
          mode="dropdown"
        >
          {[
            <Picker.Item label={'All'} value={FILTER_ALL} key={FILTER_ALL} color={'red'} />,
            ...muscleItems,
          ]}
        </Picker>
      </View>
    );
  };

  render() {
    const { selectedMuscle, selectedMuscleGroup } = this.state;
    const exercisesFiltered = getExercisesFiltered(selectedMuscle, selectedMuscleGroup);

    return (
      <ExerciseList
        {...this.props}
        renderHeader={this._renderHeader}
        dataSource={this._ds.cloneWithRows(exercisesFiltered)}
      />
    );
  }
}
