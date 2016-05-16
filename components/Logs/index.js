import React, {
  Component,
} from 'react';

import PureRenderMixin from 'react-addons-pure-render-mixin';
import omit from 'lodash/omit';
import StaticContainer from 'react-static-container';

import realm from '../../realm';
import LogsInner from './LogsInner';


export default class Logs extends Component {
  static extraActions = LogsInner.extraActions;
  static title = LogsInner.title;
  static iconName = LogsInner.iconName;
  static receiveIsVisible = true;
  static propTypes = omit(LogsInner.propTypes, ['item']);

  constructor(props) {
    super(props);
    this._item = realm.objects('ActivitySet');
    this.state = {
      length: this._item.length,
    };
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  componentDidMount() {
    realm.addListener('change', this.onChange);
  }
  componentWillUnmount() {
    realm.removeListener('change', this.onChange);
  }
  onChange = () => {
    this.setState({ length: this._item.length });
  };
  render() {
    const { isVisible, ...props } = this.props;
    return (
      <StaticContainer shouldUpdate={isVisible}>
        <LogsInner {...props} item={this._item} length={this.state.length} />
      </StaticContainer>
    );
  }
}
