import { createAction } from "redux-actions";

export const UserActionType = {
  LOGIN_USER: 'LOGIN_USER',
  LOGOUT_USER: 'LOGOUT_USER',
  SAVE_USER: 'SAVE_USER'
};

export const UserAction = {
  loginUser: createAction(UserActionType.LOGIN_USER),
  logoutUser: createAction(UserActionType.LOGOUT_USER),
  saveUser: createAction(UserActionType.SAVE_USER)
}
