import {ActionType} from '../actions';

const initialState = {
  isLoading: false,
  allContacts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_ALL_CONTACTS:
      return {...state, isLoading: true};
    case ActionType.GET_ALL_CONTACTS_SUCCESS:
      return {...state, isLoading: false,allContacts:action.payload};
    case ActionType.GET_ALL_CONTACTS_FAILD:
      return {...state, isLoading: false};

      default:
          return state
  }
};
