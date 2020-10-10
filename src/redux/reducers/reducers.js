// import {ActivityIndicator} from 'react-native';
// import * as actionTypes from '../actions/types';

// const initialState = {
//   userdata: {},
//   details: {},
//   loader: false,
//   uId: '',
//   myDetails: '',
//   Isloggedin: false,
// };

// export default function (state = initialState, action) {
//   // console.log('action.paylaod,', action.paylaod);

//   switch (action.type) {
//     case actionTypes.STARTLOADER:
//       console.log('loader start');
//       return {
//         ...state,
//         loader: true,
//       };

//     case actionTypes.STOPLOADER:
//       console.log('loader stope');
//       return {
//         ...state,
//         loader: false,
//       };
//     case actionTypes.USERDATA:
//       console.log('userData==>>>>', action.paylaod);
//       return {
//         ...state,
//         userdata: action.paylaod,
//       };
//     case actionTypes.UID:
//       console.log('UID', action.paylaod);
//       return {
//         ...state,
//         uId: action.paylaod,
//       };
//     case actionTypes.MYDETAILS:
//       console.log('mydetails==>>>', action.paylaod);
//       return {
//         ...state,
//         myDetails: action.paylaod,
//       };
//     case actionTypes.ISLOGGEDIN:
//       console.log('ISLOGG', action.paylaod);
//       return {
//         ...state,
//         Isloggedin: action.paylaod,
//       };
//     default:
//       return state;
//   }
// }
