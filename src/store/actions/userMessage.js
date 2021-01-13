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



export default class UserMessageAction{
    static UserMessage=(data,token)=>{
        console.log('data in action',data,token)
        return (dispatch) => {
            dispatch({type: ActionType.SEND_MESSAGE});
      
            post(`send`, data, token)
            .then((res)=>{
                console.log('res data',res.data)
            })
            .catch((error)=>{
                console.log('error', eror);
            })
            //   .then((res) => {
            //     console.log('res', res.data.message);
            //     if(res.data.success){
            //       dispatch({type:ActionType.HIRE_NOW_SUCCESS,payload:res.data.message})
            //       ToastError(res.data.message);
            //         navigation.navigate('selectPaymentMethod');
      
      
            //     }
            //     else{
            //       dispatch({type:ActionType.HIRE_NOW_FAILD})
            //       ToastError(res.data.message);
            //       navigation.navigate('selectPaymentMethod');
      
            //     }
            //   })
            //   .catch((eror) => {
            //     console.log('error', eror);
            //     dispatch({type:ActionType.HIRE_NOW_FAILD})
            //   });
          };


    }
}