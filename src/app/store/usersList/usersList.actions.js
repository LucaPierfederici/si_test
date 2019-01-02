import { createAction } from "redux-actions";

export const UsersListActionType = {
  ADD_USER: 'ADD_USER'
};

export const UsersListAction = {
  addUser: createAction(UsersListActionType.ADD_USER)
}
