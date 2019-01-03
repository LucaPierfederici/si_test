import { createAction } from "redux-actions";

export const LocaleActionType = {
  SET_LOCALE: 'SET_LOCALE'
};

export const LocaleAction = {
  setLocale: createAction(LocaleActionType.SET_LOCALE)
}
