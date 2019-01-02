import { createAction } from "redux-actions";

export const UserActionType = {
  REGISTER_USER: 'REGISTER_USER',
  LOGIN_USER: 'LOGIN_USER'
};

export const UserAction = {
  registerUser: createAction(UserActionType.REGISTER_USER),
  loginUser: createAction(UserActionType.LOGIN_USER)
}
