import {Alert, Keyboard, BackHandler} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {ActionType} from '../actions';
import {login, post, put, signup, get} from '../../../utils/api-call';
// import {actionDispatch} from '../../utils/return-obj';
import {ToastError} from '../../../utils/toastErr';
// import {API_URL} from '../../../utils/api-call';
// import {parseSync} from '@babel/core';
// import {Toast} from 'native-base';

export default class AuthAction {
  static Login = (data, navigation) => {
    console.log('data', data);
    return (dispatch) => {
      dispatch({type: ActionType.LOGIN}); //loader for login
      login('login', data)
        .then((res) => {
          console.log('res', res.data);
          if (res.data.success) {
            dispatch({type: ActionType.LOGIN_SUCCESS, payload: res.data});
            navigation.navigate('signup');
          } else {
            dispatch({type: ActionType.LOGIN_UNSUCCESS});
            ToastError(res.data.message);
          }
        })
        .catch((err) => {
          console.log('Err', err);
        });
    };
  };
  static signup = (data, navigation) => {
    return (dispatch) => {
      dispatch({type: ActionType.SIGNUP});

      signup('register', data)
        .then((res) => {
          console.log('res', res.data);
          if (res.data.success) {
            dispatch({type: ActionType.SIGNUP, payload: res.data});
          } else {
            dispatch({type: ActionType.SIGNUP_UNSUCCESS});
          }
        })
        .catch((err) => {
          dispatch({type: ActionType.SIGNUP_UNSUCCESS});
          console.log('Err', err);
        });
    };
  };
}
