import React, {
  Component,
  TabBarIOS,
} from 'react-native';

import Exercises from '../Exercises';
import Workouts from '../Workouts';
import Logs from '../Logs';


const TABS = [Exercises, Workouts, Logs, ];
const INITIAL_PAGE = 0;


export default class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {selectedTab: INITIAL_PAGE};
  }

  componentDidMount() {
    this.props.setTab(TABS[INITIAL_PAGE].title, TABS[INITIAL_PAGE].extraActions || []);
  }

  _setTab = (selectedTab) => {
    this.setState({selectedTab});
    this.props.setTab(TABS[selectedTab].title, TABS[selectedTab].extraActions || []);
  };
  render() {
    return (
      <TabBarIOS>
        {
          TABS.map((T, i) => (
            <TabBarIOS.Item
              systemIcon={T.systemIcon}
              title={T.title}
              key={T.title}
              selected={this.state.selectedTab === i}
              onPress={() => this._setTab(i)}>
              <T navigator={this.props.navigator} />
            </TabBarIOS.Item>
          ))
        }
      </TabBarIOS>
    );
  }
}
