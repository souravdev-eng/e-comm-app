import {UserActionType, UserState} from '../types/user.types';

const INITIAL_STATE = {
  currentUser: null,
  error: null,
  loading: false,
};

export const userReducer = (
  state: UserState = INITIAL_STATE,
  action: any,
): UserState => {
  switch (action.type) {
    case UserActionType.LOGIN_REQUEST:
      return {currentUser: null, loading: true, error: null};
    case UserActionType.LOGIN_REQUEST_SUCCESS:
      return {loading: false, error: null, currentUser: action.payload};
    case UserActionType.LOGIN_REQUEST_FAIL:
      return {currentUser: null, loading: false, error: action.payload};
    case UserActionType.LOGOUT_REQUEST:
      return {currentUser: null, loading: false, error: null};
    default:
      return state;
  }
};
