import {ActionType} from '../actions';

const initialState = {
  isLoading: false,
  hireSomeoneData: [],
  hirePersonelData: {},
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionType.HIRE_SOME_ONE:
      return {...state, isLoading: true};

    case ActionType.HIRE_SOME_ONE_SUCCESS:
      return {...state, isLoading: false, hireSomeOneData: action.payload};

    case ActionType.HIRE_SOME_ONE_FAILD:
      return {...state, isLoading: false};

    case ActionType.HIRE_NOW:
      return {...state, isLoading: true};

    case ActionType.HIRE_NOW_SUCCESS:
      return {...state, isLoading: false, message: action.payload};
    case ActionType.HIRE_NOW_FAILD:
      return {...state, isLoading: false, message: action.payload};

    case ActionType.HIRE_PERSON_DATA:
      return {...state, isLoading: true};
    case ActionType.HIRE_PERSON_DATA_SUCCESS:
      return {...state, isLoading: false, hirePersonelData: action.payload};
    case ActionType.HIRE_PERSON_DATA_FAILD:
      return {...state, isLoading: false};

    default:
      return state;
  }
};
