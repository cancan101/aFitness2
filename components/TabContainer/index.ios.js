import React, {
  Component,
  TabBarIOS,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Exercises from '../Exercises';
import Workouts from '../Workouts';
import Logs from '../Logs';


const TABS = [Exercises, Workouts, Logs, ];
const INITIAL_PAGE = 0;


export default class TabContainer extends Component {
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
            <Icon.TabBarItemIOS
              iconName={T.iconName}
              title={T.title}
              key={T.title}
              selected={this.state.selectedTab === i}
              onPress={() => this._setTab(i)}>
              <T navigator={this.props.navigator} />
            </Icon.TabBarItemIOS>
          ))
        }
      </TabBarIOS>
    );
  }
}
