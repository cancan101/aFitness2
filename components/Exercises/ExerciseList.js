import React, {
  Component,
} from 'react';

import { ListView } from 'realm/react-native';

import ExerciseListItem from './ExerciseListItem';


export default class ExerciseList extends Component {
  static propTypes = {
    navigator: React.PropTypes.object.isRequired,
    renderHeader: React.PropTypes.func.isRequired,
    // ListView.propTypes.renderHeader, awaiting: https://github.com/realm/realm-js/issues/377
    dataSource: ListView.propTypes.dataSource,
  };

  _renderRow = exercise => (
    <ExerciseListItem exercise={exercise} navigator={this.props.navigator} />);

  render() {
    return (
      <ListView
        enableEmptySections
        renderHeader={this.props.renderHeader}
        dataSource={this.props.dataSource}
        renderRow={this._renderRow}
      />
    );
  }
}
