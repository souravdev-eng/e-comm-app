interface User {
  id: string;
  name: string;
  email: string;
  profileImage: string;
  role: string;
}

export interface UserState {
  currentUser: User | null;
  error: null | string[];
  loading: boolean;
}

export const UserActionType = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_REQUEST_SUCCESS: 'LOGIN_REQUEST_SUCCESS',
  LOGIN_REQUEST_FAIL: 'LOGIN_REQUEST_FAIL',
  LOGOUT_REQUEST: 'LOGOUT',

  REGISTER_REQUEST: 'REGISTER_REQUEST',
  REGISTER_REQUEST_SUCCESS: 'REGISTER_REQUEST_SUCCESS',
  REGISTER_REQUEST_FAIL: 'REGISTER_REQUEST_FAIL',
};
