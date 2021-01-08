import {ActionType} from '../actions';

const initialState = {
  isLoading: false,
  userPayments: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionType.PAYMENT_METHOD:
      return {...state, isLoading: true};
    case ActionType.PAYMENT_METHOD_SUCCESS:
      return {...state, isLoading: false, userPayments: action.payload};

    case ActionType.PAYMENT_METHOD_FAIL:
      return {...state, isLoading: false};

    case ActionType.ADD_PAYMENT_METHOD:
      return {...state, isLoading: true};
    case ActionType.ADD_PAYMENT_METHOD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userPayments: [...state.userPayments, action.payload],
      };
    case ActionType.ADD_PAYMENT_METHOD_FAIL:
      return {...state, isLoading: false};

    case ActionType.DELETE_PAYMENT_METHOD:
      return {...state, isLoading: true};
    case ActionType.DELETE_PAYMENT_METHOD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userPayments: state.userPayments.filter(
          (item, i) => action.payload !== item._id,
        ),
      };
    case ActionType.DELETE_PAYMENT_METHOD_FAIL:
      return {...state, isLoading: false};
    default:
      return state;
  }
};
