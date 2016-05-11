import React, {
  Component,
} from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';

import PureRenderMixin from 'react-addons-pure-render-mixin';
import Listitem from 'react-native-listitem';
import ListitemStyles from 'react-native-listitem/styles';
import { ListView } from 'realm/react-native';

import { MainRouter } from '../../routers';

import IMAGES from '../../constants/Images';


export default class ExerciseList extends Component {
  static propTypes = {
    navigator: React.PropTypes.object.isRequired,
    renderHeader: React.PropTypes.func.isRequired,
    // ListView.propTypes.renderHeader, awaiting: https://github.com/realm/realm-js/issues/377
    dataSource: ListView.propTypes.dataSource,
  };

  constructor(props) {
    super(props);
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
