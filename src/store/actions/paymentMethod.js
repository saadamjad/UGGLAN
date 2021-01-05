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
} from '../../../utils/api-call';
// import {actionDispatch} from '../../utils/return-obj';
import {ToastError} from '../../../utils/toastErr';
// import {API_URL} from '../../../utils/api-call';
// import {parseSync} from '@babel/core';
// import {Toast} from 'native-base';

export default class PaymentMethodAction {
  static PaymentMethod = (token) => {
    // console.log("token in action",token)
    return (dispatch) => {
      dispatch({type: ActionType.PAYMENT_METHOD});
      get('payments', token)
        .then((res) => {
          // console.log('data',res.data.data)

          if (res.data.success) {
            dispatch({
              type: ActionType.PAYMENT_METHOD_SUCCESS,
              payload: res.data.data,
            });
            // ToastError(res.data.message);
          } else {
            dispatch({type: ActionType.PAYMENT_METHOD_FAIL});
            ToastError(res.data.message);
          }
        })
        .catch((err) => {
          console.log('err', err);
          dispatch({type: ActionType.PAYMENT_METHOD_FAIL, isLoading: false});
        });
    };
  };

  static AddPaymentMethod = (data, token,navigation) => {
    console.log('payment data in action', data);
    return (dispatch) => {
      dispatch({type: ActionType.ADD_PAYMENT_METHOD});
      post('payments', data,token).then((res) => {
        if (res.data.success) {
            dispatch({
              type: ActionType.ADD_PAYMENT_METHOD_SUCCESS,
              payload: res.data,
            });
            ToastError(res.data.message);
            navigation.navigate('addPayment');
          } else {
            dispatch({type: ActionType.ADD_PAYMENT_METHOD_FAIL});
            ToastError(res.data.message);
          }
      })
      .catch((err) => {
        console.log('err', err);
        dispatch({type: ActionType.ADD_PAYMENT_METHOD_FAIL, isLoading: false});
      });
    };
  };
}
