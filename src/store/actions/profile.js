import {Alert, Keyboard, BackHandler} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {ActionType} from '../actions';
import {login, post, put, signup, get, Otp} from '../../../utils/api-call';
// import {actionDispatch} from '../../utils/return-obj';
import {ToastError} from '../../../utils/toastErr';
// import {API_URL} from '../../../utils/api-call';
// import {parseSync} from '@babel/core';
// import {Toast} from 'native-base';

export default class ProfileAction {
  static SaveChanges = (data, navigation, token, func) => {
    console.log('profile data', data);
    return (dispatch) => {
      dispatch({type: ActionType.UPDATE_USER});

      put('users', data, null, token)
        .then(async (res) => {
          let data = await res.json();
          console.log('HERE IS DATA', data);
          if (data.success) {
            func(); 
            dispatch({
              type: ActionType.UPDATE_USER_SUCCESS,
              payload: data.whatIsNew,
            });
            ToastError(data.message);
            // navigation.navigate('otp');
          } else {
            dispatch({type: ActionType.UPDATE_USER_FAIL});
            ToastError(data.message);
          }
        })
        .catch((err) => {
          dispatch({type: ActionType.UPDATE_USER_FAIL, isLoading: false});
          console.log('err', err);
          //   dispatch({type: ActionType.OTP_FAIL, isLoading: false});
        });
    };
  };
}
