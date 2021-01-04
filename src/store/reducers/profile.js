// import {ActionType} from '../actions';

// const initialState = {
//   isLoading: false,
//   userData: {},
//   token: '',
//   role: 'watcher',
// };

// export default (state = initialState, action) => {
//   switch (action.type) {

//     case ActionType.UPDATE_USER_PROFILE:
//       return {...state, isLoading: true};

//     case ActionType.UPDATE_USER_PROFILE_SUCCESS:
//       console.log('I AM HERE', {...state.userData, ...action.payload});
//       return {
//         ...state,
//         userData: {
//           ...state.userData,
//           user: {...state.userData.user, ...action.payload},
//         },
//         isLoading: false,
//       };
   
//     case ActionType.UPDATE_USER_PROFILE_FAIL:
//       return {...state, isLoading: false};
  

//     default:
//       return state;
//   }
// };

// faltu reducr
// 