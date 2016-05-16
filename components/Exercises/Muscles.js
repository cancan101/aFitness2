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
  };

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    const muscles = getMusclesFiltered(this.props.muscleGroup);
    this._dataSource = ds.cloneWithRows(muscles);
  }

  gotoExercises = muscle => {
    const route = MainRouter.getExercisesRoute(this.props.muscleGroup, muscle);
    this.props.navigator.push(route);
  };

  _renderRow = muscle => (
    <Listitem text={muscle.name} onPress={() => this.gotoExercises(muscle)} />);

  _renderHeader = () => (
    <Listitem text="All Exercises" onPress={() => this.gotoExercises(null)} backgroundColor="#EEEE" />);

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this._dataSource}
        renderRow={this._renderRow}
        renderHeader={this._renderHeader}
      />
    );
  }
}
