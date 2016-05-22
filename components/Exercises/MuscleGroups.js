import React, {
  Component,
} from 'react';

import { ListView } from 'realm/react-native';
import Listitem from 'react-native-listitem';

import realm from '../../realm';
import { MainRouter } from '../../routers';


export default class MuscleGroups extends Component {
  static propTypes = {
    navigator: React.PropTypes.object.isRequired,
    exerciseSelected: React.PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this._dataSource = ds.cloneWithRows(realm.objects('MuscleGroup').sorted('name'));
  }

  gotoExecisesMuscleGroup = muscleGroup => {
    const route = MainRouter.getMusclesRoute(muscleGroup, this.props.exerciseSelected);
    this.props.navigator.push(route);
  };

  _renderRow = muscleGroup => (
    <Listitem text={muscleGroup.name} onPress={() => this.gotoExecisesMuscleGroup(muscleGroup)} />);

  _renderHeader = () => (
    <Listitem
      text="All Muscles"
      onPress={() => this.gotoExecisesMuscleGroup(null)}
      backgroundColor="#EEEE"
    />
  );

  render() {
    return (
      <ListView
        automaticallyAdjustContentInsets={false}
        enableEmptySections
        dataSource={this._dataSource}
        renderRow={this._renderRow}
        renderHeader={this._renderHeader}
      />
    );
  }
}
