import { createAction } from "redux-actions";

export const UsersListActionType = {
  REGISTER_USER: 'REGISTER_USER',
  INSERT_USER: 'INSERT_USER'
};

export const UsersListAction = {
  addUser: createAction(UsersListActionType.REGISTER_USER),
  insertUser: createAction(UsersListActionType.INSERT_USER)
}
