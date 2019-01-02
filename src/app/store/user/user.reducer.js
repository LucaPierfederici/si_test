import { handleActions } from 'redux-actions';
import { UserActionType } from './user.actions';

const initialState = {
    email: 'default@wink.by',
    password: 'password'
};

export const LoginUserReducer = (state, action) => {
  if (action.payload) {
    return {
      ...state,
      email: action.payload.email,
      name: action.payload.password
    };
  }
  return state
}

export const userReducer = handleActions(
  {
    [UserActionType.LOGIN_USER]: LoginUserReducer,
  },
  initialState
);