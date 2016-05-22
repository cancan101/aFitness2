import React, {
  Component,
} from 'react';

import ExNavigator from '@exponent/react-native-navigator';

import { MainRouter } from '../../routers';
import TabContainer from '../TabContainer';

import styles from './styles';


export default class Main extends Component {
  setRoute = (route) => {
    this.setState({ route });
  };
  render() {
    return (
      <TabContainer />
    );
  }
}
