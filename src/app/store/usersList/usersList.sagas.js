// import { Action } from 'redux-actions'
import { UsersListAction, UsersListActionType } from '../usersList/usersList.actions';
import { takeLatest, put, select } from 'redux-saga/effects';
import { getRegisteredUsers } from './usersList.selectors';
import { UserFormAction } from '../../ui/components/UserForm/redux/UserForm.actions';
import { UserAction } from '../user/user.actions';
import pickBy from 'lodash/pickBy';

export function* addUser(action) {
  const minLength = 8;

  action.payload.password = action.payload.password.trim()
  action.payload = pickBy(action.payload);

  yield put(UserFormAction.setErrorMessage({text: ''}))

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

  if (users.find(t => t.email === action.payload.email)) {
    yield put(UserFormAction.setErrorMessage({text: 'shared.email_used'}));
    return
  }

  yield put(UsersListAction.insertUser({ user: action.payload }))
  yield put(UserAction.loginUser(action.payload))

}

export default function* () {
  yield takeLatest(UsersListActionType.REGISTER_USER, addUser);
}