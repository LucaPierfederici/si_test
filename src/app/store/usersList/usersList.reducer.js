import { handleActions } from 'redux-actions';
import { UsersListActionType } from './usersList.actions';

const initialState = [
  {
    email: 'default@wink.by',
    password: 'password'
  }
];

export const AddUserReducer = (state, action) => {
  if (action.payload) {
    return [...state, action.payload.user];
  }
  return state
}

export const usersListReducer = handleActions(
  {
    [UsersListActionType.ADD_USER]: AddUserReducer,
  },
  initialState
);