import {
  UIManager,
  findNodeHandle,
} from 'react-native';


const ACTION_ITEM_SELECTED = 'itemSelected';


export function showPopupMenu(nodeRef, actions, callbacks) {
  UIManager.showPopupMenu(
    findNodeHandle(nodeRef),
    actions,
    () => {}, // error
    (action, i) => {  // success
      if (action === ACTION_ITEM_SELECTED) {
        callbacks[i]();
      }
    },
  );
}
