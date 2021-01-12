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

export default class AllContactsAction {
  static AllContacts = (token) => {
    // console.log('token in action',token)
    return (dispatch) => {
      dispatch({type: ActionType.GET_ALL_CONTACTS});

      get('contacts/0/', token)
        .then((res) => {
        //   console.log('All contacts data',res.data.data)
          if (res.data.success) {
            dispatch({
              type: ActionType.GET_ALL_CONTACTS_SUCCESS,
              payload: res.data.data,
            });
          } else {
            dispatch({type: ActionType.GET_ALL_CONTACTS_FAILD});
            ToastError(res.data.message);
          }
        })
        .catch((error) => {
          console.log('error', error);
          dispatch({type: ActionType.GET_ALL_CONTACTS_FAILD});
        });
    };
  };
}
