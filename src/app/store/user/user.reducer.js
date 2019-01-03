import { handleActions } from 'redux-actions';
import { UserActionType } from './user.actions';
import { setLocalStorage, getLocalStorage, deleteLocalStorage } from '../../utils';

const initialState = getLocalStorage('loggedUser') || {};

export const SaveUserReducer = (state, action) => {
  if (action.payload) {
    setLocalStorage('loggedUser', action.payload);
    return {
      ...state,
      email: action.payload.email,
      password: action.payload.password
    };
  }
  return state
}
export const LogoutUserReducer = (state, action) => {
  if (action.payload) {
    deleteLocalStorage('loggedUser');
    return {
      
    };
  }
  return state
}

export const userReducer = handleActions(
  {
    [UserActionType.SAVE_USER]: SaveUserReducer,
    [UserActionType.LOGOUT_USER]: LogoutUserReducer,
  },
  initialState
);