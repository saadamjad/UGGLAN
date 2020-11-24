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
    case ActionType.SIGNUP:
      return {...state, isLoading: true};
    case ActionType.SIGNUP_SUCCESS:
      return {...state, isLoading: false, userData: action.payload};
    case ActionType.SIGNUP_FAIL:
      return {...state, isLoading: false};

    default:
      return state;
  }
};
