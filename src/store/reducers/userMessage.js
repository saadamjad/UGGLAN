import {ActionType} from '../actions';

const initialState = {
  userMessage: [],
  getUserMessage: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SEND_MESSAGE:
      return {...state};
    case ActionType.SEND_MESSAGE_SUCCESS:
      return {...state, userMessage: action.payload};
    case ActionType.SEND_MESSAGE_FAILD:
      return {...state};

    case ActionType.GET_MESSAGE:
      return {...state};
    case ActionType.GET_MESSAGE_SUCCESS:
      return {...state, getUserMessage: action.payload};
    case ActionType.GET_MESSAGE_FAILD:
      return {...state};
    default:
      return state;
  }
};
