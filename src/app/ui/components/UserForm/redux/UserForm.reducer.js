import { handleActions } from 'redux-actions'
import { UserFormActionType } from './UserForm.actions';

const initialState = {
  errorMessage: {}
};

export const UserFormReducer = handleActions(
  {
    [UserFormActionType.SET_ERRROR_MESSAGE]: (state, action) => {
      return {
        errorMessage: action.payload
      }
    }
  },
  initialState
);