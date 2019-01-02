import { createAction } from "redux-actions";

export const UserFormActionType = {
  SET_ERRROR_MESSAGE: 'SET_ERRROR_MESSAGE'
}
export const UserFormAction = {
  setErrorMessage: createAction(UserFormActionType.SET_ERRROR_MESSAGE)
}
