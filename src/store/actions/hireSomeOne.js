import {Alert, Keyboard, BackHandler} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {ActionType} from '../actions';
import {
  login,
  post,
  put,
  signup,
  get,
  Otp,
  Delete,
} from '../../../utils/api-call';
// import {actionDispatch} from '../../utils/return-obj';
import {ToastError} from '../../../utils/toastErr';
// import {API_URL} from '../../../utils/api-call';
// import {parseSync} from '@babel/core';
// import {Toast} from 'native-base';

export default class HireSomeOneAction {
  static HireSomeOne = (token) => {
    // console.log('Token Scurit in action',token)
    return (dispatch) => {
      dispatch({type: ActionType.HIRE_SOME_ONE});

      get('security', token)
        .then((res) => {
          console.log('data', res.data);
          if (res.data.success) {
            dispatch({
              type: ActionType.HIRE_SOME_ONE_SUCCESS,
              payload: res.data.data,
            });
          } else {
            dispatch({type: ActionType.HIRE_SOME_ONE_FAILD});
            ToastError(res.data.message);
          }
        })
        .catch((error) => {
          console.log('Error', error);
        });
    };
  };

  static HireNow = (id, token) => {
    // console.log('Hire Some One id',id)
    return (dispatch) => {
      dispatch({type: ActionType.HIRE_NOW});

      post(`contacts/${id}`, {}, token)
        .then((res) => {
          console.log('res', res.data.message);
        })
        .catch((eror) => {
          console.log('error', eror);
        });
    };
  };
  static SendSomeData = (data) => {
    console.log('Hire Some One data',data)
    return (dispatch) => {
      dispatch({type: ActionType.HIRE_PERSON_DATA, payload: data});
    };
  };
}
