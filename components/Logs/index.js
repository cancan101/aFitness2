import React, {
  Component,
  ListView,
  Text,
  View,
} from 'react-native';

import Listitem from 'react-native-listitem';

import { MainRouter } from '../../routers';

const LOGS = [{date: 'today'}];

export default class Logs extends Component {
  constructor(props) {
    super(props);
    this._ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  }

  _renderRow = (logEntry) => {
    const route = MainRouter.getLogRoute(logEntry);

    return (
      <Listitem
        text={logEntry.date}
        onPress={ () => this.props.navigator.push(route) }
      />
    );
  };

  render(){
    return (
      <ListView
        dataSource={this._ds.cloneWithRows(LOGS)}
        renderRow={this._renderRow} />
    );
  }
}
