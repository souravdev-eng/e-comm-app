import axios from 'axios';
import {API_URL} from '../../config/apiEndPoint';
import {UserActionType} from './../types/user.types';

export const userLoginAction =
  (email: string, password: string) => async (dispatch: any) => {
    dispatch({type: UserActionType.LOGIN_REQUEST});
    try {
      const {data} = await axios.post(
        `${API_URL}/user/login`,
        {email, password},
        {headers: {'Content-Type': 'application/json'}},
      );

      dispatch({
        type: UserActionType.LOGIN_REQUEST_SUCCESS,
        payload: {
          token: data.token,
          ...data.user,
        },
      });
    } catch (error: any) {
      const errors = error.response.data.errors.map((e: any) => e.message);
      dispatch({
        type: UserActionType.LOGIN_REQUEST_FAIL,
        payload: errors,
      });
    }
  };
