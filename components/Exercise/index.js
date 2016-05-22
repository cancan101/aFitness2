import React, {
  Component,
} from 'react';

import realm from '../../realm';
import ExerciseInner from './ExerciseInner';
import { getToday } from '../../utils';


export default class Exercise extends Component {
  static extraActions = ExerciseInner.extraActions;

  static propTypes = {
    exercise: React.PropTypes.object.isRequired,
  };

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
