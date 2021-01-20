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
          dispatch({type: ActionType.HIRE_SOME_ONE_FAILD});
        });
    };
  };

  static HireNow = (id, token,navigation) => {
    // console.log('Hire Some One id',id)
    return (dispatch) => {
      dispatch({type: ActionType.HIRE_NOW});

      post(`contacts/${id}`, {}, token)
        .then((res) => {
          console.log('res', res.data.message);
          if(res.data.success){
            dispatch({type:ActionType.HIRE_NOW_SUCCESS,payload:res.data.message})
            ToastError(res.data.message);
              navigation.navigate('selectPaymentMethod');


          }
          else{
            dispatch({type:ActionType.HIRE_NOW_FAILD})
            ToastError(res.data.message);
            // navigation.navigate('selectPaymentMethod');

          }
        })
        .catch((eror) => {
          console.log('error', eror);
          dispatch({type:ActionType.HIRE_NOW_FAILD})
        });
    };
  };
  static SendSomeData = (data) => {
    // console.log('Hire Some One data',data)
    return (dispatch) => {
      dispatch({type: ActionType.HIRE_PERSON_DATA,})
    dispatch({type:ActionType.HIRE_PERSON_DATA_SUCCESS,payload:data})
    dispatch({type:ActionType.HIRE_PERSON_DATA_FAILD})
      
      
    };
  };
}
