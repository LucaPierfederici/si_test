import { UserAction, UserActionType } from '../user/user.actions';
import { takeLatest, put, select } from 'redux-saga/effects';
import { getRegisteredUsers } from '../usersList/usersList.selectors';
import { UserFormAction } from '../../ui/components/UserForm/redux/UserForm.actions';
import pickBy from 'lodash/pickBy';

export function* loginUser(action) {

  const minLength = 8;

  action.payload.password = action.payload.password.trim()
  action.payload = pickBy(action.payload);

  yield put(UserFormAction.setErrorMessage({text:''}))

  if (!action.payload || Object.keys(action.payload).length === 0) {
    yield put(UserFormAction.setErrorMessage({text: 'shared.email_pass_missing'}))
    return
  }

  if (!action.payload.email.includes('@')) {
    yield put(UserFormAction.setErrorMessage({text: 'shared.invalid_email'}))
    return
  }
  

  if (!action.payload.password || action.payload.password.length < minLength) {
    yield put(UserFormAction.setErrorMessage({text: 'shared.password_len', params: {minLength}}))
    return
  }

  let users = yield select(getRegisteredUsers);

  if (!users.find(t => t.email === action.payload.email && t.password === action.payload.password)) {
    yield put(UserFormAction.setErrorMessage({text:'shared.email_pass_wrong'}));
    return
  }

  yield put(UserAction.saveUser(action.payload));

}

export default function* () {
  yield takeLatest(UserActionType.LOGIN_USER, loginUser);
}