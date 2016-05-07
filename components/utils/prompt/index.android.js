import DialogAndroid from 'react-native-dialogs';

/*
 * only supports two action buttons
 * and assumes options to be an array of 2 button configs
 * does not support different inputTypes yet. (only plain-text)
 */
function prompt(label, description, options, inputType, defaultInputValue) {
  const config = {
    title: label,
    content: description,
  };

  const postiveInfo = options[0].style === 'cancel' ? options[1] : options[0];
  const negativeInfo = options[0].style === 'cancel' ? options[0] : options[1];

  config.positiveText = postiveInfo.text;
  config.negativeText = negativeInfo.text;

  config.input = {
    callback: postiveInfo.onPress,
    prefill: defaultInputValue || '',
  };

  const dialog = new DialogAndroid();
  dialog.set(config);
  dialog.show();
}

export default prompt;
