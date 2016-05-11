import React, {
  Component,
} from 'react';

import realm from '../../realm';
import ExerciseInner from './ExerciseInner';
import { getToday } from '../../utils';


const { item, ...parentProps } = ExerciseInner.propTypes;


export default class Exercise extends Component {
  static extraActions = ExerciseInner.extraActions;

  static propTypes = parentProps;

  constructor(props) {
    super(props);
    this.state = {
      item: realm.objects('ActivitySet').filtered(
        'exercise == $0 && workoutDate == $1', this.props.exercise, getToday()),
    };
  }
  componentDidMount() {
    realm.addListener('change', this.onChange);
  }
  componentWillUnmount() {
    realm.removeListener('change', this.onChange);
  }
  onChange = () => {
    this.setState({ item: this.state.item });
  };
  render() {
    return <ExerciseInner {...this.props} item={this.state.item} />;
  }
}
