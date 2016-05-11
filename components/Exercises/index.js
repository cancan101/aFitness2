import React, {
  Component,
} from 'react';
import {
  Alert,
  Image,
  Picker,
  Text,
  View,
} from 'react-native';

import PureRenderMixin from 'react-addons-pure-render-mixin';
import Listitem from 'react-native-listitem';
import ListitemStyles from 'react-native-listitem/styles';
import { ListView } from 'realm/react-native';

import { MainRouter } from '../../routers';

import IMAGES from '../../constants/Images';
import realm from '../../realm';


const FILTER_ALL = 'all';


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

  _renderRow = (exercise) => {
    const route = MainRouter.getExerciseRoute(exercise);

    let image;
    if (exercise.image) {
      image = (
        <Image
          source={IMAGES[exercise.image]}
          style={{ width: 40, height: 40, marginBottom: -15, marginTop: -15 }}
        />
      );
    } else {
      image = (
        <View
          style={{ width: 40, height: 40, marginBottom: -15, marginTop: -15 }}
        />
      );
    }

    return (
      <Listitem
        onPress={() => this.props.navigator.push(route)}
      >
        <View style={{ flexDirection: 'row' }}>
          {image}
          <Text style={ListitemStyles.liText}>{exercise.name}</Text>
        </View>
      </Listitem>
    );
  };

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
    let muscles = realm.objects('Muscle');
    if (this.state.selectedMuscleGroup !== FILTER_ALL) {
      muscles = muscles.filtered('muscleGroup.name = $0', this.state.selectedMuscleGroup);
    }

    return muscles.sorted('name').map(
      (k) =>
        <Picker.Item label={k.name} value={k.name} key={k.name} color={'black'} />
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
    let exercisesFiltered = realm.objects('Exercise');
    if (this.state.selectedMuscle !== FILTER_ALL) {
      exercisesFiltered = exercisesFiltered.filtered(
        'musclesMajor.name = $0 || musclesSecondary.name = $0',
        this.state.selectedMuscle,
      );
    } else if (this.state.selectedMuscleGroup !== FILTER_ALL) {
      exercisesFiltered = exercisesFiltered.filtered(
        'muscleGroups.name = $0', this.state.selectedMuscleGroup);
    }

    exercisesFiltered = exercisesFiltered.sorted('name');

    return (
      <ListView
        enableEmptySections
        renderHeader={this._renderHeader}
        dataSource={this._ds.cloneWithRows(exercisesFiltered)}
        renderRow={this._renderRow}
      />
    );
  }
}
