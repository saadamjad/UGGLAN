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

export default class UserMessageAction {
  static UserMessage = (data, token, navigation, func) => {
    console.log('data in action', data, token);
    return (dispatch) => {
      dispatch({type: ActionType.SEND_MESSAGE});

      post(`send`, data, token)
        .then((res) => {
          console.log('response of post api', res.data.data);
          func();
          dispatch({
            type: ActionType.SEND_MESSAGE_SUCCESS,
            payload: res.data.data,
          });
        })
        .catch((error) => {
          console.log('error', error);
          dispatch({type: ActionType.SEND_MESSAGE_FAILD});
        });
    };
  };

  static GetUserMessage = (token, userId, to) => {
    console.log('to id in  action ', to);
    return (dispatch) => {
      dispatch({type: ActionType.GET_MESSAGE});

      get(`getMsg/${to}`, token)
        .then((res) => {
          // console.log('message res', res.data.data);
          dispatch({
            type: ActionType.GET_MESSAGE_SUCCESS,
            payload: res.data.data,
          });
        })
        .catch((error) => {
          console.log('error', error);
          dispatch({type: ActionType.GET_MESSAGE_FAILD});
        });
    };
  };
}
