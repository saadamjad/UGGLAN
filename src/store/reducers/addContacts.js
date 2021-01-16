import {ActionType} from '../actions';

const initialState = {
  isLoading: false,
  addFriendContacts: [],
};


export default (state = initialState, action) => {
    switch (action.type) {
      case ActionType.ADD_FRIEND_CONTACTS:
        return {...state, isLoading: true};
      case ActionType.ADD_FRIEND_CONTACTS_SUCCESS:
        return {...state, isLoading: false};
      case ActionType.ADD_FRIEND_CONTACTS_FAILD:
        return {...state, isLoading: false};
  
        default:
            return state
    }
  };
  