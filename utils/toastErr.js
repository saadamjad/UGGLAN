// import Toast, {DURATION} from 'react-native-easy-toast';
import Toast from 'react-native-simple-toast';
import {ToastAndroid, Platform} from 'react-native';
export function ToastError(msg) {
  if (Platform.OS == 'android') {
    ToastAndroid.showWithGravityAndOffset(
      msg,
      ToastAndroid.LONG,
      ToastAndroid.TOP,
      0,
      200,
    );
  } else {
    Toast.show(msg);
  }
}

export default ToastError;
