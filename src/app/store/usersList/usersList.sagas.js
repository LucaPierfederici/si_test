// import { Action } from 'redux-actions'
import { UsersListAction, UsersListActionType } from '../usersList/usersList.actions';
import { takeLatest, put, select } from 'redux-saga/effects';
import { getRegisteredUsers } from './usersList.selectors';
import { UserFormAction } from '../../ui/components/UserForm/redux/UserForm.actions';
import { UserAction } from '../user/user.actions';
import pickBy from 'lodash/pickBy';

export function* addUser(action) {

  action.payload.password = action.payload.password.trim()
  action.payload = pickBy(action.payload);

  yield put(UserFormAction.setErrorMessage(''))

  if (!action.payload || Object.keys(action.payload).length === 0) {
    yield put(UserFormAction.setErrorMessage('Insert email and password'))
    return
  }

  if (!action.payload.email.includes('@')) {
    yield put(UserFormAction.setErrorMessage('invalid email'))
    return
  }

  if (!action.payload.password || action.payload.password.length < 8) {
    yield put(UserFormAction.setErrorMessage('Password must be at least 8 characters long'))
    return
  }

  let users = yield select(getRegisteredUsers);

  if (users.find(t => t.email === action.payload.email)) {
    yield put(UserFormAction.setErrorMessage('Email already used'));
    return
  }

  yield put(UsersListAction.insertUser({user: action.payload}))
  yield put(UserAction.loginUser(action.payload))

}

export default function* () {
  yield takeLatest(UsersListActionType.REGISTER_USER, addUser);
}