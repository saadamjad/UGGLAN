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
            navigation.navigate('HomeStacks');
          } else {
            dispatch({type: ActionType.LOGIN_UNSUCCESS});
            ToastError(res.data.message);
            if (res.data.messageCode == 1) {
              Alert.alert(
                'Verification',
                'are you want to confirm your email address',
                [
                  {
                    text: 'Cancel',
                    onPress: () => {},
                  },
                  {
                    text: 'OK',
                    onPress: () => {
                      dispatch(
                        this.Otp(data.email, navigation, res.data.token),
                      );
                      navigation.navigate('otp');
                    },
                  },
                ],
              );
            }
          }
        })
        .catch((err) => {
          console.log('Err====', err);
        });
    };
  };
  static Signup = (data, navigation) => {
    console.log('data,', data);
    return (dispatch) => {
      dispatch({type: ActionType.SIGNUP});

      signup('signUp', data)
        .then((res) => {
          console.log('res', res.data);
          if (res.data.success) {
            navigation.navigate('otp');
            dispatch({type: ActionType.SIGNUP_SUCCESS, payload: res.data});
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
  static UpdateUser = (data, navigation, token) => {
    console.log('otp===', data);
    return (dispatch) => {
      dispatch({type: ActionType.UPDATE_USER});

      put('users', data, null, token)
        .then(async (res) => {
          let data = await res.json();
          console.log('HERE IS DATA', data);
          if (data.success) {
            dispatch({type: ActionType.UPDATE_USER_SUCCESS, payload: data.whatIsNew});
            navigation.navigate('login');
            // navigation.navigate('otp');
          } else {
            dispatch({type: ActionType.UPDATE_USER_FAIL});
            ToastError(data.message);
          }
        })
        .catch((err) => {
          dispatch({type: ActionType.UPDATE_USER_FAIL});
          console.log('err', err);
          dispatch({type: ActionType.OTP_FAIL, isLoading: false});
        });
    };
  };
  static Otp = (data, navigation, token) => {
    console.log('otp===', data);
    return (dispatch) => {
      dispatch({type: ActionType.OTP, isLoading: true});

      Otp('otp', {to: data})
        .then((res) => {
          if (res.data.success) {
            dispatch({type: ActionType.OTP_SUCCESS, isLoading: false});
            dispatch({
              type: ActionType.SIGNUP_SUCCESS,
              payload: {user: {}, otp: res.data.otp, token},
            });
            console.log('response from otp', res.data);
            return res.data;
            // navigation.navigate('otp');
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.log('err', err.response?.data?.message);
          dispatch({type: ActionType.OTP_FAIL, isLoading: false});
        });
    };
  };
  static Logout = (data, navigation, token) => {
    return (dispatch) => {
      dispatch({type: ActionType.LOGOUT});
    };
  };
}
