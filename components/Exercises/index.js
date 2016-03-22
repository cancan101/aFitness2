import React, {
  Component,
  Image,
  ListView,
  Picker,
  Text,
  View,
} from 'react-native';

import Listitem from 'react-native-listitem';
import ListitemStyles from 'react-native-listitem/styles';
import sortBy from 'lodash/sortBy';

import { MainRouter } from '../../routers';

import MUSCLE_GROUPS from '../../constants/MuscleGroups';
import MUSCLES from '../../constants/Muscles';
import EXERCISES from '../../constants/Exercises';


export default class Exercises extends Component {
  static extraActions = [
    {title: 'Add', show: 'always', iconName: 'add',}
  ];

  constructor(props){
    super(props);
    this._ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      selectedMuscleGroup: 'all',
      selectedMuscle: 'all',
    };
  }

  _renderRow = (exercise) => {
    const route = MainRouter.getExerciseRoute(exercise);

    return (
      <Listitem
        onPress={ () => this.props.navigator.push(route) }
      >
        <View style={{flexDirection: 'row'}}>
          <Image source={exercise.image}
                 style={{width: 40, height: 40, marginBottom: -15, marginTop: -15,}} />
          <Text style={ListitemStyles.liText}>{exercise.name}</Text>
        </View>
      </Listitem>
    );
  };

  _selectMuscleGroup = (selectedMuscleGroup) =>{
    this.setState({
      selectedMuscleGroup: selectedMuscleGroup,
      selectedMuscle: 'all',
    });
  };
  _selectMuscle = (selectedMuscle) => {
    this.setState({selectedMuscle: selectedMuscle});
  };
  _renderMuscleGroups = () => {
    return sortBy(MUSCLE_GROUPS, i => i.name).map(
      (k) =>
        <Picker.Item label={k.name} value={k.id} key={k.id} color={'black'} />
    );
  };
  _renderMuscles = () => {
    let muscles;
    if(this.state.selectedMuscleGroup != 'all') {
      muscles = MUSCLES.filter(
        m => m.muscleGroup === this.state.selectedMuscleGroup);
    } else {
      muscles = MUSCLES;
    }

    return sortBy(muscles, i => i.name).map(
      (k) =>
        <Picker.Item label={k.name} value={k.id} key={k.id} color={'black'} />
    );
  };
  _renderHeader = () => {
    const muscleGroupItems = this._renderMuscleGroups();
    const muscleItems = this._renderMuscles();

    return (
      <View style={{flex: 1}}>
        <Picker
          selectedValue={this.state.selectedMuscleGroup}
          onValueChange={this._selectMuscleGroup}
          >
          {[(<Picker.Item label={'All'} value={'all'} key={'all'} color={'red'} />), ...muscleGroupItems]}
        </Picker>
        <Picker
          selectedValue={this.state.selectedMuscle}
          onValueChange={this._selectMuscle}
          mode='dropdown'
          //enabled={this.state.selectedMuscleGroup != 'all'}
          >
          {[(<Picker.Item label={'All'} value={'all'} key={'all'} color={'red'} />), ...muscleItems]}
      </Picker>
    </View>
    );
  };

  render(){
    let exercisesFiltered = EXERCISES;
    if(this.state.selectedMuscle != 'all') {
      exercisesFiltered = EXERCISES.filter(
        ex => ex.muscles.filter(
          m => m.muscle_id === this.state.selectedMuscle).length > 0);
    }else if(this.state.selectedMuscleGroup != 'all') {
      exercisesFiltered = EXERCISES.filter(
        ex => ex.muscle_groups.filter(
          mg => mg.musclegroup_id === this.state.selectedMuscleGroup).length > 0);
    }

    exercisesFiltered = sortBy(exercisesFiltered, ex => ex.name);

    return (
      <ListView
        renderHeader={this._renderHeader}
        dataSource={this._ds.cloneWithRows(exercisesFiltered)}
        renderRow={this._renderRow} />
    );
  }
}