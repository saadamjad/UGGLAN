import {ActionType} from '../actions';

const initialState = {
userMessage:[]
};


export default (state = initialState, action) => {
    switch (action.type) {
      case ActionType.SEND_MESSAGE:
        return {...state, userMessage:action.payload};
  
  
      default:
        return state;
    }
  };