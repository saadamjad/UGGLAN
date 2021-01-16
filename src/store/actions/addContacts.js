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

export default class AddFriendContactsAction{
    static AddFriendContacts=(data,token,navigation)=>{
        console.log('add contacts data in action',data,token)
        return(dispatch)=>{
            dispatch({type:ActionType.ADD_FRIEND_CONTACTS})
            // navigation.navigate.goBack();

        }

    }


}