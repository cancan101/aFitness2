import React, { Component } from 'react';

import { StyleSheet } from 'react-native';


import Icon from 'react-native-vector-icons/MaterialIcons';

import { TOOLBAR_BACKGROUND_COLOR, TOOLBAR_TITLE_COLOR } from '../../colors';


const styles = StyleSheet.create({
  toolbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: TOOLBAR_BACKGROUND_COLOR,
    height: 56,
  },
});


export default class Toolbar extends Component {
  static propTypes = {
    openDrawer: React.PropTypes.func,
    route: React.PropTypes.object.isRequired,
    navigator: React.PropTypes.object.isRequired,
  };

  handleIconClicked = () => {
    const { openDrawer, navigator } = this.props;
    const routes = navigator.getCurrentRoutes();

    return routes.length > 1 ? navigator.pop() : openDrawer && openDrawer();
  };

  render() {
    const { route, navigator } = this.props;
    const routes = navigator.getCurrentRoutes();
    let navIconName = undefined;

    for (let i = routes.length - 1; i >= 0; i--) {
      if (routes[i] === route && i > 0) {
        navIconName = 'arrow-back';
        break;
      }
    }

    const extraActions = (
      (route.getExtraActions && route.getExtraActions())
      || route.extraActions
      || []
    );

    return (
      <Icon.ToolbarAndroid
        navIconName={navIconName}
        onIconClicked={this.handleIconClicked}
        title={route.getTitle()}
        titleColor={TOOLBAR_TITLE_COLOR}
        style={styles.toolbar}
        actions={extraActions}
        onActionSelected={i => extraActions[i].onSelected(navigator, route)}
      />
    );
  }
}
