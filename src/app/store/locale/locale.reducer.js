import { handleActions } from 'redux-actions';
import { LocaleActionType } from './locale.actions';

const initialState = {
  lang: 'it-IT'
};

export const SetLocale = (state, action) => {
  if (action.payload) {
    return {
      ...state,
      lang: action.payload,
    };
  }
  return state
}

export const localeReducer = handleActions(
  {
    [LocaleActionType.SET_LOCALE]: SetLocale,
  },
  initialState
);