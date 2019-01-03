import { handleActions } from 'redux-actions';
import { UsersListActionType } from './usersList.actions';
import { getLocalStorage, setLocalStorage } from '../../utils';

const initialState = getLocalStorage('usersList') || [];

export const InsertUserReducer = (state, action) => {
  if (action.payload) {
    let newList = [...state, action.payload.user]
    setLocalStorage('usersList', newList);
    return newList;
  }
  return state
}

export const usersListReducer = handleActions(
  {
    [UsersListActionType.INSERT_USER]: InsertUserReducer,
  },
  initialState
);