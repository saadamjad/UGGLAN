import {ActionType} from '../actions';

const initialState = {
  isLoading: false,
  userData: {},
  token: '',
  role: 'watcher',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOGIN:
      return {...state, isLoading: true};

    case ActionType.LOGIN_SUCCESS:
      return {...state, isLoading: false, userData: action.payload};

    case ActionType.LOGIN_UNSUCCESS:
      return {...state, isLoading: false};
    case ActionType.UPDATE_USER:
      return {...state, isLoading: true};

    case ActionType.UPDATE_USER_SUCCESS:
      return {...state, isLoading: false};
    case ActionType.LOGOUT:
      return initialState;
    case ActionType.UPDATE_USER_FAIL:
      return {...state, isLoading: false};
    case ActionType.SIGNUP:
      return {...state, isLoading: true};
    case ActionType.SIGNUP_SUCCESS:
      return {...state, isLoading: false, userData: action.payload};
    case ActionType.SIGNUP_FAIL:
      return {...state, isLoading: false};
    case ActionType.OTP:
      return {isLoading: true};
    case ActionType.OTP_SUCCESS:
      return {isLoading: false};
    case ActionType.OTP_FAIL:
      return {isLoading: false};

    default:
      return state;
  }
};
