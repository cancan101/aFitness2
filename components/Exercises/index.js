import React, {
  Component,
  Image,
  Picker,
  Text,
  View,
} from 'react-native';

import Listitem from 'react-native-listitem';
import ListitemStyles from 'react-native-listitem/styles';
import { ListView } from 'realm/react-native';

import { MainRouter } from '../../routers';

import IMAGES from '../../constants/Images';


const FILTER_ALL = 'all';

import realm from '../../realm';


function loadData() {
  const muscleData = require('../../data/muscles.json');
  const exerciseData = require('../../data/exercises.json');

  const exercises = realm.objects('Exercise');
  const muscles = realm.objects('Muscle');

  const needsLoad = exerciseData.filter((i) => exercises.filtered(`id = "${i.id}"`).length == 0);
  realm.write(() => {
    Object.keys(muscleData).forEach(name => {
      const muscleGroup = realm.create('MuscleGroup', {name});
      Object.keys(muscleData[name].Muscle).forEach(name => realm.create('Muscle', {name, muscleGroup}));
    });

    needsLoad.forEach(ex => {
      const {MajorMuscles, SecondaryMuscles, image, description, difficulty, type, target1, target2, target3, ...data} = ex;

      const targets = [target1, target2, target3].filter(x => x);
      const muscleGroups = targets.map(x => realm.objects('MuscleGroup').filtered(`name =[c] "${x}"`)[0]);

      if(muscleGroups.filter(x => !x).length) {
        throw "Unknown target(s): " + targets;
      }

      const musclesMajor = Object.keys((MajorMuscles || {}).Muscle || {}).map(x => muscles.filtered(`name =[c] "${x}"`)[0]);
      const musclesSecondary = Object.keys((SecondaryMuscles || {}).Muscle || {}).map(x => muscles.filtered(`name =[c] "${x}"`)[0]);

      if(musclesMajor.filter(x => !x).length) {
        throw "Unknown muscle(s): " + Object.keys(MajorMuscles.Muscle);
      }

      if(musclesSecondary.filter(x => !x).length) {
        throw "Unknown muscle(s): " + Object.keys(SecondaryMuscles.Muscle);
      }

      realm.create('Exercise', {
        ...data,
        image,
        description,
        difficulty,
        type,
        muscleGroups,
        musclesMajor,
        musclesSecondary,
      });
    });
  });
}

export default class Exercises extends Component {
  static extraActions = [
    {title: 'Add', show: 'always', iconName: 'add',
      onSelected: (navigator) => {
        loadData();
        navigator.forceUpdate();
      }
    }
  ];

  constructor(props){
    super(props);
    this._ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      selectedMuscleGroup: FILTER_ALL,
      selectedMuscle: FILTER_ALL,
    };
  }

  _renderRow = (exercise) => {
    const route = MainRouter.getExerciseRoute(exercise);

    let image;
    if (exercise.image) {
      image = (
        <Image source={IMAGES[exercise.image]}
               style={{width: 40, height: 40, marginBottom: -15, marginTop: -15,}} />
      );
    } else {
      image = (
        <View style={{width: 40, height: 40, marginBottom: -15, marginTop: -15,}} />
      );
    }

    return (
      <Listitem
        onPress={ () => this.props.navigator.push(route) }
      >
        <View style={{flexDirection: 'row'}}>
          { image }
          <Text style={ListitemStyles.liText}>{exercise.name}</Text>
        </View>
      </Listitem>
    );
  };

  _selectMuscleGroup = (selectedMuscleGroup) =>{
    this.setState({
      selectedMuscleGroup: selectedMuscleGroup,
      selectedMuscle: FILTER_ALL,
    });
  };
  _selectMuscle = (selectedMuscle) => {
    this.setState({selectedMuscle: selectedMuscle});
  };
  _renderMuscleGroups = () => {
    return realm.objects('MuscleGroup').sorted('name').map(
      (k) =>
        <Picker.Item label={k.name} value={k.name} key={k.name} color={'black'} />
    );
  };
  _renderMuscles = () => {
    let muscles = realm.objects('Muscle');
    if(this.state.selectedMuscleGroup != FILTER_ALL) {
      muscles = muscles.filtered(`muscleGroup.name = "${this.state.selectedMuscleGroup}"`);
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
      <View style={{flex: 1}}>
        <Picker
          selectedValue={this.state.selectedMuscleGroup}
          onValueChange={this._selectMuscleGroup}
          >
          {[(<Picker.Item label={'All'} value={FILTER_ALL} key={FILTER_ALL} color={'red'} />), ...muscleGroupItems]}
        </Picker>
        <Picker
          selectedValue={this.state.selectedMuscle}
          onValueChange={this._selectMuscle}
          mode='dropdown'
          //enabled={this.state.selectedMuscleGroup != FILTER_ALL}
          >
          {[(<Picker.Item label={'All'} value={FILTER_ALL} key={FILTER_ALL} color={'red'} />), ...muscleItems]}
      </Picker>
    </View>
    );
  };

  render(){
    let exercisesFiltered = realm.objects('Exercise');
    if(this.state.selectedMuscle != FILTER_ALL) {
      exercisesFiltered = exercisesFiltered.filtered(
        `musclesMajor.name = "${this.state.selectedMuscle}" || musclesSecondary.name = "${this.state.selectedMuscle}"`
      );
    }else if(this.state.selectedMuscleGroup != FILTER_ALL) {
      exercisesFiltered = exercisesFiltered.filtered(`muscleGroups.name = "${this.state.selectedMuscleGroup}"`);
    }

    exercisesFiltered = exercisesFiltered.sorted('name');

    return (
      <ListView
        renderHeader={this._renderHeader}
        dataSource={this._ds.cloneWithRows(exercisesFiltered)}
        renderRow={this._renderRow} />
    );
  }
}
