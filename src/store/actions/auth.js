import {Alert, Keyboard, BackHandler} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {ActionType} from '../actions';
import {login, post, put, signup, get, Otp} from '../../../utils/api-call';
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
  static Signup = (data, navigation) => {
    return (dispatch) => {
      dispatch({type: ActionType.SIGNUP});

      signup('signUp', data)
        .then((res) => {
          console.log('res', res.data);
          if (res.data.success) {
            navigation.navigate('otp');
            dispatch({type: ActionType.SIGNUP_SUCCESS});
          } else if (!res.data.success) {
            console.log('esle if ');
            dispatch({type: ActionType.SIGNUP_FAIL});
            ToastError(res.data.message);
          } else {
            console.log('else');
            dispatch({type: ActionType.SIGNUP_FAIL});
            ToastError(res.data.message);
          }
        })
        .catch((err) => {
          dispatch({type: ActionType.SIGNUP_FAIL});

          console.log('Err', err);
        });
    };
  };
  static Otp = (data, navigation) => {
    console.log('otp===', data);
    return (dispatch) => {
      dispatch({type: ActionType.OTP, isLoading: true});

      Otp('otp', {to: data})
        .then((res) => {
          dispatch({type: ActionType.OTP_SUCCESS, isLoading: false});
          console.log('response from otp', res.data);
        })
        .catch((err) => {
          console.log('err', err);
          dispatch({type: ActionType.OTP_FAIL, isLoading: false});
        });
    };
  };
}
