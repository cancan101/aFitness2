import React, {
  Component,
} from 'react';

import { ListView } from 'realm/react-native';
import Listitem from 'react-native-listitem';

import { MainRouter } from '../../routers';
import { getMusclesFiltered } from './filters';


export default class Muscles extends Component {
  static propTypes = {
    navigator: React.PropTypes.object.isRequired,
    muscleGroup: React.PropTypes.object,
    exerciseSelected: React.PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this._ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  }

  gotoExercises = muscle => {
    const route = MainRouter.getExercisesRoute(
      this.props.muscleGroup, muscle, this.props.exerciseSelected);
    this.props.navigator.push(route);
  };

  _renderRow = muscle => (
    <Listitem text={muscle.name} onPress={() => this.gotoExercises(muscle)} />);

  _renderHeader = () => (
    <Listitem
      text="All Exercises"
      onPress={() => this.gotoExercises(null)}
      backgroundColor="#EEEE"
    />
  );

  render() {
    const muscles = getMusclesFiltered(this.props.muscleGroup);
    const dataSource = this._ds.cloneWithRows(muscles);

    return (
      <ListView
        enableEmptySections
        dataSource={dataSource}
        renderRow={this._renderRow}
        renderHeader={this._renderHeader}
      />
    );
  }
}
